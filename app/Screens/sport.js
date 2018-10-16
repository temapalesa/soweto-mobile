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
import Header from '../components/HeaderComponent';



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
            <Header {...this.props} />
              
                <ScrollView >

                    {!articles?<ActivityIndicator size="large" color="#0097A7" hidesWhenStopped={true}/>
                    : articles.map((data,index) =>{
                     
                        return( 
                            <Content key={index} style={{backgroundColor: '#fff'}}>

                            <View key={index} onPress={()=>this.article(data._id)}>
                      
                             <Card style={{height:250, marginTop:10, marginLeft:5, marginRight:5 }} onPress={()=>this.article(data._id)}>

                                    <CardItem>
                                    
                                      <Body>
                                     <TouchableOpacity  onPress={()=>this.article(data._id)}>
                                     <Thumbnail square source={{uri: data.picture}} style={{height: 150, width: 380,   }}/>
                                     <Text style={{fontFamily:"SEGIO UI", paddingTop:20,justifyContent:'center',color:'black', marginLeft:25, fontSize:18 }} >{data.title}  
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

