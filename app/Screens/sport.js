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
import { CardItem, Card, Left, Body, Right, Thumbnail, Content, DeckSwiper } from 'native-base';
import { StatusBar } from 'react-native';
import Header from '../components/HeaderComponent';

const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('../Images/Mbappe.jpg'),
    },
];

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
            <Text children="In Case You Missed It" style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center', color: '#000'}}/>
                
                <ScrollView >

                    {!articles?<ActivityIndicator size="large" color="#0097A7" hidesWhenStopped={true}/>
                    : articles.map((data,index) =>{
                     
                        return( 
                            
                            <Content style={{backgroundColor: '#fff'}}>
                                
                            <View key={index} onPress={()=>this.article(data._id)}>
                            
                                    <DeckSwiper
                                        dataSource={cards}
                                        renderItem={item =>
                                            <Card style={{ elevation: 3 }}>
                                                <CardItem>
                                                    <Left>
                                                        <Thumbnail source={item.image} />
                                                        <Body>
                                                            <Text>{data.title}</Text>
                                                        </Body>
                                                    </Left>
                                                </CardItem>
                                                <CardItem cardBody>
                                                    <Image style={{ height: 100, width: 100, flex: 1 }} source={item.image} />
                                                </CardItem>
                                            </Card>
                                        }
                                    />
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

