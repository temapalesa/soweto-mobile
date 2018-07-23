import React, { Component } from 'react';
import {View, Text,ScrollView, ActivityIndicator,Image } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import { CardItem, Card,  } from 'native-base';


class Sports extends Component {
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
                            <View>
                                <Card  key={data.title} style={{height: 80, marginTop: 20}} >
                                   
                                        <Text style={{fontFamily:'Lato', fontSize:17, color:'black'}} >{data.title}</Text>
                                  
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

