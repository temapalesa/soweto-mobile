import React, {Component} from 'react';
import {StyleSheet , Text , View , Image } from  'react-native';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);
console.warn();
console.disableYellowBox = true ;

class SplashScreen extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Home'); 
        },5000 ) 
    }

        render(){
            return(
                <View style={styles.Container}>
                    <View>
                    <Image
                     style={{width: 350, height:150,resizeMode:"contain"}}
                     source={require('../Images/sowetoLogo.jpg')}
                     />
                    </View>
                </View>
            )
        }

}

const styles = StyleSheet.create({

    Container: {
      
        flex : 1 ,
        alignItems : 'center' ,
        justifyContent : 'center',
        backgroundColor : '#007ac1',      

    }
    , 
});
export default SplashScreen;