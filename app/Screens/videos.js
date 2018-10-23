import React, { Component } from 'react';
import {
    View,
    Text ,
    Dimensions,
    StyleSheet,
    Image ,
    ActivityIndicator 
 } from 'react-native';
import {WebView} from 'react-native';
import { Container, Content, CardItem ,Card } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
import Moment from 'react-moment';


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
        const dateToFormat = new Date('2018-04-19');
        // console.log(currentDate);
        return (
            <Container>
                  <View style={{backgroundColor:'white'}}>
            <HeaderComponent {...this.props}/>
            
           <View >
        
        </View>
        </View>
        
                <Content>
                <Text><Moment date={dateToFormat} /></Text>
                
                    <Card      style = {{width : 400, height : 280}}>
                            <WebView
                            style = {{width : 400, height : 250}}
                                source={{uri:'https://www.youtube.com/embed/XHV9V1LTnvM'}}
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
                                source={{uri:'https://www.youtube.com/embed/XHV9V1LTnvM'}}
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
                    <Card>
                        <CardItem>
                        
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