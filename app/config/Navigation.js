import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import {DrawerNavigator, TabNavigator,StackNavigator} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import  HomeScreen from '../Screens/Home';
import NewsScreen from '../Screens/News';
import VideoScreen from '../Screens/videos';
import SportsScreen from '../Screens/sport';
import FullStory from '../Screens/Fullstory';
import SplashScreen from '../Screens/SplashScreen';

import { Home,Trending,Sports,Videos, About,Contact} from '../../screenNames';
var {height,width} = Dimensions.get('window');

let routeConfigs2 = {
    
    Home: {
        screen: HomeScreen,
    },
    Trending: {
        screen: NewsScreen,
    },
    Sports: {
        screen: SportsScreen,
    },
    Videos: {
        screen: VideoScreen,
    },
};
let tabNavigatorConfig = {    
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#FAFAFA',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: '#F57C00',
            padding: -10
        },    
        // showLabel: false    
    },    
    order: [ Home,Trending,Sports, Videos, ],
};

const Stabs = TabNavigator(routeConfigs2, tabNavigatorConfig);

let routeConfigs3 = {

    SplashScreen : {
        screen : SplashScreen ,
        navigationOptions : {
            title : 'Splash'
        }
    }
    ,
    Home: {
        path: '/',
        screen: Stabs,
    },
    
    FullStory:{
        screen: FullStory,
        navigationOptions:{
            title:'FullStory'
        }
    },
    
};
let stackNavigatorConfig = {
    headerMode: 'none'
}
const Stacks = StackNavigator(routeConfigs3, stackNavigatorConfig);
let routeConfigs = {
    
  
    Home: {
        path: '/',
        screen: Stacks,
    },

    // About: {
    //     path: '/info',
    //     screen: AboutComponent,
    // },
    // Contact: {
    //     path: '/settings',
    //     screen: ContactComponent,
    // },
   

};
let drawerNavigatorConfig ={
    initialRouteName : Home,
    drawerWidth : width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // drawerBackgroundColor: '#ff8000',
    color:'red',
    contentOptions:{
        activeTintColor: 'red'
        
    },
    // order: [Home,About,Contact]

};
export default App = DrawerNavigator(routeConfigs,drawerNavigatorConfig);