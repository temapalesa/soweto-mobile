import React, { Component } from 'react';
import {
    View,
    Text ,
    StyleSheet,
    Image ,
    ActivityIndicator 
 } from 'react-native';
import {WebView} from 'react-native';
import { Container, Content, CardItem ,Card } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
import { connect } from 'react-redux';
import * as actions from '../src/actions';
import Video from 'react-native-video';




const moment= require('moment');

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

        componentDidMount(){
            this.props.fetchVideo();
       
        }

    render() {
      
            const {video} = this.props ;

        return (
            <Container>
                 
            <HeaderComponent />

            
            <View style={{backgroundColor:'white'}}>

                {!video.length == 0 ? video.map((data , index) => {
                         console.log(video)
                        return(
                        
                                    <Content>
                                    
                                        <Card      style = {{width : 400, height : 280}}>
                                                <Video
                                                   style = {{width : 400, height : 250}}
                                                    source={{uri: data.video}}
                                                  /*  domStorageEnabled={true}
                                                  // mediaPlaybackRequiresUserAction={true}
                                                  //  scalesPageToFit={true}
                                                   javaScriptEnabled={true}
                                                    renderLoading={this.props.ActivityIndicatorLoadingView}
                                                    startInLoadingState={true}
                                                    ignoreSslError={true} */
                                                />
                                            <CardItem  style = {{width : 400}}>
                                                <Image
                                                     source={require('../Images/sowetoLogo.jpg')}
                                                    style={{width:70 , height: 70 , borderRadius: 30}}
                                                />
                                                <Text>{data.title}</Text>
                                                </CardItem>
                                        </Card>
                                        <Card>
                                            <CardItem>
                                                <Text>{moment().startOf('day').fromNow()}</Text>
                                            </CardItem>
                                            </Card>
                                    
                                    </Content>
                            )
                })
                : <ActivityIndicator
                size="large"
                color="#bc2b78"
                hidesWhenStopped={true}
                style={{ paddingVertical: 50, paddingHorizontal: 180, alignSelf: 'stretch' }}
            />
        }
        </View>
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

function mapStateToProps({ video }) {
    return {
        video
    }
}


export default connect(mapStateToProps,actions)(Videos);