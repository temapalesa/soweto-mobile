import React, { Component } from 'react';
import {View, Text,ScrollView, ActivityIndicator,Image, Platform, ToolbarAndroid } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import { CardItem, Card, Left, Body, Right, Thumbnail, Content, } from 'native-base';
import { StatusBar } from 'react-native';



class Home extends Component {

    
    componentDidMount(){
        this.props.fetchArticles();
        //this.props.fetchArticle('');
    }
    
    article(id){
        console.log('ghfhghjg',id)
        //this.props.fetchArticle(id);
    }
  
        render() {
            
            const {articles} = this.props;

            return (
                <View> 
                   <StatusBar  
     
translucent
backgroundColor="#B71C1C"
animated
/>
{ Platform.OS === 'android' && Platform.Version >= 20 ?
<View
  style={{
    height: 50,
    backgroundColor: "#B71C1C",
  }}
/>
: null }
<ToolbarAndroid
style={{
  height:45,
  backgroundColor: "#B71C1C",
 
}}
titleColor="white"
title="Soweto Observer"
/>
      
               
      
                <ScrollView>

                    {!articles?<ActivityIndicator size="large" color="#0097A7" hidesWhenStopped={true}/>
                    : articles.map((data,index) =>{
                     
                        return( 
                            <Content>

                            <View key={index} onPress={()=>this.article(data._id)}>
                      
                             <Card style={{height:250, marginTop:5, }} onPress={()=>this.article(data._id)}>

                                    <CardItem style ={{}}onPress={()=>{this.article(data._id)}}>
                                      <Left>
                                            
                                    <Thumbnail source={{width: 10, height:10,  }}
                                        source={{uri: data.picture}}
                                        />
                                        <Body>
                                        <Text style={{fontFamily:"SEGIO UI", }} >{data.title}  
                                        </Text>
                                      
                                        </Body>
                                        </Left>
                                    
                                         </CardItem>
                                         
                                        
                                     
                                        </Card> 
                                       
                               
                            </View>
                            </Content>
                        )
                    })
                    }
                </ScrollView>   
                </View>        
            )
        }
    }
    



    function mapStateToProps({articles}) {
     return {
         articles
        }
    }
    
    export default connect(mapStateToProps,actions)(Home);
