import React, { Component,  } from 'react';
import { ScrollView, View, Text, Image, StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../src/actions';
import HeaderComponent from './HeaderComponent';
import { Thumbnail,Body, Content, CardItem}  from 'native-base'
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

                            if(data.category.name == "Politics"){
                                
                            return (

                                <Content key={index} style={{ backgroundColor: '#fff' }}>

                                    <View key={index}>


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

export default connect(mapStateToProps, actions)(Polotics);