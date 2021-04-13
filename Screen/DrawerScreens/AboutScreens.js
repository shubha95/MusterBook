// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { ScrollView } from 'react-native-gesture-handler';

const AboutScreens = () => {

 

  return (
    <SafeAreaView>
    <ScrollView>
 
      <Image  style={styles.tinyLogo}
        source={require('../../Image/ajayabout.jpg')}
      />
      <Text style={styles.textstyle}>Ajai Singh </Text>
      <Text style={styles.textstyle}>(Founder & Director)</Text>
      <Text style={{textAlign: 'center',  fontSize:30 , fontWeight: 'bold' ,paddingBottom:10,paddingTop:10}}>About TCM</Text>
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18,fontWeight: 'bold'}}>Education is one of the basic prerequisites of success in today’s competitive world. A good education imparting institute must nurture and harness the talents of Students besides grooming their personality. A legitimate mix of essential instruction standards and basics of test educational program empowers the understudies to cut a specialty for themselves in different serious tests. At The Chamber of Mathematics, the experienced and dedicated educators leave no stone unturned in making success an attainable object. Their essential aphorism is to instill the rudiments and test splitting strategies, which are key to be fruitful. With the State of the craftsmanship offices and current study halls, you will encounter a correct blend of homeroom education and an atmosphere of Coaching.</Text>
    
     
    </ScrollView>
    </SafeAreaView>


    
);
};

export default AboutScreens;

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff', 
      fontSize: 18,
  },
  textstyle:{
     textAlign: 'center', 
     fontSize:30 , 
     fontWeight: 'bold',
  
  },
  tinyLogo: {
    justifyContent: 'center',
    marginTop:10,
   marginLeft: 50,
   borderRadius: 450 / 2,  
  },

});