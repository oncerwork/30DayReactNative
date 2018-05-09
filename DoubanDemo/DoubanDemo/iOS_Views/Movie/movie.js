import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native'

export class Movie extends Component {
    //导航栏
    static navigationOptions = {
        title: '电影',
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Text>图书首页</Text>
            </View>
        );
    }
}

export default Movie;