import React, { Component } from 'react';
import {View, 
        Text,
        ScrollView, 
        ActivityIndicator,Image,
        Platform, 
        ToolbarAndroid, 
        TouchableOpacity , 
        FlatList,
        StyleSheet,
        Tile,
        
    } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../src/actions';
import { CardItem, Card, Left, Body, Right, Thumbnail, Content, Container, } from 'native-base';
import { StatusBar } from 'react-native';
import HTML from 'react-native-render-html';





class underFullStory extends Component {
    state = { animating: true };



    componentDidMount() {
        this.props.fetchArticles();
        this.props.fetchArticle('');
    }

    article(id) {
        this.props.fetchArticle(id);
        this.props.navigation.navigate('underFullStory');
    }

    render() {
        const animating = this.state.animating;

        const { articles } = this.props;
        // console.log(this.article);
        return (
            <View>
                    <ScrollView >
                        {!articles.length == 0 ? articles.map((data, index) => {

                            return (
                                <Content key={index} style={{ backgroundColor: '#fff' }}>

                                    <TouchableOpacity  key={index} onPress={() => this.article(data._id)}>
                                        <View >                           
                                            <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
                                            <Left>
                                                    <Body>
                                                        <Image source={{ uri: data.picture }} style={{height: 35,width:75}} />
                                                        <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}} >{data.title} </Text>
                                                    </Body>
                                                    </Left>                                              
                                                </CardItem>
                                            
                                        </View>
                                    </TouchableOpacity>
                                </Content>
                            )
                        })
                            : <ActivityIndicator
                                size="large"
                                color="#bc2b78"
                                hidesWhenStopped={true}
                                style={{ paddingVertical: 50, paddingHorizontal: 180, alignSelf: 'stretch' }}
                            />
                        }
                    </ScrollView>



                
            </View>



        )
    }
}



const styles = StyleSheet.create({

    activityIndic: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        height: 80
    },
    activityIndicat: {
        flex: 1,
        display: 'flex',
    },




});



function mapStateToProps({ articles }) {
    return {
        articles
    }
}
    
    
    export default connect(mapStateToProps,actions)(underFullStory);