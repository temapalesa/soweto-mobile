
import { Dimensions } from 'react-native';
import {DrawerNavigator, TabNavigator,StackNavigator, } from 'react-navigation';
import  HomeScreen from '../Screens/Home';
import NewsScreen from '../Screens/News';
import VideoScreen from '../Screens/videos';
import SportsScreen from '../Screens/sport';
import FullStory from '../Screens/Fullstory';
import AboutComponent from '../components/AboutComponent';
import SplashScreen  from '../Screens/SplashScreen';
import PoloticsComp from '../components/PoloticsComponent';
import LifestyleComponent from '../components/LifeStyle'
import Entertainment from '../components/Entertainment';
import Crime from '../components/Crime'


import { Home,Trending,Sports,Videos, About,Politics,Lifestyle,Enter, Crim} from '../../screenNames';
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
    underlineColor: 'RGB(0, 128, 128)',
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#ffff',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: '#1976d2',
            height: 40,
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
        screen: Stacks,
    },

    About: {
        path: '/info',
        screen: AboutComponent,
    },
    Politics: {
        path: '/Polotics',
        screen: PoloticsComp,
    },
    Lifestyle: {
        path: '/Polotics',
        screen: LifestyleComponent,
    },

    Enter:{
        path:'/',
        screen: Entertainment,
    },
    Crim:{
        path:'/',
        screen: Crime
    }
   

};
let drawerNavigatorConfig ={
    initialRouteName : Home,
    drawerWidth : width / 2,
    drawerPosition: 'right',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerBackgroundColor: '#EEEEEE',
    color:'#007ac1',
    contentOptions:{
        activeTintColor: '#007ac1'
        
    },
    order: [Home,About,Politics,Lifestyle,Enter,Crim]

};
export default App = DrawerNavigator(routeConfigs,drawerNavigatorConfig);