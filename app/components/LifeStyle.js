
import React, {Component} from 'react';
import {ScrollView,View,Text,TouchableHighlight,Image,Dimensions, TouchableOpacity} from 'react-native';
import {Info} from '../../screenNames';
import { Container, Header, Content,Right, Card, CardItem, Thumbnail,  Button, Icon, Left, Body } from 'native-base';
import HeaderComponent from './HeaderComponent';
import { connect } from 'react-redux';
import * as actions from '../src/actions';


 class LifeStyleComp extends Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel ='Life Style';
        return { drawerLabel,};
    }

    componentDidMount(){
        this.props.fetchArticles();

    }
    viewArticles(id){
        this.props.fetchArticles(id)
    }

    render () {

        const { articles } = this.props;

        return (
          <View style={{backgroundColor:'white'}} >
             <HeaderComponent/>

             <ScrollView>
             {!articles ? <ActivityIndicator size="large" color="#0097A7" hidesWhenStopped={true} />
                        : articles.map((data, index) => {

                        if(data.category.name == "LifeStyle"){
                                
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
            
    </View>);
    }
}

function mapStateToProps({ articles }) {
    return {
        articles
    }
}


export default connect(mapStateToProps, actions)(LifeStyleComp);

