/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,TextInput,StyleSheet
} from 'react-native';


class Header extends Component<{}> {
    render() {
        return (
            <View style={styles.header}>
                <TextInput
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onSubmitEditing={this.props.onAddItem}
                    placeholder='请输入任务？'
                    blurOnSubmit={false}
                    returnKeyType='done'
                    style={styles.input}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#FFF',
        paddingHorizontal:16,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },

    input:{
        flex:1,
        height:50,
    }

});

export default Header;