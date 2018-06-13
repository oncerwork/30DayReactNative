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
    // Image,
    ImageBackground,
    ScrollView
} from 'react-native';
{/*<ImageBackground source={require('./source/bg.png')} style={styles.backgroundImage} resizeMode='cover'>*/}

export default class WeatherApplication extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <View style = {styles.container_top}>
                        <Text style={styles.titleCity}>济南市</Text>
                        <Text style= {styles.title_sky}> 空气质量：不利于敏感人群</Text>
                        <Text style={styles.title_du}>35</Text>

                        <View style={styles.container_middle}>
                            <Text style={[styles.title_date,{flex:2}]}>星期三</Text>
                            <Text style={[styles.title_today,{flex:3}]}>今天</Text>
                            <Text style={[styles.title_high,{flex:3}]}>32</Text>
                            <Text style={[styles.title_low,{flex:2}]}>17</Text>
                        </View>
                    </View>

                    <View style={styles.container_times}>
                        <Text>DDDDDDDDDDDDDD</Text>
                    </View>
                {/*</ImageBackground>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#F5FCFF',
    },

    container_top: {
        flex: 2,
        alignItems: 'center',
    },
    container_middle: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:'100%',
        marginTop:20,
   },

    container_times: {
        // flexDirection:'row',
        // alignItems:'center',
        // justifyContent:'space-around',
        width:'100%',
        marginTop:20,
        height:1,
        backgroundColor:'red'
    },

    backgroundImage:{
        width:'100%',
        height:0,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        // resizeMode:Image.resizeMode.cover,
        // 祛除内部元素的白色背景
        backgroundColor:'rgba(255,0,0,0)'
    },

    titleCity: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 30,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color:'#FFF'
    },

    title_date: {
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 10,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color:'#FFF'
    },

    title_today: {
        fontSize: 12,
        textAlign: 'left',
        marginLeft: 10,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color:'#FFF'
    },
    title_high: {
        fontSize: 15,
        textAlign: 'right',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color:'#FFF'
    },
    title_low: {
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color:'#eee'
    },

    title_sky: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color:'#FFF'
    },
    title_du: {
        fontSize: 80,
        textAlign: 'center',
        fontWeight: '200',
        marginTop: 10,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color:'#FFF'

    }
});

AppRegistry.registerComponent('WeatherApplication', () => WeatherApplication);
