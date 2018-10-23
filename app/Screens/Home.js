import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    ActivityIndicator,
    Image,
    Platform,
    ToolbarAndroid,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../src/actions';
// import { CardItem,  Left, Body, Right, Thumbnail, Content, Icon, Button} from 'native-base';
import { CardItem,Card, Left, Body, Right, Thumbnail, Content, Icon, Button, Container } from 'native-base';
import { StatusBar } from 'react-native';
// import { ListItem,Card } from 'react-native-elements';
import Header from '../components/HeaderComponent';
import { TabNavigator } from 'react-navigation';




class Home extends Component {
    state = { animating: true };



    componentDidMount() {
        this.props.fetchArticles();
        this.props.fetchArticle('');
    }

    article(id) {
        this.props.fetchArticle(id);
        this.props.navigation.navigate('FullStory');
       
    }

    render() {
        const animating = this.state.animating;

        const { articles } = this.props;
      
        return (
           
            <View style={{backgroundColor:'white'}}>
                
                <Header transparent {...this.props} />

                    <ScrollView >
                 
                        {!articles.length == 0 ? articles.map((data, index) => {

                            return (
                                <Content key={index} style={{ backgroundColor: '#fff' }}>

                                    <TouchableOpacity  key={index} onPress={() => this.article(data._id)}>
                                        <View >

                                            <CardItem style={{ marginTop:8, borderBottomColor:'#009688',borderBottomWidth:1}}>
                                            <Left>
                                                
                                                        <Image source={{uri: data.picture}} style={{height: 35,width:75}} />
                                                      
                                                         </Left>
                                                    <Right>
                                                        <Text style={{color:'black' ,fontStyle:'italic',fontFamily: "vincHand",}} >{data.title} </Text>
                                                        </Right>
                                                    
                                                 
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

export default connect(mapStateToProps, actions)(Home);




