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
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../src/actions';
import { CardItem, Card, Left, Body, Right, Thumbnail, Content, DeckSwiper } from 'native-base';
import { StatusBar } from 'react-native';
import Header from '../components/HeaderComponent';



class Sports extends Component {
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

                <Header />


                <ScrollView >
                   
                    {!articles ? <ActivityIndicator size="large" color="#0097A7" hidesWhenStopped={true} />
                        : articles.map((data, index) => {

                        if(data.category.name == "Sport"){
                                
                            return (

                                <Content key={index} style={{ backgroundColor: '#fff' }}>

                                    <View key={index} >
                                        

                                        <Card style={{ height: 250, marginTop: 10, marginLeft: 5, marginRight: 5 }}>

                                            <CardItem>

                                                <Body>

                                                    <TouchableOpacity onPress={() => this.article(data._id)}>
                                                        <Thumbnail square source={{ uri: data.picture }} style={{ height: 150, width: 380, }} />
                                                        <Text style={{ fontFamily: "SEGIO UI", paddingTop: 20, justifyContent: 'center', color: 'black', marginLeft: 25, fontSize: 18 }} >{data.title}
                                                        </Text>
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

export default connect(mapStateToProps, actions)(Sports);

