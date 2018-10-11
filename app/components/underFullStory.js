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



class underFullStory extends Component {
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
                  
                    <ScrollView>
            
                        <ScrollView >
                    
                            {!articles.length==0?articles.map((data,index) =>{
                            
                            return( 
                                <Content  style={{backgroundColor: '#fff'}}>

                                    <TouchableOpacity key={index} onPress={()=>this.article(data._id)}>
                                        <View>
                                                 <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
                                                   <Left>
                                                   <Thumbnail square source={{uri: data.picture}} style={{height: 75,width:75}}/>
                                                        <Body>
                                                            <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "SEGIO UI",}} >{data.title} </Text>
                                                        </Body>  
                                                        </Left>    
                                                </CardItem>                                                                                            
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
    
    export default connect(mapStateToProps,actions)(underFullStory);