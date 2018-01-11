/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,StyleSheet,Platform,ListView,Keyboard
} from 'react-native';

import Header from "./header";
import Footer from "./footer";
import Row  from "./row";
const filterItems = (filter, items)=>{
    return items.filter((item) => {
        if (filter === "ALL") return true;
        if (filter === "Active") return !item.complete;
        if (filter === "Complete") return item.complete;
    })
}
export default class App extends Component<{}> {
    constructor(props){
        super(props);

        const  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            allComplete:false,
            todoValue:'',
            items:[],
            dataSource:ds.cloneWithRows([]),
            filter:"ALL"
        }

        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
        this.handleToggleComplete= this.handleToggleComplete.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
        this.handleFilterTodo = this.handleFilterTodo.bind(this);

    }

    setSource(items, itemsDatasource, otherState = {}) {
        this.setState({
            items,
            dataSource: this.state.dataSource.cloneWithRows(itemsDatasource),
            ...otherState
        })
        console.table(this.state.items);
    }


    //新增任务
    handleAddItem(){
        if(!this.state.todoValue) return;

        const  newItems = [
            ...this.state.items,
            {
                key:Date.now(),
                todoText:this.state.todoValue,
                complete:false
            }
        ]
        this.setSource(newItems,filterItems(this.state.filter, newItems),{todoValue : ""});
    }

    handleToggleComplete(key,complete){
        const newItems = this.state.items.map((item)=>{
            if (item.key !== key) return item;
            return{
                ...item,
                complete
            }
        })
        this.setSource(newItems, filterItems(this.state.filter, newItems));
    }

    //全部完成
    handleToggleAllComplete(){
        const complete = !this.state.allComplete;
        const newItems = this.state.items.map((item) => ({
            ...item,
            complete
        }))

        this.setSource(newItems,filterItems(this.state.filter, newItems),{allComplete : complete});

        console.table(this.state.items);
    }

    deleteTodoItem(key){
        console.table(this.state.items);
        const newitems =  this.state.items.filter((item)=>{
            return item.key !== key
        })
        this.setSource(newitems,filterItems(this.state.filter, newitems));
    }

    //方案一  缺点无法将过滤方法用在其他方法中
    handleFilterTodo(filter){

        this.setSource(this.state.items, filterItems(filter, this.state.items),{filter})

        // const newItems = this.state.items.filter((item)=>{
        //     if(filter === "ALL"){
        //         return true;
        //     }
        //     else if(filter === "Active"){
        //         return !item.complete;
        //     }
        //     else if(filter == "Complete"){
        //         return item.complete;
        //     }
        // })
        // this.setSource(this.state.items, newItems)
    }

  render() {
    return (
      <View style={styles.container}>
          <Header
              todoValue={this.state.todoValue}
              onAddItem = {this.handleAddItem}
              onChange = {(text) => this.setState(
                  {
                      todoValue:text
                  }
              )}
              onToggleAllComplete = {this.handleToggleAllComplete}
          />

          <View style = {styles.content}>
            <ListView
                removeClippedSubviews={false}
                style={styles.list}
                enableEmptySections
                dataSource= {this.state.dataSource}
                onScroll={() => Keyboard.dismiss()}
                renderRow={({key, ...value})=>{
                    return (
                        <Row
                            key = {key}
                            todoText = {value.todoText}
                            {...value}
                            onComplete = {(value)=>this.handleToggleComplete(key,value)}
                            deleteTodo = {() => this.deleteTodoItem(key)}
                        />
                    )
                }}
                renderSeparator={(sectionId, rowId) => {
                    return <View key={rowId} style={styles.separator} />
                }}
            />
          </View>

          <Footer
            filter = {this.state.filter}
            // onFilter = {(filter)=>this.handleFilterTodo(filter)}
            onFilter = {this.handleFilterTodo}
            count = {filterItems("Active",this.state.items).length}
          >

          </Footer>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5',
        ...Platform.select({
            ios: {paddingTop:30}
        }),
    },
    content:{
        flex:1,
    },
    list:{
        backgroundColor:'#FFF'
    },
    separator:{
        borderWidth:1,
        borderColor:'#F5F5F5'
    }
})
