import React, { Component } from 'react';
import {View, Text, Image, ScrollView } from 'react-native';
import {  Card, CardItem, Body, Icon,  Left, Right, } from "native-base";
import Story from '../components/Fullstory';
import Header from '../components/HeaderComponent';

class FullStory extends Component {
     
    render() {
        return (
            <View>
                 <Header {...this.props} />
                <ScrollView>
                    <Story/>
                </ScrollView>
            </View>
        )
    }
}

export default FullStory;