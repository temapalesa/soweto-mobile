import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    ActivityIndicator,
    Image,
    Platform,
    ToolbarAndroid,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../src/actions';
// import { CardItem,  Left, Body, Right, Thumbnail, Content, Icon, Button} from 'native-base';
import { CardItem,Card, Left, Body, Right, Thumbnail, Content, Icon, Button, Container } from 'native-base';
import { StatusBar } from 'react-native';
// import { ListItem,Card } from 'react-native-elements';
import Header from '../components/HeaderComponent';
import { TabNavigator } from 'react-navigation';




class Home extends Component {
    state = { animating: true };



    componentDidMount() {
        this.props.fetchArticles();
        this.props.fetchArticle('');
    }

    article(id) {
        this.props.fetchArticle(id);
        this.props.navigation.navigate('FullStory');
       
    }

    render() {
        const animating = this.state.animating;

        const { articles } = this.props;
      
        return (
           
            <View style={{backgroundColor:'white'}}>
                
                <Header transparent {...this.props} />
                <View >
               <TouchableHighlight style ={{ 
                width: 125,
                margin: 6,
                height: 30,
                backgroundColor: '#59cbbd',
                alignSelf: 'center',
            
            }}
            onPress={() =>{
                const{navigate} = this.props.navigation;
                navigate('');

            }}>
            <Text style= {{color:'white', fontSize: 22, alignSelf: 'center',  }}> Top Stories</Text>

            </TouchableHighlight>
            </View>
            <ScrollView horizontal={true}> 
       
       <Card style={{borderBottomColor: '#009688',borderBottomWidth:1,width:Dimensions.get('window').width}}>
           <CardItem>
             <Body>
               <TouchableOpacity onPress={() =>{
                   const{navigate} = this.props.navigation;
                   navigate('mortality');
               }}>
                 <Image source={require('../Images/WhatsApp-Image-2017-04-11-at-11.22.57.jpeg')}
                 style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
                 <Text style={{fontStyle:'normal',color:'black' , fontSize: 19,fontFamily: "vincHand",}}>
                 Suspected ritual killing cause a stir in Orlando East
                 </Text>
               </TouchableOpacity>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text>  12 Likes  </Text>
               
                 <Icon active name="chatbubbles" /> 
                 <Text>  4 Comments </Text>
                 <Right>
               <Text>just now</Text>
             </Right>
               </Button>
               
             </Body>
             
           </CardItem>
           </Card>

           <Card style={{borderBottomColor: '#009688',borderBottomWidth:1,width:Dimensions.get('window').width}}>
           <CardItem>
             <Body>
             <TouchableOpacity onPress={() =>{
                   const{navigate} = this.props.navigation;
                   navigate('Baxter');
             }}>
               <Image source={require('../Images/0ac2a23587844c90bf0e6b286edaf23f.jpg')}
                style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
               <Text style={{fontStyle:'normal',color:'black',fontSize: 19,fontFamily: "vincHand",}}>
               Staurt Baxter back to Kaizer Chiefs Again
               </Text>
               </TouchableOpacity>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text> 12 Likes </Text>
               
                 <Icon active name="chatbubbles" />
                 <Text> 4 Comments </Text>
                 <Right>
               <Text>2m ago</Text>
             </Right>
               </Button>
             </Body>
             
           </CardItem>
           </Card>
           <Card style={{borderBottomColor: '#009688',borderBottomWidth:1,width:Dimensions.get('window').width}}>
           <CardItem>
             <Body>
               <Image source={require('../Images/job.jpg')}
                style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
               <Text style={{fontStyle:'normal',color:'black',fontSize: 19,fontFamily: "vincHand",}}>
               New premier of the North West Province
               </Text>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text> 12 Likes </Text>
               
                 <Icon active name="chatbubbles" />
                 <Text> 4 Comments </Text>
                 <Right>
               <Text>3m ago</Text>
             </Right>
               </Button>
             </Body>
           </CardItem>
           </Card>
           <Card style={{borderBottomColor: '#009688',borderBottomWidth:1,width:Dimensions.get('window').width}}>
           <CardItem>
             <Body>
               <Image source={require('../Images/unnamed.jpg')}
                style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
               <Text style={{fontStyle:'normal', color:'black',fontSize: 19,fontFamily: "vincHand",}}>
               Eskom workers refuses 4.7% salary increase
               </Text>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text> 12 Likes </Text>
               
                 <Icon active name="chatbubbles" />
                 <Text> 4 Comments </Text>
                 <Right>
               <Text>4m ago</Text>
             </Right>
               </Button>
             </Body>
           </CardItem>
           </Card>
           <Card style={{borderBottomColor: '#ff8000',borderBottomWidth:1,width:Dimensions.get('window').width}}>
           <CardItem>
             <Body>
               <Image source={require('../Images/DgSlrQ3WkAAH9A_.jpg')}
                style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
               <Text style={{fontStyle:'normal', color:'black',fontSize: 19,fontFamily: "vincHand",}}>
               Kaizer Chiefs have signed Khama Billiat!
               </Text>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text>12 Likes</Text>
                 <Icon active name="chatbubbles" />
                 <Text>4 Comments</Text>
               </Button>
             </Body>
           </CardItem>
           </Card>

         
       </ScrollView>
                    <ScrollView >
               

               
                 
                        {!articles.length == 0 ? articles.map((data, index) => {

                            return (
                                <Content key={index} style={{ backgroundColor: '#fff' }}>
                                

                                    <TouchableOpacity  key={index} onPress={() => this.article(data._id)}>
                                        <View >

                                            <CardItem >
                                            <Left>
                                                
                                                        <Image source={{uri: data.picture}} style={{height: 35,width:75}} />
                                                      
                                                         </Left>
                                                    <Right>
                                                        <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}} >{data.title} </Text>
                                                        </Right>
                                                    
                                                 
                                                </CardItem>
                                                <View style={{borderWidth:1,borderColor:'#009688'}}>
                                                    </View>
                                             


                                        </View>
                                    </TouchableOpacity>
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
                    </ScrollView>



                
            </View>



        )
    }
}



const styles = StyleSheet.create({

    activityIndic: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        height: 80
    },
    activityIndicat: {
        flex: 1,
        display: 'flex',
    },




});



function mapStateToProps({ articles }) {
    return {
        articles
    }
}

export default connect(mapStateToProps, actions)(Home);




