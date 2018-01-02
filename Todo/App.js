/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,StyleSheet,Platform
} from 'react-native';

import Header from "./header";
import Footer from "./footer";

export default class App extends Component<{}> {
    constructor(props){
        super(props);
        this.state = {
            allComplete:false,
            todoValue:'',
            items:[]
        }
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
    }

    //全部完成
    handleToggleAllComplete(){
        const complete = !this.state.allComplete;
        const newItems = this.state.items.map((item) => ({
            ...item,
            complete
        }))

        this.setState({
            items:newItems,
            allComplete:complete
        })

        console.table(newItems);

    }

    handleAddItem(){
        if(!this.state.todoValue) return;

        console.log('$$$$'+this.state.todoValue);

        const  newItems = [
            ...this.state.items,
            {
                key:Date.now(),
                text:this.state.todoValue,
                complete:false
            }
        ]


        this.setState({
            items:newItems,
            todoValue:''
        })

        console.table(newItems);

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
          <View/>
          <Footer/>
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
    }
})
