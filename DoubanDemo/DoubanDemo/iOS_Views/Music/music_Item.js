import React, { Component } from 'react';
import { View,Button,Image,Text,StyleSheet,TouchableOpacity } from 'react-native';

import Util from '../Common/util'

export class MusicItem extends Component {
    constructor(props) {
        super(props);
        this.state = { row:''};
    }

    render() {
        var row = this.props.row;
        var info = row.attrs.singer + ' / ' + row.attrs.pubdate;
        var detail = row.attrs.singer + ' / ' + row.attrs.pubdate;
        var rate = row.rating.average/2;
        return (
            <TouchableOpacity style={styles.row} {...this.props} >
            <View style={[styles.row,styles.item]}>
                <View style={styles.image_View}>
                    <Image source={{uri:row.image}} style = {styles.book_img}></Image>
                </View>
                <View style={styles.content_View}>
                    <Text style={styles.title}>{row.title}</Text>
                    <Text style={styles.star}>{"★".repeat(rate) + "☆".repeat(5-rate)}</Text>
                    <Text style={styles.year}>{info}</Text>
                </View>
            </View>
          </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    row:{
      flexDirection:'row'
    },
    image_View:{
        justifyContent:'center',
        alignItems:'center'
    },
    content_View:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
    },
    item:{
      height:120,
      width:Util.size.width,
      marginTop:5,
      marginBottom:5,
      borderColor:'#DDD',
      borderTopWidth:1,
      borderBottomWidth:1,
    },
    book_img:{
      width:80,
      height:100,
      resizeMode:Image.resizeMode.contain,
    },
    center:{
      justifyContent:'center',
      alignItems:'center'
    },
    content:{
      flex:1,
      marginTop:10,
      marginLeft:10,
      marginRight:10,
    },
    title:{
        fontSize:15,
        color:'#000',
        marginTop:10,
        fontWeight:'600'
    },
    year:{
      color:'#A3A3A3',
      fontSize:11,
      marginTop:10,
      fontWeight:'100'
    },
    star:{
      color:'orange',
      fontSize:11,
      marginTop:5,
      fontWeight:'100'
    },
  })

export default MusicItem;