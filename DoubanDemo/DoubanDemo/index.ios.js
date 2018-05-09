/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,Image,StyleSheet} from 'react-native';
import {StackNavigator,TabNavigator}from 'react-navigation'
import {Ionicons} from 'react-native-vector-icons'
// import {Icon} from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons'

import LoginView from './login'
import HomeView from './home'

//正式开始
import Music from './iOS_Views/Music/music'
import Book from './iOS_Views/Book/book'
import Movie from './iOS_Views/Movie/movie'


export default class DoubanDemo extends Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        return (         
            <Tabbar/>
        )
    };
}

//普通导航栏
const Navigator = StackNavigator(
    {
        Home:{screen:HomeView},
        Login:{screen:LoginView},   
    },
    {  
        initialRouteName: 'Home',
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#D73C3C',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontSize:18,
                fontWeight:'bold'
            }
        }
    }
)


//构建 Tabbar + Navigation

const BookStack = StackNavigator({
    BookHome: { screen: Book }
});

const MovieStack = StackNavigator({
    MovieHome: { screen: Movie }
});

const MuiscStack = StackNavigator({
    MusicHome: { screen: Music }
});

const Tabbar = TabNavigator(
    {
        Book: { screen: BookStack },
        Movie: { screen: MovieStack },
        Music: { screen: MuiscStack },
    },
    {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;     
            let image;
            if (routeName === 'Book') {
                image = require('./source/icon_book.png');
            } else if (routeName === 'Movie') {
                image = require('./source/icon_movie.png');
            }else if (routeName === 'Music') {
                image = require('./source/icon_music.png');
            }
            return <Image
                style={[styles.tabBarImage, {tintColor: tintColor}]}
                source={image}/>
            }
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showIcon:true,
        },
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
      }
);

const styles = StyleSheet.create({
    tabBarImage: {
        width: 24,
        height: 24,
    },
    tabBar: {
        backgroundColor: 'white',
    },
    tabBarLabel: {
        fontSize: 12,
    },
    tabBarItem: {
        height: 56,
    },
});

AppRegistry.registerComponent('DoubanDemo', () => DoubanDemo);
