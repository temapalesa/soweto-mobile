import React, { Component } from 'react';
import {View, Text, Image, ScrollView } from 'react-native';
import {  Card, CardItem, Body, Icon,  Left, Right, } from "native-base";
import underFullStory from '../components/underFullStory';
import Header from '../components/HeaderComponent';

class UnderFullComp extends Component {
     
    render() {
        return (
            <View>
                 <Header {...this.props} />
                <ScrollView>
                    <underFullStory/>
                </ScrollView>
            </View>
        )
    }
}

export default UnderFullComp;