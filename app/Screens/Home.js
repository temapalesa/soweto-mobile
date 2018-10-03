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
     TouchableOpacity 
    } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import { CardItem, Card, Left, Body, Right, Thumbnail, Content, Icon, Button} from 'native-base';
import { StatusBar } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from '../components/HeaderComponent';



class Home extends Component {
    state = {animating : true} ;

  
    
    componentDidMount(){
        this.props.fetchArticles();
        this.props.fetchArticle('');
    }
    
    article(id){
        this.props.fetchArticle(id);
        this.props.navigation.navigate('FullStory');
    }
  
        render() {
            const animating = this.state.animating ;
            
            const {articles} = this.props;
            console.log(this.article);
            return (
                <View> 
                   <Header {...this.props} />
                    <ScrollView>
            
                        <ScrollView >
                    

                            {!articles.length==0?articles.map((data,index) =>{
                            
                            return( 
                                <Content  style={{backgroundColor: '#fff'}}>

                                    <TouchableOpacity key={index} onPress={()=>this.article(data._id)}>
                                        <View >
                            
                                            <Card style={{height:250, marginTop:10, marginLeft:5, marginRight:5 }} >

                                                <CardItem >
                                                 
                                                        <Body>

                                                            <Thumbnail square source={{uri: data.picture}} style={{height: 150, width: 350, marginLeft:1, marginRight:2 }}/>
                                        
                                                            <Text style={{fontFamily:"SEGIO UI", paddingTop:20,justifyContent:'center',color:'black', marginLeft:25, fontSize:18 }} >{data.title} </Text>
                                                          
                                                          
                                                        </Body>      
                                                </CardItem>
                                            </Card> 
                                                    
                                            
                                        </View>
                                    </TouchableOpacity>
                                </Content>
                                )
                            })
                            : <ActivityIndicator 
                            size="large" 
                            color="#bc2b78"
                            hidesWhenStopped={true}
                            style = {{paddingVertical: 50, paddingHorizontal:180 , alignSelf:'stretch'}}
                            />
                            }   
                        </ScrollView> 



                        </ScrollView>
                </View>  
           
              
                    
            )
        }
    }
    
   const styles = StyleSheet.create({

        activityIndic : {
            flex : 1 ,
            justifyContent : 'center',
            alignItems : 'center',
            marginTop : 70 ,
            height : 80
        } ,
        activityIndicat : {
            flex : 1 , 
            display : 'flex',
        },

       


   }) ;



    function mapStateToProps({articles}) { 
     return {
         articles
        }
    }
    
    export default connect(mapStateToProps,actions)(Home);




