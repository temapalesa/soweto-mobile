import React, { Component } from 'react';
import {View, Text , Dimensions,StyleSheet ,Image,  } from 'react-native';
import {WebView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Container, Content, CardItem ,Card } from 'native-base';
import Header from '../components/HeaderComponent';



const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


class Video extends Component{
     render(){
         return(

            <View>
            <Header {...this.props} />
            <Content style={{backgroundColor: '#fff'}}>

            </Content>


            </View>
         )
     }
    }
export default Video;