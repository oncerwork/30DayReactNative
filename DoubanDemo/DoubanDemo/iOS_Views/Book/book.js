import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
// import Service from './'
import ServiceURL from '../Common/service.js'
import Util from '../Common/util.js'
import BookItem from './book_item.js'
import BookDetail from './book_detail.js'

export class Book extends Component {

    //导航栏
    static navigationOptions = {
        title: '图书',
    }

    constructor(props) {
        super(props);
        this.state = {
            dataSource:[],
            keywords:'情书',
            show: false,
        };
    }

    componentDidMount() {
        this.getData();
    }

    //获取数据
    getData(){
        var baseURL = ServiceURL.book_search + '?count=10&q=' + this.state.keywords;
        this.setState({
            show:false
        });
        Util.get(baseURL,(data)=>{
            console.log(baseURL);
            if(!data.books || !data.books.length){
                return alert('图书获取失败');
            }
            var books = data.books;
            this.setState({
                dataSource:books,
                show:true
            });

        },(error)=>{
            alert('error'+error);
        })
    }

    _keyExtractor = (item, index) => item.id;

    //渲染 cell
    _renderItem = (row) => {
        // return <Text style={styles.title}>{item.item.title}</Text>
        return <BookItem row={row.item} onPress = {this._bindItemDetail.bind(this,row.item.id,row.item)}/>
    }

    //显示详情页
    _bindItemDetail(id,bookObject){
        this.props.navigation.push('BookDetailVC', {
            bookid:id,
            bookData:bookObject,
        })
    }

    _onchagedText(text){
        this.setState({
            keywords:text
        });
    }

    _search(text){
        this.getData();
    }


    render() {
        return (

            <View style={styles.container}>
                <View style={styles.searchView}>
                    <TextInput style={styles.input} placeholder='请输入关键字' onChangeText={(text)=> this._onchagedText(text)}></TextInput>
                    <TouchableOpacity style={styles.btn} onPress = {(text) => {this._search(text)}}>
                        <Text style={styles.searchBtn}>搜索</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                data={this.state.dataSource}
                keyExtractor={this._keyExtractor}
                renderItem = {this._renderItem}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    title: {
      fontSize: 12,
      fontWeight: 'bold',
      color:'#000',
      height:30,
    },
    activeTitle: {
      color: 'red',
    },

    searchView:{
        backgroundColor:'white',
        height:44,
        flexDirection:'row',
    },
    input:{
        flex:1,
        height:44,
        marginLeft:5
    },
    btn:{
        width:44,
        backgroundColor:'#0091FF',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5,
        flex:0
    },
    searchBtn: {
        width:44,
        color:'white',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
      },

  });

  export default Book;