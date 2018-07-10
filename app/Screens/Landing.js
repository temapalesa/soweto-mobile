import React, { Component } from 'react';
import {View, Text,Dimensions, ScrollView,Image  } from 'react-native';
import {  ListItem, Button, } from 'react-native-elements'
import { Container, Header, Content, Card, CardItem, Body, Icon,  Left, Right, } from "native-base";





class Landing extends Component {
     
    render() {
        return (
      
      
            <ScrollView>

            <View style={{flexDirection:'row',flex:1, width:Dimensions.get('window').width}}>
      
      
      
       <ScrollView horizontal={true}> 
     
       <Card style={{borderBottomColor: '#ff8000',width:Dimensions.get('window').width, marginTop:20}}>
           <CardItem>
             <Body>
               <Image source={{uri:'https://sowetourban.co.za/wp-content/uploads/sites/112/2017/04/WhatsApp-Image-2017-04-11-at-11.22.57.jpeg'}}
                style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
               <Text style={{fontStyle:'normal',color:'black' , fontSize: 19,}} onPress = {() => this.props.navigation.navigate('Video')}>
               Suspected ritual killing cause a stir in Orlando East
               </Text>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text>12 Likes</Text>
               
                 <Icon active name="chatbubbles" />
                 <Text>4 Comments</Text>
                 <Right>
               <Text>11h ago</Text>
             </Right>
               </Button>
               
             </Body>
             
           </CardItem>
           </Card>

           

           <Card style={{borderBottomColor: '#ff8000',width:Dimensions.get('window').width}}>
           <CardItem>
             <Body>
             <Image source={{uri:'https://cdn.24.co.za/files/Cms/General/d/3209/8ddc4ee6cae141808e4100d542ba68ae.jpg'}}
                style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
               <Text style={{fontStyle:'normal',color:'black',fontSize: 19,}}>
               Staurt Baxter back to Kaizer Chiefs Again
               </Text>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text>12 Likes</Text>
               
                 <Icon active name="chatbubbles" />
                 <Text>4 Comments</Text>
                 <Right>
               <Text>5h ago</Text>
             </Right>
               </Button>
             </Body>
             
           </CardItem>
           </Card>
           <Card style={{borderBottomColor: '#ff8000',width:Dimensions.get('window').width}}>
           <CardItem>
             <Body>
             <Image source={{uri:'data:image/jpeg;base64,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'}}
                style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
               <Text style={{fontStyle:'normal',color:'black',fontSize: 19,}}>
               New premier of the North West Province
               </Text>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text>12 Likes</Text>
               
                 <Icon active name="chatbubbles" />
                 <Text>4 Comments</Text>
                 <Right>
               <Text>14h ago</Text>
             </Right>
               </Button>
             </Body>
           </CardItem>
           </Card>
           <Card style={{borderBottomColor: '#ff8000',width:Dimensions.get('window').width}}>
           <CardItem>
             <Body>
             <Image source={{uri:'http://www.sabcnews.com/sabcnews/wp-content/uploads/2018/06/eskom-2-4.jpg'}}
                style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
               <Text style={{fontStyle:'normal', color:'black',fontSize: 19,}}>
               Eskom workers refuses 4.7% salary increase
               </Text>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text>12 Likes</Text>
               
                 <Icon active name="chatbubbles" />
                 <Text>4 Comments</Text>
                 <Right>
               <Text>7h ago</Text>
             </Right>
               </Button>
             </Body>
           </CardItem>
           </Card>
           <Card style={{borderBottomColor: '#ff8000',width:Dimensions.get('window').width}}>
           <CardItem>
             <Body>
             <Image source={{uri:'https://dj0j0ofql4htg.cloudfront.net/cms2/image_manager/uploads/News/277157/7/1503060840_5bb21.jpg'}}
                style={{height: 250,width:Dimensions.get('window').width,flex:0}}/>
               <Text style={{fontStyle:'normal', color:'black',fontSize: 19,}}>
               Kaizer Chiefs have signed Khama Billiat!
               </Text>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text>12 Likes</Text>
               
                 <Icon active name="chatbubbles" />
                 <Text>4 Comments</Text>
               </Button>
             </Body>
           </CardItem>
           </Card>

         
       </ScrollView>
       
         </View>

         <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
             <Left>
             <Image source={{uri:'data:image/jpeg;base64,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'}}
                style={{height: 75,width:75}}/>
               <Body>              
                 <Text style={{color:'black' ,fontStyle:'italic', fontSize:16, }}>Pirates Wait On Club Management For Khuzwayo? </Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
             <Left>
             <Image source={{uri:'https://www.arabtimesonline.com/news/file/2018/06/zimbabwe.jpg'}}
                style={{height: 75,width:75}}/>
               <Body>              
                 <Text style={{color:'black' ,fontStyle:'italic', fontSize:16}}>Injured people are evacuated after an explosion at the stadium in Bulawayo where Zimbabwe President just addressed a rally on 23 June 2018. </Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem style={{alignSelf:'center',borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
           <Image source={{uri:''}}
                style={{alignSelf:'center', height: 230,width:330,}}/>
           </CardItem>
           <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
             <Left>
             <Image source={{uri:'http://www.fameafrica.tv/wp-content/uploads/2018/07/Zodwa-Wabantu-donates-R10-000-1.png'}}
                style={{height: 75,width:75}}/>
               <Body>              
                 <Text style={{color:'black' ,fontStyle:'italic'}}>Local entertainer Zodwa Wabantu is looking to donate R10 000 to a mother with a disabled child after seeing a video on Facebook.</Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
             <Left>
             <Image source={{uri:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAzaVgr.img?h=315&w=600&m=6&q=60&o=t&l=f&f=jpg&x=350&y=246'}}
                style={{height: 75,width:75}}/>
               <Body>              
                 <Text style={{color:'black' ,fontStyle:'italic'}}>Banks ‘owe’ assistance to SoEs
                  </Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
             <Left>
             <Image source={{uri:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAz1Hn2.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg'}}
                style={{height: 75,width:75}}/>
               <Body>              
                 <Text style={{color:'black' ,fontStyle:'italic'}}>Adorable baby elephant rescued from well in Sri Lanka </Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem style={{margin:7, borderBottomColor:'#ff8000',borderBottomWidth:1,}}>
             <Left>
             <Image source={{uri:'https://image.iol.co.za/image/1/process/620x349?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/image/iol/2018/06/25/15672755/Elton2.jpg&operation=CROP&offset=0x0&resize=5472x3072'}}
                style={{height: 75,width:75}}/>
               <Body>              
                 <Text style={{color:'black' ,fontStyle:'italic'}}>Newlands, just like Jantjies, is not good enough for Test-match rugby </Text>
               </Body>
             </Left>
           </CardItem>
             
   </ScrollView> 
 






        );
      } 
    }
   


export default Landing;