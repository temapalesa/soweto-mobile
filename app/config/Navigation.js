
import { Dimensions } from 'react-native';
import {DrawerNavigator, TabNavigator,StackNavigator} from 'react-navigation';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
// import { SocialIcon } from 'react-native-elements';
import HomeScreen from '../Screens/Home';
import NewsScreen from '../Screens/News';
import VideoScreen from '../Screens/videos';
import SportsScreen from '../Screens/sport';
import FullStory from '../Screens/Fullstory';
import AboutComponent from '../components/AboutComponent';
import SplashScreen  from '../Screens/SplashScreen';
import PoloticsComp from '../components/PoloticsComponent';
import LifestyleComponent from '../components/LifeStyle'

// // import { Home, Trending, Sports, Videos, About, Contact } from '../../screenNames';

// var { height, width } = Dimensions.get('window');
import { Home,Trending,Sports,Videos, About,Polotics,Lifestyle} from '../../screenNames';
var {height,width} = Dimensions.get('window');

let routeConfigs2 = {

    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'HOME'
        }
    },
    Trending: {
        screen: NewsScreen,
        navigationOptions: {
            tabBarLabel: 'TRENDING'
        }
    },
    Sports: {
        screen: SportsScreen,
        navigationOptions: {
            tabBarLabel: 'SPORT'
        }
    },
    Videos: {
        screen: VideoScreen,
        navigationOptions: {
            tabBarLabel: 'VIDEOS'
        }
    },
};



let tabNavigatorConfig = {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#168060',
        inactiveTintColor: '#eef7f4',
        labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            lineHeight: 20,

        },
        style: {
            backgroundColor: '#88beae',
            padding: -10,
            height: 60,

        },
        showLabel: true
    },
    order: [Home, Trending, Sports, Videos,],
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

    FullStory: {
        screen: FullStory,
        navigationOptions: {
            title: 'FullStory'
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

    About: {
        path: '/info',
        screen: AboutComponent,
    },
    Polotics: {
        path: '/Polotics',
        screen: PoloticsComp,
    },
    Lifestyle: {
        path: '/Polotics',
        screen: LifestyleComponent,
    },
   

};
let drawerNavigatorConfig = {
    initialRouteName: Home,
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    //drawerBackgroundColor: '#168060',
    color: 'red',
    contentOptions: {
        activeTintColor: 'red'

    },
    order: [Home,About,Polotics,Lifestyle]

};
export default App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);