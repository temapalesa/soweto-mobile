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
import { CardItem,  Left, Body, Right, Thumbnail, Content, Container,  } from 'native-base';
import { StatusBar } from 'react-native';
import { ListItem, Tile,Card, Button, Icon} from 'react-native-elements';
import Header from '../components/HeaderComponent';



class Crime extends Component {
    static navigationOptions = ({navigation}) => { 
        let drawerLabel ='Crime' ;
        let drawerIcon= () => (
            <Icon
            icon={{name: 'arrow-right'}}
             />
           
        );
        return { drawerLabel,drawerIcon};
        
       
    }
    
    render(){
        return(
            <View>
            <Header {...this.props} />

            <ScrollView>

                <Tile
  imageSrc={{uri:'https://www.vocfm.co.za/wp-content/uploads/2016/02/manenberg-police.jpg'}}
  title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
  featured
  caption="Some Caption Text"
  imageContainerStyle={{marginTop:19, paddingRight:5, paddingLeft:5}}
/>
<View
    style={{ flex: 1, justifyContent: "space-between" }}
  >
 
  <Thumbnail source={{uri:'https://www.vocfm.co.za/wp-content/uploads/2016/02/manenberg-police.jpg'}} style={{marginTop:11}}/>
  
    <Text style={{fontSize:17, marginTop:19, marginLeft: 5}}>A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.
This example shows fetching and displaying an image from local storage as well as one from network and even from data provided in the 'data:' uri scheme.</Text>
   
  </View>

  




            </ScrollView>


            </View>
          
        )
    }
}
export default Crime;