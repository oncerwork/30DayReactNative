import React, { Component } from 'react';
import {
  WebView,
  View
} from 'react-native';
import Util from './util' ;

class ContentWebView extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    //导航栏
    static navigationOptions = {
        title: '详情页',
    }    
    render() {

        var object = this.props.navigation.getParam('movie', '') || this.props.navigation.getParam('music', '');
        var url = object.alt;

        return (
            <WebView
            startInLoadingState={true}
            style={{width:Util.size.width,height:Util.size.height,backgroundColor:'red'}}
            source={{uri:url}}
            >
            </WebView>
        );
    }
}

export default ContentWebView;