import React, { Component } from 'react';
import {View, Text, Image, ScrollView, ToolbarAndroid  } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import {Tile, Divider,  Button } from 'react-native-elements'
import {Content,  Card, CardItem, Body, Icon,  Left, Right, DeckSwiper,  Thumbnail } from "native-base";
import { StatusBar } from 'react-native';
import Header from '../components/HeaderComponent';


class News extends Component {

  componentDidMount(){
    this.props.fetchArticles();
    this.props.fetchArticle('');
}

article(id){
    console.log('ghfhghjg',id)
    this.props.fetchArticle(id);
}
     
    render() {
      const {articles} = this.props;
        return (

          <View> 
                 <Header />
             
          <ScrollView >

              {!articles?<ActivityIndicator size="large" color="#0097A7" hidesWhenStopped={true}/>
              : articles.map((data,index) =>{
               
                  return( 
                      <Content key={index} style={{backgroundColor: '#fff'}}>

                      <View key={index} onPress={()=>this.article(data._id)}>
                
                       <Card style={{height:250, marginTop:10, marginLeft:5, marginRight:5 }} onPress={()=>this.article(data._id)}>

                              <CardItem onPress={()=>{this.article(data._id)}}>
                                
                                         
                              <Body>
                                     
                                     <Thumbnail square source={{uri: data.picture}} style={{height: 150, width:380, }}/>
                                     <Text style={{fontFamily:"SEGIO UI", paddingTop:20,justifyContent:'center',color:'black', marginLeft:25, fontSize:18 }} >{data.title}  
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