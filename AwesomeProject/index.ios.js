/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';

class Greeting extends Component{
  render(){
    return(
      <Text>Hello {this.props.name}! your NO. is {this.props.no}</Text>
    );
  }
}

class Blink extends Component{
  // constructor(props)
  constructor(props){
    super(props);
    this.state = {showText:true};

    setInterval(() =>{
      this.setState(previousState =>{
        return {showText: !previousState.showText};
      });
    }, 1000);
  }

  render(){
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>      
    );
  }
}

class LotsOfStyles extends Component {
  render(){
    return(
      <View>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigblue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigblue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigblue</Text>
      </View>
    );
  }
}

export default class AwesomeProject extends Component {
  render(){
    let pic= {
      url:"https://wx3.sinaimg.cn/mw690/648ac377gy1fkj4u36qt9j20z61qi7m9.jpg"
    };

    return(
      // <Text style={styles.welcome}>Hello world</Text>,
      // <Image source={pic} style={{width: 193, height: 110}} ></Image>
      
      //示范props使用
      // <View style={{alignItems:'center'}}>
      //   <Greeting name = 'Tom' no='16'/>
      //   <Greeting name = 'Huan' no='17'/>
      //   <Greeting name = 'Huan' no='18'/>
      // </View>

      //示范State使用
      // <View>
      //   <Blink text='I love to blink' />
      //   <Blink text='Yes blinking is so great' />
      //   <Blink text='Why did they ever take this out of HTML' />
      //   <Blink text='Look at me look at me look at me' />
      // </View>

      //Style示范
      // <LotsOfStyles/>

      //尺寸示范
      // <View>
      //   <View style={{width:100,height:100,backgroundColor:'#FF5'}}/>
      //   <View style={{width:200,height:200,backgroundColor:'#F05'}}/>
      //   <View style={{width:300,height:300,backgroundColor:'#0F5'}}/>
      // </View>

      //弹性宽度高度
      // <View style={{flex:1}}>
      //   <View style={{flex:1, backgroundColor:'#F00'}}/>
      //   <View style={{flex:1, backgroundColor:'#FFF'}}/>
      //   <View style={{flex:1, backgroundColor:'#00F'}}/>
      // </View>

<<<<<<< HEAD
    // <View style = {{
    //   flex:1,
    //   flexDirection:'column',
    //   justifyContent:'flex-start',
    //   alignItems:'stretch'
    // }}>
=======
    //示范布局
    <View style = {{
      flex:1,
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'stretch'
    }}>
>>>>>>> origin/new-start
    
    //   <View style={{height:100, backgroundColor:'#00F'}}></View>
    //   <View style={{height:150, backgroundColor:'#09F'}}></View>
    //   <View style={{height:200, backgroundColor:'#099'}}></View>
    <View></View>

    // <ScrollView>
    //       <Text style={{fontSize:96}}>Scroll me plz</Text>
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Text style={{fontSize:96}}>If you like</Text>
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Text style={{fontSize:96}}>Scrolling down</Text>
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Text style={{fontSize:96}}>What's the best</Text>
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Text style={{fontSize:96}}>Framework around?</Text>
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Image source={require('./img/favicon.png')} />
    //       <Text style={{fontSize:80}}>React Native</Text>
    //     </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  bigBlue:{
    color:'#0001F5',
    fontWeight:'bold',
    fontSize:30,
  },

  red:{
    color:'red',
    fontSize:20,
  },
})


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#336033',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
