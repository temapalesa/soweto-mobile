import React, { Component } from 'react';
import {View, Text,ScrollView, ActivityIndicator,Image } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import { CardItem, Card, Left, Body, Right, Thumbnail  } from 'native-base';




class Landing extends Component {
    componentDidMount(){
        this.props.fetchArticles();
    }
    viewArticle(id){
        this.props.fetchArticle(id)
    }
        render() {
            
            const {articles} = this.props;
            console.log("ARTICLES",articles);
            return (
             

                <ScrollView>
                    {!articles?<ActivityIndicator size="large" color="#0097A7" />
                    : articles.map((data,index) =>{
                     
                        return( 
                            <View key={index} >
                             
                                    <CardItem>
                                      
                                            <Left>
                                    <Thumbnail square source={{width: 90, height: 80}}
                                        resizeMode="cover"
                                        source={{uri: data.picture}}
                                        />
                                        <Body>
                                        <Text style={{fontFamily:'Lato', fontSize:17, color:'black'}} >{data.title}  
                                        </Text>
                                        </Body>
                                        </Left>
                                       
                                        </CardItem>
                                        
                                     
                                       
                                       
                               
                            </View>
                            
                        )
                    })
                    }
                </ScrollView>           
            )
        }
    }
    



    function mapStateToProps({articles}) {
     return {
         articles
        }
    }
    
    export default connect(mapStateToProps,actions)(Landing);


