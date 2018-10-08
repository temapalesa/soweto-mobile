import React, { Component } from 'react';
import {
    View,
    Text ,
    Dimensions,
    StyleSheet,
    TouchableHighlight ,
    Image ,
    ActivityIndicator 
 } from 'react-native';
import {WebView} from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';
import { Container, Content, CardItem ,Card } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


class Videos extends Component{

    ActivityIndicatorLoadingView(){
        return (
            <ActivityIndicator
                color='red'
                size='large'
                style={styles.ActivityIndicatorStyle}
            />
        );
    }
     
    render() {
        return (
        //  <ActivityIndicator/>
            <Container>
                  <View style={{backgroundColor:'white'}}>
            <HeaderComponent {...this.props}/>
            
           <View >
        
        </View>
        </View>
                <Content>
                    <Card style={{width: 1000}}>
                       
                            <WebView
                                source={{uri:'https://www.youtube.com/watch?v=jv-hIAYG6KM'}}
                                style={styles.WebViewStyle}
                                startInLoadingState ={true}
                                renderLoading={this.ActivityIndicatorLoadingView}
                                geolocationEnabled={true}
                            />
                        <CardItem>
                            <Image
                                 source={require('../Images/download.png')}
                                style={{width:50 , height: 50 , borderRadius: 30}}
                            />
                             <Text style={{flex : 1}}> Parts of the Bara taxi rank in Soweto have been closed for the time being.
                                    This after a shoot out between two rival taxi associations...
                                  Scores of commuters were left stranded as police fear a taxi war may be brewing.</Text>
                                 
                            </CardItem>
                    </Card>
               
                </Content>
            </Container>
         

        )
    }
}

const styles = StyleSheet.create({
   

       WebViewStyle : {
            justifyContent : 'center',
            alignItems : 'center',
            flex : 1,
            marginTop : 20  ,
            width : 500 ,
            height : 300 ,  
       },
       ActivityIndicatorStyle : {
            position : 'absolute',
            left : 0 , 
            right : 0 ,
            top : 0, 
            bottom : 0 ,
            alignItems : 'center',
            justifyContent : 'center',

       }
});

export default Videos;