import React, { Component } from 'react';
import {View, Text, } from 'react-native';


class FooterAndHeader extends Component {

    render(){
        return(
          <View>
          <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0.24)"
          animated
        />
        { Platform.OS === 'android' && Platform.Version >= 20 ?
          <View
            style={{
              height: 24,
              backgroundColor: "#512DA8",
            }}
          />
          : null }
        <ToolbarAndroid
          style={{
            height: 56,
            backgroundColor: "#673AB7",
            elevation: 4,
          }}
          titleColor="white"
          title="CheeseSquare"
        />
        </View>
        )
    }
}
export default FooterAndHeader; 
