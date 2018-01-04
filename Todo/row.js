//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Row extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.todoText}>{this.props.todoText}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'flex-start',
        justifyContent:"space-between",
        backgroundColor: '#F1F1F1',
        padding:10
    },
    todoText:{
        color:"#000",
        fontSize:24
    },
});

//make this component available to the app
export default Row;
