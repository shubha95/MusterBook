

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView,ScrollView,StyleSheet,Image} from 'react-native';


const CourseDetails = () => {

  
  return (
      
    <SafeAreaView>
    <ScrollView>
 
      <Image  style={styles.tinyLogo}
        source={require('../../Image/CAT.png')}
      />
      <Text style={styles.textstyle}>Course - CAT 2021</Text>
      <Text style={styles.textstyle}>CAT Initial Program</Text>
      {/* <Text style={{textAlign: 'center',  fontSize:30 , fontWeight: 'bold' ,paddingBottom:10,paddingTop:10}}>Created by: TCM</Text> */}
      <Text  style={{ marginLeft: 15,marginRight:10,fontSize: 21,fontWeight: 'bold', marginTop:10,marginBottom:10}}>Description</Text>
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18,fontWeight: 'bold'}}>• 1000+ Hours Live Classes </Text>
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18,fontWeight: 'bold'}}>• 1000+ Hours Live Classes </Text>
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18,fontWeight: 'bold'}}>• 1000+ Hours Live Classes </Text>
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18,fontWeight: 'bold'}}>• 1000+ Hours Live Classes </Text>
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18,fontWeight: 'bold'}}>• 1000+ Hours Live Classes </Text>
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18,fontWeight: 'bold'}}>• 1000+ Hours Live Classes </Text>
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18,fontWeight: 'bold'}}>• 1000+ Hours Live Classes </Text>
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18,fontWeight: 'bold'}}>• 1000+ Hours Live Classes </Text>
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18,fontWeight: 'bold'}}>• 1000+ Hours Live Classes </Text>
      <Text style={{ marginLeft: 15,marginRight:10,fontSize: 18,fontWeight: 'bold'}}>• 1000+ Hours Live Classes </Text>
    
     
    </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetails;
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
        height:300,
        width:300,
      justifyContent: 'center',
      marginTop:10,
     marginLeft: 50, 
    },
  
  });