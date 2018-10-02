import React, { Component } from 'react';
import {View, 
        Text,
        ScrollView, 
        ActivityIndicator,Image,
        Platform, 
        ToolbarAndroid, 
        TouchableOpacity , 
        FlatList
    } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import { CardItem, Card, Left, Body, Right, Thumbnail, Content } from 'native-base';
import { StatusBar } from 'react-native';



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
             <View>
           <StatusBar                  
                    
                    translucent
                    backgroundColor="#263238"
                    animated
                    />

                <ToolbarAndroid
                    style={{
                height:45,
                    backgroundColor: "#263238",
        
                        }}
                        
                            titleColor="white"
                        title="Soweto Observer"
                            titleStyle={{}}

                                />

              
                <ScrollView   horizontal={true}>

                    {!articles?<ActivityIndicator size="large" color="#0097A7" hidesWhenStopped={true}/>
                    : articles.map((data,index) =>{
                     
                        return( 
                            <Content>

                            <View key={index} onPress={()=>this.article(data._id)}>
                      
                             <Card style={{height:250, marginTop:10, }} onPress={()=>this.article(data._id)}>

                                    <CardItem>
                                    
                                      <Body>
                                     <TouchableOpacity  onPress={()=>this.article(data._id)}>
                                     <Thumbnail square source={{uri: data.picture}} style={{height: 150, width: 250, marginLeft:3,  }}/>
                                     <Text style={{fontFamily:"SEGIO UI", paddingTop:20,justifyContent:'center' }} >{data.title}  
                                  </Text>
                                  </TouchableOpacity>
                                     </Body>
                                        
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
    
    export default connect(mapStateToProps,actions)(Sports);

