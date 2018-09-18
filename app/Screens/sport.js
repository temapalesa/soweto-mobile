import React, { Component } from 'react';
import {View, Text,ScrollView, ActivityIndicator,Image } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import { CardItem, Card, Left, Body, Right, Thumbnail  } from 'native-base';




class Sports extends Component {
    componentDidMount(){
        this.props.fetchArticles();
    }
    viewArticle(id){
        this.props.fetchArticle(id)
    }
        render() {
            
            const {articles} = this.props;
           
            return (
             

                <ScrollView>
                    {!articles?<ActivityIndicator size="large" color="#0097A7" />
                    : articles.map((data,index) =>{
                     
                        return( 
                            <View key={index} >
                             <Card style={{ height: 200}}>
                                    <CardItem >
                                      
                                            <Left>
                                    <Thumbnail square source={{width: 90, height: 70}}
                                        resizeMode="cover"
                                        source={{uri: data.picture}}
                                        />
                                        <Body>
                                        <Text style={{fontFamily:'Lato', }} >{data.title}  
                                        </Text>
                                        </Body>
                                        </Left>
                                       
                                        </CardItem>
                                        
                                     
                                        </Card>  
                                       
                               
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
    
    export default connect(mapStateToProps,actions)(Sports);

