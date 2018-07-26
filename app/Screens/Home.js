import React, { Component } from 'react';
import {View, Text,ScrollView, ActivityIndicator,Image , StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import { CardItem, Card, Left, Body, Right, Thumbnail, Content } from 'native-base';





class Home extends Component {


    componentDidMount(){
        this.props.fetchArticles();
        
    }

  
        render() {
            
            const {articles} = this.props;
            console.log("ARTICLES",articles);
            return (
              <View> 
            

                <ScrollView>

                    {!articles?<ActivityIndicator size="large" color="#0097A7" hidesWhenStopped={true}/>
                    : articles.map((data,index) =>{
                     
                        return( 
                            <Content>

                            <View key={index} >
                      
                             <Card style={{height:100, marginTop:20, borderTopColor:"#FF9800", borderBottomColor:"#FF9800",}}>

                                    <CardItem>
                                      
                                            <Left>
                                    <Thumbnail square source={{width: 250, height: 950, }}
                                        source={{uri: data.picture}}
                                        />
                                        <Body>
                                        <Text style={{fontFamily:"Lato", fontSize:17, color:"black"}} >{data.title}  
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

