import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,TextInput,TouchableOpacity,FlatList
} from 'react-native'

import MovieItem from '../Movie/movie_item'
import Util from '../Common/util'
import ServiceURL from '../Common/service'
import CotentWebView from '../Common/webView'

export class Movie extends Component {
    //导航栏
    static navigationOptions = {
        title: '电影',
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
        var baseURL = ServiceURL.movie_search + '?count=10&q=' + this.state.keywords;

        this.setState({
            show:false
        });

        Util.get(baseURL,(data)=>{
            console.log(baseURL);
            if(!data.subjects || !data.subjects.length){
                return alert('图书获取失败');
            }
            var movies = data.subjects;
            this.setState({
                dataSource:movies,
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
        return <MovieItem row={row.item} onPress = {this._bindItemDetail.bind(this,row.item)}/>
    }

    //显示详情页
    _bindItemDetail(movie){
        // this.props.navigation.navigate('BookDetailVC');//要先注册路由
        this.props.navigation.push('WebViewContent', {
            movie:movie,
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
                    renderItem = {this._renderItem}
                />
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

export default Movie;