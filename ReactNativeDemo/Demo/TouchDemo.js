import React, {Component} from 'react';
import {Text, TouchableHighlight,View, AlertIOS} from  'react-native'

export class ButtonDemo extends Component{


    _onpressButton(){

        AlertIOS.alert('提示');

    }

    render(){
        return(
            <View style={{width:300, height:300}}>
                <TouchableHighlight onLongPress={this._onpressButton}>
                    <Text style={{width:300, height:200,backgroundColor:'#FF0'}}>测试</Text>
                </TouchableHighlight>
            </View>
        );
    }
}