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





class Sports extends Component {
    componentDidMount(){
        //this.props.fetchArticle('');
    }

        render() {
            
            const {article} = this.props;
            console.log('lindiwe',article)
           
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


        <ScrollView>
            <Container>

        <Card style={{color: 'black', marginTop:10, }}>
            <Image source={{uri: article.picture}}  style={{height:250, width:400}}/>
            <Text style={{textAlign:'center'}}>{article.title}</Text>
            <Text style={{textAlign:'center'}}>{article.body}</Text>
        </Card>


</Container>
      </ScrollView>   


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

