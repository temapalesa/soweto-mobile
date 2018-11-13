import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    ActivityIndicator, Image,
    Platform,
    ToolbarAndroid,
    TouchableOpacity,
    FlatList,
     Dimensions,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../src/actions';
import { CardItem, Card, Left, Body, Right, Thumbnail, Content, DeckSwiper } from 'native-base';
import { StatusBar } from 'react-native';
import Header from '../components/HeaderComponent';

 



class Topstories extends Component {
    componentDidMount() {
        this.props.fetchArticles();
        this.props.fetchArticle('');
    }
    viewArticle(id) {
        this.props.fetchArticle(id)
        this.props.navigation.navigate('FullStory');
    }    
    render() {

        const { articles } = this.props;

        return (
            <View>


                <ScrollView horizontal={true}>
                   
                    {!articles ? <ActivityIndicator size="large" color="#0097A7" hidesWhenStopped={true} />
                        : articles.map((data, index) => {

                        if(data.category.name == "Top Stories"){
                                
                            return (

                                <Content key={index} style={{ backgroundColor: '#fff', marginRight:7,height: 230,width:365 }}>

                                    <View key={index} >
                                        

                                        <Card style={{borderBottomColor: '#ff8000',width:Dimensions.get('window').width,}}>

                                            <CardItem>

                                                <Body>

                                                    <TouchableOpacity onPress={() => this.article(data._id)}>
                                                    <Text style={{ fontFamily: "SEGIO UI",  color: 'red', margin: 5, fontSize: 18 }} >{data.title}</Text>
                                                        <Thumbnail square source={{ uri: data.picture }} style={{height: 180,width:Dimensions.get('window').width,}} />
                                                        
                                                        
                                                    </TouchableOpacity>
                                                </Body>

                                            </CardItem>
                                        </Card>


                                    </View>

                                </Content>

                            )
                            }

                        })
                    }

                </ScrollView>

            </View>

        )
    }
}




function mapStateToProps({ articles }) {
    return {
        articles
    }
}

export default connect(mapStateToProps, actions)(Topstories);

