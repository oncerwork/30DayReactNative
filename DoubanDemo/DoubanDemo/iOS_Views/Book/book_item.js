import React, { Component } from 'react';
import { View,Button,Image,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { ENGINE_METHOD_DIGESTS } from 'constants';

export class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          row:''
      };
    }

    render() {
      var row = this.props.row;
      // var rate = 0;
      // console.log(row.rating);
      // alewathrt(row.rating)
      // if(Int(row.rating.average)){
      //   rate= row.rating.average / 2;
      // }
      return (
            <TouchableOpacity style={[styles.row, styles.item]} {...this.props} >
            <View style={[styles.center]}>
              <Image source={{uri: row.image}} style={styles.book_img}/>
            </View>
            <View style={styles.content}>
              <View style={{marginTop:5,flexDirection:'row'}}>
                <Text style={styles.title} numberOfLines={1}>{row.title}</Text>
                <Text style={styles.publisher} numberOfLines={1}>{row.author}</Text>
              </View>
              <View style={{marginTop:5}}>
              {/* <Text style={styles.star}>{"★".repeat(rate) + "☆".repeat(5-rate)}</Text> */}
                <Text style={styles.publisher} numberOfLines={1}>{row.publisher}</Text>
              </View>
              <View style={[styles.row,{marginTop:10,flex:1}]}>
                <Text style={styles.price}>{row.price}</Text>
                <Text style={styles.pages}>{row.pages}页</Text>
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
    item:{
      height:120,
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
    },
    publisher:{
      color:'#A3A3A3',
      fontSize:12,
    },
    price:{
      color:'#2BB2A3',
      fontSize:16
    },
    pages:{
      marginLeft:10,
      color:'#A7A0A0'
    },
    star:{
      color:'orange',
      fontSize:11,
      marginTop:5,
      fontWeight:'100'
    },
  })

export default BookItem;