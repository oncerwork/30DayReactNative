//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class TimerDemo extends Component {
    compomentDidMout(){
        this.timer = setTimeout(
            ()=>{
                console.log('------------------------------------');
                console.log('定时器初始化');
                console.log('------------------------------------');
            },500
        );
    }

    compomentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }
}
//make this component available to the app
export default TimerDemo;
