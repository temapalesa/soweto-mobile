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
                color='#009688'
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
                                source={{uri:'https://www.youtube.com/embed/PGUMRVowdv8'}}
                                style={styles.WebViewStyle}
                                javaScriptEnabled={true}
                                domStorageEnabled={true}
                                renderLoading={this.ActivityIndicatorLoadingView}
                                startInLoadingState={true}
                            />
                       
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
            height : 150 
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