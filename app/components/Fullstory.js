import React, { Component } from 'react';
import {View, 
        Text,
        ScrollView, 
        ActivityIndicator,Image,
        Platform, 
        ToolbarAndroid, 
        TouchableOpacity , 
        FlatList,
        Tile,
        
    } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import { CardItem, Card, Left, Body, Right, Thumbnail, Content, Container, } from 'native-base';
import { StatusBar } from 'react-native';
import HTML from 'react-native-render-html';
import SubTitles from './underFullStory';



class Sports extends Component {
    componentDidMount(){
        //this.props.fetchArticle('');
    }

        render() {
            
            const {article} = this.props;
            console.log('lindiwe',article)
           
            return (
             <View>

        <ScrollView>
            <Container>
        <Card style={{ marginTop:10, }}>
     

            
            <Image source={{uri: article.picture}}  style={{height:250, width:400,  marginRight:20, marginTop:15 }}/>
          
            <Text style={{textAlign:'center', marginTop: 15, color: 'black', fontSize:18}}>{article.title}</Text>
            <HTML html={article.body} style={{marginLeft:'auto', marginRight: 'auto'}}/>
         
        </Card>
        
</Container>
  
      </ScrollView>   
 <SubTitles {...this.props}/>
                </View>  
          
            )
        }
    }
    



    function mapStateToProps({article}) {
     return {
         article
        }
    }
    
    export default connect(mapStateToProps,actions)(Sports);

