import { createStackNavigator, createTabNavigator} from 'react-navigation';

import  Home from '../Screens/Home';
import News from '../Screens/News';
import Video from '../Screens/videos';
import Sports from '../Screens/sport';
import FullStory from '../Screens/Fullstory';


export default createStackNavigator ({
    Home: {
        screen: createTabNavigator({
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
