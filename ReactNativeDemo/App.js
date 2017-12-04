/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
    Text,
  View,
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class  Bananas extends Component{
    render(){
        let pic = {
            url:'http://n.sinaimg.cn/sports/transform/w650h484/20171203/FYQv-fypikwt5684817.jpg'
        }
        return (
            <Image source={pic} style={{width:120, height:80}} />
        );
    }
}
class List extends  Component{
    render(){
        return(
            <View>
            <Bananas/><Text style={styles.listTitle}>{this.props.name}</Text>
            </View>
        );
    }
}

export default class App extends Component<{}> {
  render() {
    return (
        <View>
            <List name={"丁彦雨航30分取胜四川"}/>
            <List name={"睢冉退出微博"}/>
            <List name={"山东莫泰"}/>
        </View>

        /*
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
      */
    );
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    listTitle: {
        textAlign: 'left',
        color: '#333333',
        fontSize: 18,
    },
});
