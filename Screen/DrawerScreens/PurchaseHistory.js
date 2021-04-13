 // Import React and Component
 import React ,{useState, useEffect} from 'react';
 import {View, Text, SafeAreaView,StyleSheet, Image, Dimensions,ScrollView } from 'react-native';
 import Carousel from 'react-native-banner-carousel';
 import CustomPurchasHistory from '../Components/CustomPurchaseHistory';
 import { useNavigation } from '@react-navigation/native';
 const PurchaseHistory= () => {
   const navigation = useNavigation();
  
   return (
     <SafeAreaView style={styles.container}>
     <ScrollView >
     <CustomPurchasHistory 
       title="Course Title"
       type="Batch Code - CAP 2071"
       enroll="5th March 2021"
       enrollen="5th March 2022"
       Paymentmathod="Bank"
       totalprice="4000"
       paystatus="Recieved"
       buttomn="Invoice"
       imageSource={require('../../Image/CLAT.png')}
       onPressDetails={()=>navigation.navigate('Invoice')}
     />

   
     </ScrollView>
   </SafeAreaView>
 )
 };
 
 export default PurchaseHistory;
 
 const styles = StyleSheet.create({
   container: {
       backgroundColor: '#fff',
       justifyContent: 'center',
       paddingTop:10,
   },
   paragraph: {
   
     fontSize: 18,
     fontWeight: 'bold',
     paddingLeft:20,
     color: '#34495e',
   },
 });