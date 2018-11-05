import React, { Component } from 'react';
import { ScrollView, View, Text, Image,Dimensions, StyleSheet, Tile, TouchableHighlight,TouchableOpacity} from 'react-native';

import { Container, Header, Content,Right, Card, CardItem, Thumbnail,  Button, Icon, Left, Body } from 'native-base';

import HeaderComponent from './HeaderComponent';

class Polotics extends Component {
    static navigationOptions = ({navigation}) => { 
        let drawerLabel ='Polotics' ;
     
        return { drawerLabel};
        
    }
      render() {

        return (
<View>
    <HeaderComponent />
    
               
               <View >
               <TouchableHighlight style ={{ 
                width: 125,
                margin: 6,
                height: 30,
                backgroundColor: '#59cbbd',
                alignSelf: 'center',
            
            }}
            onPress={() =>{
                const{navigate} = this.props.navigation;
                navigate('');

            }}>
            <Text style= {{color:'white', fontSize: 22, alignSelf: 'center',  }}> Polotics</Text>

            </TouchableHighlight>
            </View>
           
</View>
              
        )   
    }
}

export default Polotics;