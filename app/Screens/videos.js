import React, { Component } from 'react';
import {
    View,
    Text ,
    Dimensions,
    StyleSheet,
    TouchableHighlight ,
    Image ,
    ActivityIndicator , 
    Modal
 } from 'react-native';
import {WebView} from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';
import { Container, Content, CardItem ,Card } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


class Videos extends Component{

            ActivityIndicatorLoadingView(){
                return(
                    <ActivityIndicator
                        size = 'large'
                        color = '#ff69b4'
                        style = {styles.indicator}
                    />
                )
            }
            
            reload = () => {
                this.setState({
                  viewState: WebViewState.LOADING
                });
                UIManager.dispatchViewManagerCommand(
                  this.getWebViewHandle(),
                  UIManager.RCTWebView.Commands.reload,
                  renderLoading
                 );
               };

            
    render() {
        return (
            <Container>
                  <View style={{backgroundColor:'white'}}>
            <HeaderComponent {...this.props}/>
            
           <View >
        
        </View>
        </View>
        
                <Content>
                    <Card      style = {{width : 400, height : 280}}>
                            <WebView
                            style = {{width : 400, height : 250}}
                                source={{uri:'https://youtu.be/eLPrJ77X_Vk'}}
                                domStorageEnabled={true}
                               mediaPlaybackRequiresUserAction={true}
                                scalesPageToFit={true}
                               javaScriptEnabled={true}
                                renderLoading={this.props.ActivityIndicatorLoadingView}
                                startInLoadingState={true}
                                ignoreSslError={true} 
                            />
                        <CardItem  style = {{width : 400}}>
                            <Image
                                 source={require('../Images/download.png')}
                                style={{width:70 , height: 70 , borderRadius: 30}}
                            />
                            <View>
                            <Text style={{fontWeight : 'bold'}}>Title</Text>
                             <Text > Parts of the Bara taxi rank in Soweto have been closed for the time being.
                                    This after a shoot out between two rival taxi associations...
                                  Scores of commuters were left stranded as police fear a taxi war may be brewing.</Text>
                                  </View>
                            </CardItem>
                    </Card>
                    <Card      style = {{width : 400, height : 280}}>
                            <WebView
                            style = {{width : 400, height : 250}}
                                source={{uri:'https://youtu.be/eLPrJ77X_Vk'}}
                                domStorageEnabled={true}
                               mediaPlaybackRequiresUserAction={true}
                                scalesPageToFit={true}
                               javaScriptEnabled={true}
                                renderLoading={this.props.ActivityIndicatorLoadingView}
                                startInLoadingState={true}
                                ignoreSslError={true} 
                            />
                        <CardItem  style = {{width : 400}}>
                            <Image
                                 source={require('../Images/download.png')}
                                style={{width:70 , height: 70 , borderRadius: 30}}
                            />
                            <View>
                            <Text style={{fontWeight : 'bold'}}>Title</Text>
                             <Text > Parts of the Bara taxi rank in Soweto have been closed for the time being.
                                    This after a shoot out between two rival taxi associations...
                                  Scores of commuters were left stranded as police fear a taxi war may be brewing.</Text>
                                  </View>
                            </CardItem>
                    </Card>
                </Content>
            </Container>
         

        )
    }
}


const styles = StyleSheet.create({
   
        indicator : {
            flex : 1 ,
            alignItems : 'center',
            justifyContent : 'center',
            height :  80 
        }
});

export default Videos;