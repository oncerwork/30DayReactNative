'use strict'
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    Alert,
    ListView,
    ScrollView,
    InteractionManager,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class StarScore extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            totalScore: 5, // 总分值
            currentScore: 3, // 分值
        };
    }

    render() {
        return (
            <View style={{flexDirection: 'row', width: width, height: 20, marginBottom: 6}}>
                {this._renderBody()}
            </View>
        );
    }

    _renderBody() {
        let images = [];
        for (var i = 1; i <= this.state.totalScore; i++) {
            let currentCount = i;
            images.push(
                <View key={"i" + i}>
                    <TouchableOpacity onPress={(i) => {this._score(currentCount)}}>
                        <Image source={require('../Img/star.png')} style={{width: 20, height: 20}}/>
                        {this._renderYellowStart(i)}
                    </TouchableOpacity>
                </View>
            );
        }
        return images;
    }

    _renderYellowStart(count) {
        if (count <= this.state.currentScore) {
            return (
                <Image source={require('../Img/star_yellow.png')} style={{width: 20, height: 20, position: 'absolute'}}/>
            );
        }
    }

    _score(i) {
        this.setState({
            currentScore: i
        });
        this.props.selectIndex(i);
    }

}