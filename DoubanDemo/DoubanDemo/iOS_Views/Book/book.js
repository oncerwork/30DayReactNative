import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'

export class Book extends Component {

    //导航栏
    static navigationOptions = {
        title: '图书',
    }

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="图书首页"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default Book;