import { createStackNavigator, createTabNavigator, 
} from 'react-navigation';

import Landing from '../Screens/Landing';
import News from '../Screens/News';
import Video from '../Screens/videos';
import Sports from '../Screens/sport';
import FullStory from '../Screens/Fullstory';


export default createStackNavigator ({
    Home: {
        
        screen: createTabNavigator({
            
            Landing: {
                screen: Landing,
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
    }
    
})
