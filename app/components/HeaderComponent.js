import React, {Component} from 'react';
import Button from 'react-native-button';
import {View,Text,TouchableHighlight,Image} from 'react-native';

export default class HeaderComponent extends Component{
    render() {
        return(<View style={{
            marginTop: 0,
            height: 90,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomColor: '#88beae',
            borderTopColor: '#88beae',
            borderTopWidth: 3,
            borderBottomWidth: 3,
            backgroundColor:'white'

        }}>
        
        
        <TouchableHighlight style={{marginLeft:10, marginTop: 0}}
        onPress={() => {
            const {navigate} = this.props.navigation;
            navigate('DrawerOpen');
        }}>
       
        <Image
        style={{width: 40, height: 40}}
        source={require('../Icons/Green-Icon-Menu2.jpg')}
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
        style={{width: 80,
        height: 80,
        paddingLeft: 340,
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