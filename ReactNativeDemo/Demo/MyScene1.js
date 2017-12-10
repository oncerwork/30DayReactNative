import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from  'react-native'

export class MyScene1  extends Component {
    // static propTypes = {
    //     // title: PropTypes.string.isRequired,
    //     navigator: PropTypes.object.isRequired,
    //     backgroundColor:'#FF0',
    // }

    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
    }

    _onForward() {
        this.props.navigator.pop({
            comment:'MyScene'
        });
    }

    render() {
        return (
            <View style={{backgroundColor:'#F00' , alignItems:'center', justifyContent:'center',width:375, height:678}} >
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this._onForward}>
                <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

