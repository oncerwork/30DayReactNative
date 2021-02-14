/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,Text,TextInput,StyleSheet,TouchableOpacity
} from 'react-native';


class Header extends Component<{}> {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={this.props.onToggleAllComplete}>
                    <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
                </TouchableOpacity>
                <TextInput
                    value={this.props.todoValue}
                    onChangeText={this.props.onChange}
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
    toggleIcon:{
        fontSize:25,
        color:"#CCC"
    },
    input:{
        flex:1,
        height:50,
        marginLeft:16
    }

});

export default Header;