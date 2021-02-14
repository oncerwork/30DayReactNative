/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class WeatherApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri:require('./source/bg.jpg')}} style={styles.backgroundImage}></Image>
          <View style = {styles.container_top}>
            <Text style={styles.titleCity}>济南市</Text>
            <Text style= {styles.title_sky}> 空气质量：不利于敏感人群</Text>
            <Text style={styles.title_du}>35℃</Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container_top: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundImage:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:null,
    height:null,
    //不加这句，就是按照屏幕高度自适应
    //加上这几，就是按照屏幕自适应
    // resizeMode:Image.resizeMode.contain,
    //祛除内部元素的白色背景
    backgroundColor:'rgba(0,0,0,0)'
  },
  titleCity: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 30,
  },
  title_sky: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '100',
    marginTop: 10,
  },
  title_du: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: '200',
    marginTop: 10,
  }
});

AppRegistry.registerComponent('WeatherApp', () => WeatherApp);
