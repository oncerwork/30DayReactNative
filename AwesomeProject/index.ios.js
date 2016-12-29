/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */



import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

//本地数据
var MOCKED_MOVIES_DATA = [
  {title: 'Hello React Native', year: '2015', posters: {thumbnail:'https://ww3.sinaimg.cn/mw690/6a4475c9jw1fb7ylgsvdjj20go0ciwga.jpg'}},
];

//网络数据
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


export default class AwesomeProject extends Component {

  //获取数据
  getInitState(){
    return{
      movies:null,
    }
  }

 componentDidMount() {
    this.fetchData();
  }

  //获取数据
  fetchData(){
    fetch(REQUEST_URL)
      .then((response)=> response.json())
      .then((responseData) =>{
        this.setState({
          movies:responseData.movies,
        });
      })
      .done();
  }

  //渲染页面
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  rightContainer: {
    flex: 1,
  },
  title:{
    fontSize:20,
    marginBottom: 10,
    marginLeft:20,
    textAlign:'left',
  },
  year:{
    textAlign:'left',
    marginLeft:20,
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);