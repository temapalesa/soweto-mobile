import React, {Component} from 'react';
import Button from 'react-native-button';
import {View,Text,TouchableHighlight,Image} from 'react-native';

export default class HeaderComponent extends Component{
    render() {
        return(<View style={{
            marginTop: 0,
            height: 40,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomColor: '#0091EA',
            borderTopColor:'#0091EA',
            borderTopWidth: 3,
            borderBottomWidth: 3,
            backgroundColor:'#0091EA',
            

        }}>
        
        
        <TouchableHighlight style={{marginLeft:10, marginTop: 0}}
        onPress={() => {
            const {navigate} = this.props.navigation;
            navigate('DrawerOpen');
        }}>
       
        <Image
        style={{width: 30, height: 30}}
        source={require('../Icons/images (1).png')}
        />
        </TouchableHighlight>
        <View style={{width: 180,
        height: 180,
        // paddingLeft: 90,
        //resizeMode:'contain',
         justifyContent:'center',
        //alignSelf:'center',
        // alignItems:'center',
        
    }}>
        <Image 
        style={{width: 50,
        height: 50,
        paddingLeft: 530,
        resizeMode:'contain',
        // justifyContent:'center',
        //alignSelf:'center',
        // alignItems:'center',
        
    }}
        source={require('../Icons/download.1.png')}/>
        </View>
        </View>);
    }
}