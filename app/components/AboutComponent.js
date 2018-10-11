import React, { Component } from 'react';
// import { DetailScreen, ThirdScreen } from '../screenNames';
import Button from 'react-native-button';
import {
    Text, View, Image
} from 'react-native';
const backgroundColor = '#007256';

export default class AboutComponent extends Component {
    static navigationOptions = ({navigation}) => { 
        let drawerLabel ='About us ' ;
        let drawerIcon= () => (
            <Image 
            source= {require('../Icons/download.png')}
            style={{width:40, height:40}}
            />
        );
        return { drawerLabel,drawerIcon};
         
    }

    render() {
        return (<View style={{
            flex: 1,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
            
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                This is Info Screen
            </Text>  
            <Button
                containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                style={{ fontSize: 18, color: 'white' }}
                onPress={() => {                                        
                    this.props.navigation.goBack();
                }}>
                Back to Home
            </Button>          
        </View>);
    }
}