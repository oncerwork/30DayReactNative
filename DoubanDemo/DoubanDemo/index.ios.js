/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import {StackNavigator}from 'react-navigation'


import LoginView from './login'
import HomeView from './home'


export default class DoubanDemo extends Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        return (         
            <Navigator/>
        )
    };
}

const Navigator = StackNavigator({
    Home:{screen:HomeView},
    Login:{screen:LoginView}
})

AppRegistry.registerComponent('DoubanDemo', () => DoubanDemo);
