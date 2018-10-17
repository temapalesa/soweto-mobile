import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Icon} from 'react-native-elements'

import HeaderComponent from '../components/HeaderComponent';
import { Content , Button} from 'native-base';


class AboutComponent extends Component {

    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'About us ';

        return { drawerLabel };

    }


    render() {
        return (
            <View>
                <HeaderComponent />
                <View style={{ justifyContent:'center'}}>

                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginTop: 10, alignItems:'center'}}>- BACKGROUND -</Text>
                    <Text style={{ fontSize: 15, marginRight: 5, marginLeft: 5, alignItems:'center' }}>
                        Soweto Observer is a local community newspaper that cover news in Soweto.
                         The newspaper is 100% owned by The Genial Media Group. Its founders are young people from different  walk of life.
                         It started its print publication in August 2017 which is running to date
               </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 22,justifyContent:'center' }}> - Mission and Vision -</Text>

                    <Text style={{ fontSize: 15, marginRight: 5, marginLeft: 5, justifyContent:'center' }}> We aim serve our community with news that are truthful,
                         objective and fair. Soweto observer is not affilated to any political party.
                          We uphold high standard journalism.//#endregion.//#endregion
                        We hope to reach out to the youth and the community as a whole
             </Text>
           
             <Text style={{ fontWeight: 'bold', fontSize: 22,justifyContent:'center' }}>- Contact Details -</Text>
              
                <Text style={{ fontSize: 15 }}> 081 7595 432</Text>

                <Text style={{ fontSize: 15 }}>  063 451 5871</Text>

                 <Text style={{ fontSize: 15 }}>info@sowetoobserver.co.za </Text>

                  <Text style={{ fontSize: 15, }}> Robert@sowetoobserver.co.za</Text>

           
     </View>

    

            </View>
        )
    }


}


export default AboutComponent;