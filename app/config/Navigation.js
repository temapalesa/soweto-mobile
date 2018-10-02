import { createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { StyleSheet, View, Text } from "react-native";
import React, { Component } from 'react';

import  Home from '../Screens/Home';
import News from '../Screens/News';
import Video from '../Screens/videos';
import Sports from '../Screens/sport';
import FullStory from '../Screens/Fullstory';


export default createStackNavigator ({

    
    Home: {
        screen: createBottomTabNavigator({

            
            Home: {
                screen: Home,
                 tabBarOptions :{
                     showLabel : true ,
                     labelStyle : {
                         fontSize : 20
                     },
                     style :{
                        backgroundColor : '#263238',
                     }
                 },
            },

            News: {
                screen: News,
                tabBarOptions:{
                    labelStyle:{
                        fontSize : 25
                    }
                }
            },

            Sports: {
                screen: Sports,
            },

            Video: {
                screen: Video,
            },
           
        }),
        
    },
   
    FullStory: {
        screen: FullStory,
    },
       
        
    
});

