/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
    TouchableOpacity
} from 'react-native';

//登录方法
const onPressLearnMore = function(){
    alert('登录成功');
}

export default class DoubanDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view_top}>
            <Image style={styles.logo} source={require('./source/icon.png')}></Image>
        </View>


        <View style={styles.view_middle}>
            <TouchableOpacity>
                <Text style={styles.button_login}>手机号登录</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button_login} >注册</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button_vistor} >游客试用</Text>
            </TouchableOpacity>

            <Text style={styles.button_vistor_line}></Text>

        </View>

        <View style={{backgroundColor:'steelblue', flex:1}}>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-start',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    view_top:{
        backgroundColor:'white',
        flex:2,
        justifyContent:'flex-end',
        alignItems:'center'
    },

    logo:{
        width:90,
        height:90,
        marginBottom:20
    },

    view_middle:{
        backgroundColor:'white',
        flex:3,
        justifyContent:'flex-start',
        alignItems:'center'
    },

    button_login:{
        width:320,
        height:44,
        color:'#E52E2E',
        fontSize:18,
        textAlign:'center',
        borderColor:'#E52E2E',
        borderWidth:1,
        backgroundColor:'white',
        borderRadius: 22,
        marginTop:15,
        fontWeight:'normal',
        paddingTop:12
    },

    button_vistor:{
        width:100,
        height:30,
        color:'gray',
        fontSize:13,
        textAlign:'center',
        fontWeight:'normal',
        paddingTop:12,
    },

    button_vistor_line:{
        width:60,
        height:0.5,
        backgroundColor:'gray',paddingTop:0
    },

    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 50,
    }

});

AppRegistry.registerComponent('DoubanDemo', () => DoubanDemo);
