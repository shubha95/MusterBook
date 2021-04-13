 // Import React and Component
 import React ,{useState, useEffect} from 'react';
 import {View, Text, SafeAreaView,StyleSheet, Image, Dimensions,ScrollView } from 'react-native';
 import Carousel from 'react-native-banner-carousel';
 import CourseSlider from '../DrawerScreens/Slider/CourseSlider';
 import { useNavigation } from '@react-navigation/native';
 const HomeScreens = () => {
   const navigation = useNavigation();
  
   return (
     <SafeAreaView style={styles.container}>
     <ScrollView >
     <CourseSlider 
       title="Course Title"
       type="My Courses "
       buttomn="View All Course"
       onPressDetails={()=>navigation.navigate('ViewCourse')}
     />
     <CourseSlider 
       title="Teachers Title"
       type="Purchase History"
       buttomn="View All Teachers"
       onPressDetails={()=>navigation.navigate('ViewCourse')}
     />
      <CourseSlider 
       title="Teachers Title"
       type="Purchase History"
       buttomn="View All Teachers"
       onPressDetails={()=>navigation.navigate('ViewCourse')}
     />
  
      
      
   
     </ScrollView>
   </SafeAreaView>
 )
 };
 
 export default HomeScreens;
 
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