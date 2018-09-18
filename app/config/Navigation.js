import { createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { StyleSheet, View, Text } from "react-native";

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
                
            },

            News: {
                screen: News,
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
    
})
const styles = StyleSheet.create({
	tab: {
		padding: 5
	},
	indicator: {
		width: 0,
		height: 0
	},
	label: {
		fontSize: 10
	},
	icon: {
		width: 20,
		height: 20,
	
	},
	
});

