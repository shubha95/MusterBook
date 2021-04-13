// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,StyleSheet, Image, Dimensions,TouchableOpacity } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import CourseScreen from '../CourseScreen';
 
// import { useNavigation } from '@react-navigation/native';
 

const CustomSlider = (props) => {
 
  // const navigation = useNavigation();



    const BannerHeight = 200;
    const BannerWidth =  Dimensions.get('window').width;
    const images = [
      require("../../../Image/CAT.png"),
      require("../../../Image/CLAT.png"),
      require("../../../Image/IPM.png"),
  ];
 

const renderPage = (image, index) => {
 

  return (
    <View key={index}>
    <Image style={{  width: BannerWidth, height: BannerHeight }} source={image} />
    </View>
      );
    };

  return (
    <SafeAreaView  title={props.title}>
    <View style={styles.container}>
    <Text style={styles.paragraph}>{props.type}</Text>
        <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}
            
        >
            {images.map((image, index) =>renderPage(image, index))}
        </Carousel>
        <TouchableOpacity
              style={styles.buttonStyle}
              onPress={()=>props.onPressDetails()}
              // onPress={() => navigation.navigate('ViewCourse')}              
               >
              <Text style={styles.buttonTextStyle}>{props.buttomn}</Text>
            </TouchableOpacity>
    </View>
    </SafeAreaView>
);
};

export default   CustomSlider;

const styles = StyleSheet.create({

    buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
    container: {
      backgroundColor: '#fff',
      justifyContent: 'center'
      
  },
  paragraph: {
    paddingBottom:10,
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft:20,
    color: '#34495e',
  },
});