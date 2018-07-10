import React, { Component } from 'react';
import {View, Text , Dimensions,StyleSheet ,Image } from 'react-native';
import {WebView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Container, Content, CardItem ,Card } from 'native-base';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


class Video extends Component{
     
    render() {
        return (
          /*  <View style={styles.Container}>
          //  <WebView 
           //     try
            //    style={styles.Video}
                source={{uri: 'https://www.youtube.com/embed/2aZENXH4nxc'}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={true}
                allowsInlineMediaPlayback={true}
                scrollEnabled={true}
                initialScale={50}
               // onNavigationStateChange={true}
             > 
             
            </WebView>
            <WebView
               source={{uri: 'https://www.youtube.com/embed/PGUMRVowdv8'}}
               style={styles.video}
               javaScriptEnabled={true}
               domStorageEnabled={true}
               startInLoadingState={true}
               scalesPageToFit={true}
               allowsInlineMediaPlayback={true}
               scrollEnabled={true}
               //onNavigationStateChange={true}
             >
             </WebView>
            </View>*/
            <Container>
                <Content>
                    <Card>
                       
                            <WebView
                                source={{uri:'https://www.youtube.com/embed/PGUMRVowdv8'}}
                                style={{width:500 , height: 150}}
                            />
                        <CardItem>
                            <Image
                                source={{uri:'data:image/jpeg;base64,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'}}
                                style={{width:50 , height: 50 , borderRadius: 30}}
                            />
                             <Text>Palesa Tema</Text>
                            </CardItem>
                    </Card>
                    <Card>
                       
                       <WebView
                       
                           source={{uri:'https://www.youtube.com/embed/PGUMRVowdv8'}}
                           style={{width:500 , height: 150}}
                       />
                        <CardItem>
                   <Image
                                source={{uri:'data:image/jpeg;base64,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'}}
                                style={{width:50 , height: 50 , borderRadius: 30}}
                            />
                            <Text>Palesa Tema</Text>
                            </CardItem>
               </Card>
                </Content>
            </Container>

        )
    }
}

export default Video;

const styles = StyleSheet.create({

    Container:{
        flex: 1 ,
    },
    Video:{
        flex: 1 ,
        backgroundColor: 'yellow',
        width: deviceWidth,
        height: deviceHeight,
    }

});