//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import ServiceURL from '../Common/service.js'
import Util from '../Common/util.js'
import BookItem from './book_item.js'


class BookDetail extends Component {
    //导航栏
    static navigationOptions = {
        title: '图书详情',
    }

    constructor(props) {
        super(props);
        this.state={
            bookid:0,
            bookName:'图书详情',
            bookData:0
        }
    }

    componentDidMount() {

        let bookid = this.props.navigation.getParam('bookid', 'NO-ID');
        let data = this.props.navigation.getParam('bookData', 'NO-DATA');
        console.log(data);

        this.setState({
            bookid : bookid,
            bookData :data
        });
        // var url = ServiceURL.book_search_id + '/' + bookid;
        // Util.get(url,(data)=>{
        //     console.log(url);
        //     if(!data.id || !data.id.length){
        //         return alert('图书详情获取失败');
        //     }
        //     this.setState({
        //         bookName:data.title,
        //         bookData:data
        //     });
        // },(error)=>{
        //     alert('error'+error);
        // })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <BookItem row={this.state.bookData}/>
                    <View style={styles.content}>
                        <Text style={styles.title}>图书简介</Text>
                        <Text style={styles.title_content}>{this.state.bookData.summary}</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.title}>作者简介</Text>
                        <Text style={styles.title_content}>{this.state.bookData.author_intro}</Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        paddingTop:20,
    },
    title: {
        color:'#000',
        paddingLeft:20,
    },
    title_content: {
        color:'#000',
        paddingLeft:20,
        paddingTop:10,
        fontWeight:'100'
    },

});

//make this component available to the app
export default BookDetail;

