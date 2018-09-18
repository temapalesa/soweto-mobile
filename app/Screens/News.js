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
               
             
          <ScrollView>

              {!articles?<ActivityIndicator size="large" color="#0097A7" hidesWhenStopped={true}/>
              : articles.map((data,index) =>{
               
                  return( 
                      <Content>

                      <View key={index} onPress={()=>this.article(data._id)}>
                
                       <Card style={{height:250, marginTop:5, }} onPress={()=>this.article(data._id)}>

                              <CardItem onPress={()=>{this.article(data._id)}}>
                                <Left>
                                      
                              <Thumbnail source={{width: 10, height:10,  }}
                                  source={{uri: data.picture}}
                                  />
                                  <Body>
                                  <Text style={{fontFamily:"SEGIO UI", }} >{data.title}  
                                  </Text>
                                
                                  </Body>
                                  </Left>
                                  <Body>
                                  <Image source={{uri: data.picture}} style={{height: 200, width: null, flex: 1}}/>
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