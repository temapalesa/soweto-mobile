import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
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
                <View >

                    <Text style={styles.TextHearder}>BACKGROUND </Text>

                    <Text style={styles.TextBody}>
                        Soweto Observer is a local community newspaper that cover news in Soweto.
                         The newspaper is 100% owned by The Genial Media Group. Its founders are young people from different  walk of life.
                         It started its print publication in August 2017 which is running to date
               </Text>
                    <Text style={styles.TextHearder}> Mission and Vision </Text>

                    <Text style={styles.TextBody}> We aim serve our community with news that are truthful,
                         objective and fair. Soweto observer is not affilated to any political party.
                          We uphold high standard journalism.//#endregion.//#endregion
                        We hope to reach out to the youth and the community as a whole
             </Text>
           
             <Text style={styles.TextHearder}>Contact Details</Text>
              
                <Text style={styles.InfoText}> Call: 081 7595 432</Text>

                <Text style={styles.InfoText}>  Call: 063 451 5871</Text>

                 <Text style={styles.InfoText}> Email: info@sowetoobserver.co.za </Text>

                  <Text style={styles.InfoText}> Email: Robert@sowetoobserver.co.za</Text>

           
     </View>

    

            </View>
        )
    }


}
const styles=StyleSheet.create({

    TextHearder:{
         fontWeight: 'bold',
         fontSize: 22,
         marginTop: 14,
         alignSelf:'center'
    },
    TextBody:{
         fontSize: 15,  
         alignItems:'center',
         marginTop:10,
         flexWrap : 'wrap',
         paddingLeft:6,
         paddingRight:6,
    },
    InfoText:{
        fontSize: 15,
        alignSelf:'center',
        marginTop:10,
    },
})


export default AboutComponent;