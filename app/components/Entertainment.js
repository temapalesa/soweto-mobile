import React, { Component } from 'react';
import {
     View,
     StyleSheet,
     Text,
     ScrollView,
     ActivityIndicator,
     Image,
     Platform,
     ToolbarAndroid ,
     Dimensions,
     TouchableOpacity, Divider,TouchableHighlight
    } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import { CardItem,  Left, Body, Right, Thumbnail, Content,   } from 'native-base';
import { StatusBar } from 'react-native';
import { ListItem, Tile,Card, Icon, Button,} from 'react-native-elements';
import Header from '../components/HeaderComponent';

class Entertainment extends Component {
    static navigationOptions = ({navigation}) => { 
        let drawerLabel ='Entertainment ' ;
        /*let drawerIcon= () => (
            <Icon 
            name="" size={25}
            style={{marginHorizontal:10, borderColor:"white"}}
            />
        );*/
        return { drawerLabel};
     
       
    }
    
    render(){
        return(
           
            <View>
            <Header {...this.props} />
            
            <View >
               <TouchableHighlight style ={{ 
                width: 125,
                margin: 6,
                height: 35,
                backgroundColor: '#59cbbd',
                alignSelf: 'center',
            
            }}
            onPress={() =>{
                const{navigate} = this.props.navigation;
                navigate('');

            }}>
            <Text style= {{color:'white', fontSize: 22, alignSelf: 'center',  }}>Entertainment</Text>

            </TouchableHighlight>
            </View>
    <ScrollView>
      
       

</ScrollView>

</View>
              


        )   
    }
}

export default Entertainment;
