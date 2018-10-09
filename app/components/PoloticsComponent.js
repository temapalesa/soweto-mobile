import React, { Component } from 'react';
import { ScrollView, View, Text, Image,Dimensions, StyleSheet, Tile, TouchableHighlight,TouchableOpacity} from 'react-native';
import { Card, Button, } from 'react-native-elements';
import {Icon} from 'react-native-elements';
import HeaderComponent from './HeaderComponent';





class Polotics extends Component {
    static navigationOptions = ({navigation}) => { 
        let drawerLabel ='Polotics' ;
        let drawerIcon= () => (
            <Image 
            source= {require('../Icons/vote-orange.webp')}
            style={{width:36, height:36}}
            />
        );
        return { drawerLabel,drawerIcon};
        
    }
      render() {

        return (
<View>
    <HeaderComponent {...this.props}/>
    
               
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
            <Text style= {{color:'white', fontSize: 22, alignSelf: 'center',  }}> Top Stories</Text>

            </TouchableHighlight>
            </View>
    <ScrollView>
      
       

</ScrollView>

</View>
              


        )   
    }
}

export default Polotics;