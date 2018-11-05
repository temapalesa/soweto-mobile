
import React, {Component} from 'react';
import {ScrollView,View,Text,TouchableHighlight,Image,Dimensions, TouchableOpacity} from 'react-native';
import {Info} from '../../screenNames';
import { Container, Header, Content,Right, Card, CardItem, Thumbnail,  Button, Icon, Left, Body } from 'native-base';
// import Button from 'react-native-button';
import HeaderComponent from './HeaderComponent';


export default class LifeStyleComp extends Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel ='Life Style';
        // let drawerIcon= () => (
        //     <Image 
        //     source= {require('../Icons/cticon-weightloss.png')}
        //     style={{width:40, height:40}}
        //     />
        // );
        return { drawerLabel,};

    }
    render () {
        return (
          <View style={{backgroundColor:'white'}} >
             <HeaderComponent {...this.props}/>
             <View >
               
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
                navigate('Home');

            }}>
            <Text style= {{color:'white', fontSize: 22, alignSelf: 'center',  }}> Life Style</Text>

            </TouchableHighlight>
            </View>

            
     
    </View>
    </View>);
    }
}

