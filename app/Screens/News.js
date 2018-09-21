import React, { Component } from 'react';
import {View, Text, Image, ScrollView,  } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import {Tile, Divider,  Button } from 'react-native-elements'
import {Content,  Card, CardItem, Body, Icon,  Left, Right, DeckSwiper,  Thumbnail } from "native-base";




class News extends Component {

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
               
             
          <ScrollView horizontal={true}>

              {!articles?<ActivityIndicator size="large" color="#0097A7" hidesWhenStopped={true}/>
              : articles.map((data,index) =>{
               
                  return( 
                      <Content>

                      <View key={index} onPress={()=>this.article(data._id)}>
                
                       <Card style={{height:250, marginTop:10, }} onPress={()=>this.article(data._id)}>

                              <CardItem onPress={()=>{this.article(data._id)}}>
                                
                                         
                              <Body>
                                     
                                     <Thumbnail square source={{uri: data.picture}} style={{height: 150, width: 250, marginLeft:3,  }}/>
                                     <Text style={{fontFamily:"SEGIO UI", paddingTop:20,justifyContent:'center' }} >{data.title}  
                                  </Text>
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


        );
    }
}


function mapStateToProps({articles}) {
  return {
      articles
     }
 }
 

export default connect(mapStateToProps,actions)(News);