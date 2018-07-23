import React, { Component } from 'react';
import {View, Text, Image, ScrollView,  } from 'react-native';
import {Tile, Divider,  Button } from 'react-native-elements'
import { Container,  Card, CardItem, Body, Icon,  Left, Right, DeckSwiper,  Thumbnail } from "native-base";



const cards = [
    {
      text: '15 July 2018',
      name: 'One',
      image: require('../Images/Soweto-Travel-Bar-venue.jpg'),
    },
     { text: '25 August 2018',
       name: 'Two',
       image: require('../Images/SowetoWalk.jpeg')
    },
     {
        text: '17 Feb 2018',
        name: 'Three',
        image: require('../Images/Thumbnail.jpg')

     },
     {
         text: '06 August 2018',
         name: 'Four',
         image: require('../Images/YR-@-Soweto-Theatre-flyer.jpg')
     },


  ];

class News extends Component {
     
    render() {
        return (
            <ScrollView>


<Card style={{ marginTop:20}}>

<Tile
  imageSrc={{ uri: 'https://tembisan.co.za/wp-content/uploads/sites/29/2016/10/IMG_5525-Large.jpg' }}

  title="#Tembisa protesters demand a response from mayor to service delivery grievances"
  contentContainerStyle={{ height: 140 }}
  imageContainerStyle={{marginTop:20,marginLeft:10, marginRight:10}}
  titleStyle={{color:'black', size:'1'}}
>
  
</Tile>
  </Card>

  <Container style={{ height:410}}>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text style={{color:'black'}}>{item.text}</Text>
                      <Text note style={{ color:'#D50000', fontSize:19}}>Soweto Events</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1, marginLeft:15, marginRight:15 }} source={item.image} />
                </CardItem>
                <CardItem>
                
                </CardItem>
              </Card>

            }

          />
 </Container>
 <Card>

     <Tile
  imageSrc={{ uri: 'https://1.bp.blogspot.com/-ltAEZHGMczA/VnO2cZ_pgmI/AAAAAAAAC88/s4SZMWzjhw4/s1600/2974860910.jpg' }}
  title="Shock after family killing horror"
  featured
  caption=""
  imageContainerStyle={{marginTop:15, marginLeft:15, paddingRight:15, height:290, width:390}}
/>

<CardItem>
    
    <Text style={{color:'black' , fontSize: 19,marginTop:-19}}>The haunting cries of a woman pierced the silence as a man’s body was removed from the backyard</Text>
</CardItem>

 </Card>


 <Card style={{backgroundColor:'#2196F3', height:50, marginLeft:15, marginRight:15}}>
 <Text style={{ fontSize: 20, color:'#EEEEEE'}}>Top Stories</Text>
 </Card>
 <CardItem style={{marginTop:17}}>
     <Left>
     <Thumbnail square source={{uri: 'https://turntable.kagiso.io/images/Limpopo_heist_R71_1.width-800.jpg'}} style={{height:90, width:150}}/>
     <Body>
     <Text style={{justifyContent:'center', color:'black',  fontSize: 19}}>WATCH: Another fedility BOM happened yesterday mid-day </Text>
     </Body>
     </Left>
 </CardItem>
 <Divider style={{ backgroundColor: '#DD2C00', size:80}} />
 <CardItem>

 <Left>
     <Thumbnail square source={{uri: 'http://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_289,q_70,w_463/kbpmkiueurmufjmgctnw'}} style={{height:90, width:150}}/>
     <Body>
     <Text style={{justifyContent:'center', color:'black',  fontSize: 19}}>TEMBISA RESIDENTS REBUILD HOMES IN WAKE OF TORNADO</Text>
     </Body>
     </Left>

 </CardItem>
 <Divider style={{ backgroundColor: '#DD2C00', size:80}} />
<CardItem>

<Left>
    <Thumbnail square source={{uri: 'https://tembisan.co.za/wp-content/uploads/sites/29/2015/04/Murde_637961173.jpg'}} style={{height:90, width:150}}/>
    <Body>
    <Text style={{justifyContent:'center', color:'black',  fontSize: 19}}>A 28-year-old local taxi driver was stabbed to death in a street in Phomolong Section in Tembisa.</Text>
    </Body>
    </Left>

</CardItem>

<Divider style={{ backgroundColor: '#DD2C00', size:80}} />
<CardItem>

<Left>
    <Thumbnail square source={{uri: 'https://africanreporter.co.za/wp-content/uploads/sites/32/2015/12/49afgencleants_76856.jpg'}} style={{height:90, width:150}}/>
    <Body>
    <Text style={{justifyContent:'center', color:'black',  fontSize: 19}}> Clean City Neighbourhood Fridays underway </Text>
    </Body>
    </Left>

</CardItem>

 <Divider style={{ backgroundColor: '#DD2C00', size:80}} />

<CardItem>

  <Body>
      <Text style={{fontFamily:'Lato,', fontSize: 24,marginLeft:50, marginTop:10, color:'black'}}>Subscribe to our newsletter </Text>
      <Button
  title='SUBSCRIBE'
  buttonStyle={{
    backgroundColor: '#D50000',
    width: 150,
    height: 35,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 17, 
    marginLeft: 100,
  }}
/>
 
  </Body>
</CardItem>
<Divider style={{ backgroundColor: '#DD2C00', size:80}} />

 </ScrollView>


        );
    }
}

export default News;