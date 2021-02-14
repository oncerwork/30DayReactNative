import React, { Component } from 'react';
import { 
    View,
    Button,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image
 } from 'react-native';

export class LoginView extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
          title: params ? params.otherParam : '手机号登录',
          headerRight: (
            <Button
              onPress={() => alert('This is a button!')}
              title="切换"
              color="#fff"
            />
          ),
        };
      };
      constructor(props) {
          super(props);
          this.state= {
              userName:'',
              password:''
        }
      }
      
    render() {
        return (
            <View style={styles.loginView}>
                <View style={styles.input_View}>
                    <Image style={styles.inputIcon} source={require('./source/qq.png')}/>
                    <TextInput style={styles.inputStyle_Phone} multiline = {true} placeholder="手机号" placeholderTextColor="#C7C7C8"></TextInput>
                </View>
                <View style={styles.input_View}>
                    <Image style={styles.inputIcon} source={require('./source/qq.png')}/>
                    <TextInput style={styles.inputStyle_Psw} multiline = {true} placeholder="密码" placeholderTextColor="#C7C7C8"></TextInput>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   loginView:{
       flex:1,
       justifyContent:'flex-start',
       backgroundColor: '#F5FCFF',
   },

   input_View:{
       flexDirection: 'row',
       justifyContent:'flex-start',
       alignItems: 'center',
       backgroundColor:'#FFF',
       height:40,
       marginTop:20
   },

    inputStyle_Phone:{
        height:40,  
        flex:8,        
        backgroundColor:'#FFF',
        // marginRight:20,
        // marginLeft:20,
        // marginTop:20,    
        borderBottomColor: '#F3F4F5',
        borderBottomWidth: 0.1,
        textAlign: 'left', 
        textAlignVertical: 'center'
    },

    inputStyle_Psw:{
        height:40,   
        flex:8,    
        backgroundColor:'#FFF',
        // marginRight:20,
        // marginLeft:20,
        // marginTop:2,  
        borderBottomColor: '#F3F4F5',
        borderBottomWidth: 0.1,
        // marginTop:5,
        textAlign: 'left', 
        textAlignVertical: 'center',
    },

    inputIcon:{
        flex:1,
        marginLeft:20,
        width:15,
        height:15,
    }

})

export default LoginView;
