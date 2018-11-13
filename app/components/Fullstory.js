import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image, ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../src/actions';
import { Card, Container, CardItem, Body } from 'native-base';
import HTML from 'react-native-render-html';
import SubTitles from './underFullStory';
import Button from 'react-native-button';



class Sports extends Component {
    componentDidMount() {
        //this.props.fetchArticle('');
    }

    render() {

        const { article } = this.props;
        var pic = article.picture
        return (
            <ScrollView>
            <View>
              
                    <Container>
                        {article ?
                            <Card style={{ marginTop: 10 }}>
                                <CardItem>
                                    
                                    <Image
                                        source={{ uri: pic }}
                                        fadeDuration={50}
                                        style={{
                                            height: 250, width: 400,
                                            marginRight: 20, marginTop: 15
                                        }}
                                    />

                                </CardItem>
                                <CardItem>
                                    <Text style={{ textAlign: 'center', color: 'black',marginTop:5, fontSize: 18 }}>{article.title}</Text>
                                 </CardItem>
                                    <CardItem style={{}}>
                                    <HTML html={article.body}  />
                                    </CardItem>
                                   
                                
                            </Card>

                            : <ActivityIndicator
                                    size="large"
                                    color = "red"
                                    
                              />
                        
                        }

                    </Container>
                    <Text style={{ textAlign: 'center', marginTop: 15, color: 'black', fontSize: 18 }}>{article.title}</Text>

              
            </View>

                </ScrollView>
        )
    }
}




function mapStateToProps({ article }) {
    return {
        article
    }
}

export default connect(mapStateToProps, actions)(Sports);

