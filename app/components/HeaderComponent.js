import React, {Component} from 'react';
import Button from 'react-native-button';
import {View,Text,TouchableHighlight,Image} from 'react-native';


export default class HeaderComponent extends Component{
    render() {
        return(<View style={{
            height: 70,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomColor: '#ff8000',
            borderBottomWidth: 3,

        }}>
        <TouchableHighlight
         onPress={() => {
            const {navigate} = this.props.navigation;
            navigate('Home');
        }}>
        <Image 
        style={{width: 100,
        height: 100,
        resizeMode:'contain',
        marginLeft: 10,
        // justifyContent:'center',
        //alignSelf:'center',
        // alignItems:'center',
        
    }}
        source={require('../Icons/SSS.png')}
        />
        </TouchableHighlight>
       <View  style={{paddingLeft:240}}>
        <TouchableHighlight style={{marginLeft:10, marginTop: 20, }}
        onPress={() => {
            const {navigate} = this.props.navigation;
            navigate('DrawerOpen');
        }}>
       
        <Image
        style={{width: 32, height:32}}
        source={require('../Icons/orangemenu-icon.png')}
        />
        </TouchableHighlight>
         </View>
        </View>
        
    );
    }
}