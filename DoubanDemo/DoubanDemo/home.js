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
  Button,
  TouchableOpacity
} from 'react-native';


const imageArray = [require('./source/qq.png'),require('./source/weibo.png'),require('./source/wechat.png')]

/*
* 底部按钮 View
*/
class SNSView extends Component {


    SNSSelect = (type) =>{
        alert('选中了'+type);
    };

    render() {
        let imagePath = imageArray[this.props.index];
        return (
            <TouchableOpacity style={{alignItems:'center'}} onPress={this.SNSSelect.bind(this,this.props.name)}>
                <Image
                    style={styles.iconBtn}
                    source={imagePath}
                />
                <Text style={{fontSize:12,marginTop:5}}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}


export class HomeView extends Component {
    //导航栏
    static navigationOptions= {
        title:'首页',
        header: null,
    }
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    registAction = ()=>{
        alert('选中了注册');
    };

    loginAction = ()=>{
        navigate('Login');
    };
    
    tryAction = ()=>{
        alert('选中试用');
    };


    render() {

        const { navigate } = this.props.navigation;

        return (
          <View style={styles.container}>
            <View style={styles.view_top}>
                <Image style={styles.logo} source={require('./source/icon.png')}></Image>
            </View>

            <View style={styles.view_middle} >

                <TouchableOpacity onPress={()=>navigate('Login')}>
                    <Text style={styles.button_login}>手机号登录</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.registAction}>
                    <Text style={styles.button_login} >注册</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.button_vistor} onPress={this.tryAction} >游客试用</Text>
                </TouchableOpacity>

                <Text style={styles.button_vistor_line}></Text>

            </View>

            <View style={styles.view_bottom}>
                <View style={styles.view_bottom_segement}>
                    <Text style={styles.welcome_line}></Text>
                    <Text style={styles.welcome}>其他登录方式</Text>
                    <Text style={styles.welcome_line}></Text>
                </View>

                <View style={styles.view_bottom_buttonView}>
                    <SNSView name='QQ'  index='0'></SNSView>
                    <SNSView name='微博' index='1'></SNSView>
                    <SNSView name='微信' index='2'></SNSView>
                </View>
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
        paddingTop:12,
    },

    button_vistor:{
        width:100,
        height:40,
        color:'gray',
        fontSize:13,
        textAlign:'center',
        fontWeight:'normal',
        paddingTop:20,
    },

    button_vistor_line:{
        width:55,
        height:0.5,
        backgroundColor:'gray',
        marginTop:0,

    },

    welcome: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight:'100',
        color:'#a4a3a4'
    },
    welcome_line:{
        backgroundColor:'#a4a3a4',
        height:0.5,
        width:100
    },
    view_bottom:{
        backgroundColor:'white',
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    view_bottom_segement:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    view_bottom_buttonView:{
        flex:3,
        width:300,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    iconBtn:{
        width:28,
        height:28
    },
});

export default HomeView;