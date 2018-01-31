//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch,TouchableOpacity } from 'react-native';

// create a component
class Row extends Component {
    render() {

        const {complete} = this.props;

        return (
            <View style={styles.container}>
                <Switch
                    value={complete}
                    onValueChange={this.props.onComplete}
                ></Switch>
                <View style={styles.todoTextWrap}>
                    <Text style={[styles.todoText, complete && styles.todoTextComplete]}>{this.props.todoText}</Text>
                    {/*样式处理 以右侧为准，如果有冲突；可以加入判断语句*/}
                </View>
                <TouchableOpacity
                    onPress={this.props.deleteTodo}>
                    <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        alignItems: 'flex-start',
        justifyContent:"flex-start",
        backgroundColor: '#F1F1F1',
        padding:10
    },
    todoTextWrap:{
        flex:1,
        paddingHorizontal:10
    },
    todoText:{
        color:"#000",
        fontSize:24
    },
    todoTextComplete:{
        textDecorationLine:"line-through",
    },
    deleteText:{
        color:"#F00",
        fontSize:20
    }
});

//make this component available to the app
export default Row;
