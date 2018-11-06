import React, { Component } from 'react';
import { ScrollView, View, Text, Image,Dimensions, StyleSheet, Tile, TouchableHighlight,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../src/actions';
import HeaderComponent from './HeaderComponent';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

class Polotics extends Component {

    static navigationOptions = ({navigation}) => { 
        let drawerLabel ='Politics' ;
     
     
        return { drawerLabel};
        
    }
    componentDidMount(){
        this.props.fetchArticles();
    }
    viewArticles(id){
        this.props.fetchArticles(id)
    }

      render() {

        const { articles } = this.props; 

        return (
<View>
    <HeaderComponent />

            <ScrollView>
            {!articles ? <ActivityIndicator size="large" color="#0097A7" hidesWhenStopped={true} />
                        : articles.map((data, index) => {

                        if(data.category.name == "politics"){
                                
                            return (

                                <Content key={index} style={{ backgroundColor: '#fff' }}>

                                    <View key={index} onPress={() => this.article(data._id)}>


                                        <Card style={{ height: 250, marginTop: 10, marginLeft: 5, marginRight: 5 }} onPress={() => this.article(data._id)}>

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

export default connect(mapStateToProps, actions)(Polotics);