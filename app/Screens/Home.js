import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    Dimensions,

} from 'react-native';
import { Divider} from 'react-native-elements'
import { connect } from 'react-redux';
import * as actions from '../src/actions';
import { CardItem, Left, Body, Right, Thumbnail, Content, Icon, Button, Container } from 'native-base';
import Header from '../components/HeaderComponent';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';



const  moment= require('moment');


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
            <View>
                <Header {...this.props} />
                <ScrollView >

                    {!articles.length == 0 ? articles.map((data, index) => {

                        return (
                            <Content key={index} style={{ backgroundColor: '#fff' }}>


                                <TouchableOpacity key={index} onPress={() => this.article(data._id)}>
                                    <View>

                                        <Card   style={styles.CardDirection}>
                                        
    
                                                <Image source={{ uri: data.picture }} style={styles.AvatarImage} />
                                                
                                         
                                                <Text style={styles.cardText} >{data.title} </Text>
                                                <Text>{moment().startOf('day').fromNow()}</Text>
                                                <CardItem>
                                               
                                                
                                            </CardItem>
                                           
                                        </Card>
                                    
                                        <Divider style={color="#bc2b78"}/>
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
CardDirection:{
    flexDirection: 'row',
    marginTop : 7 ,
},
cardText:{
     color: 'black',
     fontStyle: 'italic', 
     fontFamily: "vincHand" ,
     //alignSelf:'center',
     //fontWeight : "bold" ,
     flexWrap : 'wrap',
     flexDirection : 'row', 
     width : 290 ,
     padding : 5 ,
    // marginBottom :10 ,
     
     
},
AvatarImage:{
    height: 70,
     width: 130,
      marginLeft:15,
    
},
DividerLine:{
    flexDirection: 'row-reverse',
 

}



});



function mapStateToProps({ articles }) {
    return {
        articles
    }
}

export default connect(mapStateToProps, actions)(Home);




