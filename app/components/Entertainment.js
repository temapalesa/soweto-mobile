import React, { Component } from 'react';
import {
     View,
     StyleSheet,
     Text,
     ScrollView,
     ActivityIndicator,
     Image,
     Platform,
     ToolbarAndroid ,
     Dimensions,
     TouchableOpacity, Divider 
    } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import { CardItem,  Left, Body, Right, Thumbnail, Content,   } from 'native-base';
import { StatusBar } from 'react-native';
import { ListItem, Tile,Card, Icon, Button,} from 'react-native-elements';
import Header from '../components/HeaderComponent';

class Entertainment extends Component {
    static navigationOptions = ({navigation}) => { 
        let drawerLabel ='Entertainment ' ;
        let drawerIcon= () => (
           < Icon
            icon={{name: 'arrow-right'}}
             />
        );
        return { drawerLabel,drawerIcon};
     
         
    }
    
    render(){
        return(
            <Content>
            <View>
            <Header {...this.props} />

            <ScrollView>

                <Tile
  imageSrc={{uri:'http://image.newsis.com/2017/04/13/NISI20170413_0012895027_web.jpg'}}
  title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
  featured
  caption="Some Caption Text"
  imageContainerStyle={{marginTop:19, paddingRight:5, paddingLeft:5}}
/>
<View
    style={{ flex: 1, justifyContent: "space-between" }}
  >
 
  <Thumbnail source={{uri:'http://image.newsis.com/2017/04/13/NISI20170413_0012895027_web.jpg'}} style={{marginTop:11}}/>
  
    <Text style={{fontSize:17, marginTop:19, marginLeft: 5}}>A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.
This example shows fetching and displaying an image from local storage as well as one from network and even from data provided in the 'data:' uri scheme.</Text>

  </View>
  



            </ScrollView>


            </View>
            </Content>
          
        )
    }
}
export default Entertainment;
