// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,StyleSheet, Image,TextInput} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { ScrollView } from 'react-native-gesture-handler';

const ProfileScreens = () => {

  return (
    <SafeAreaView>
    <ScrollView>
       <Image  style={styles.tinyLogo} source={require('../../Image/tcm-logo1.jpg')} />
       <Text style={styles.textstyle}>Shubham Keshari</Text>
       <View style={{marginTop:30,paddingLeft: 15,paddingRight: 15}}>
       <TextInput style = {styles.inputStyle}
               underlineColorAndroid = "transparent"
               placeholder = "First Name"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
             />
        <TextInput style = {styles.inputStyle}
               underlineColorAndroid = "transparent"
               placeholder = "Last Name"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
             />
        <TextInput style = {styles.inputStyle}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
             />
        <TextInput style = {styles.inputStyle}
               underlineColorAndroid = "transparent"
               placeholder = "Mobile"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
             />
         <TextInput style = {styles.inputStyle}
               underlineColorAndroid = "transparent"
               placeholder = "Date of Birth"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
             />   
        </View>
     
    </ScrollView>
    </SafeAreaView>


    
);
};

export default ProfileScreens;

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
    width:300,
    height:300,
    justifyContent: 'center',
    marginTop:10,
   marginLeft: 50,
   borderRadius: 450 / 2,  
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    marginBottom:10,
    flex: 1,
    color: '#141715',
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 30,
    borderColor: '#000000',
  },
  placStyle:{
    marginLeft:20,marginRight:20
    ,marginTop:30
  }
 
   });