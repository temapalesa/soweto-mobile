import React, {Component} from 'react';
import {StyleSheet , Text , View , Image } from  'react-native';

class SplashScreen extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Home'); 
        }, 2500 ) 
    }

        render(){
            return(
                <View style={styles.Container}>
                    <View>
                    <Image
                     style={{width: 350, height:150,}}
                     source={require('../Images/download.png')}
                     />
                    </View>
                </View>
            )
        }

}

const styles = StyleSheet.create({

    Container: {
       // background :'white',
        flex : 1 ,
        alignItems : 'center' ,
        justifyContent : 'center',

    }
    , 
});
export default SplashScreen;