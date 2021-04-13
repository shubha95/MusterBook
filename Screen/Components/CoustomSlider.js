// Import React and Component
import React ,{useState, useEffect} from 'react';
import {View, Text, SafeAreaView,StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-banner-carousel';

const CustomSlider = () => {

  const BannerHeight = 260;
  const BannerWidth =  Dimensions.get('window').width;
  const images = [
    require("../../Image/tcm-logo.png"),
    require("../../Image/tcm-logo.png"),
    require("../../Image/tcm-logo.png"),
];

const renderPage = (image, index) => {
  
  return (
    <View key={index}>
    <Image style={{  width: BannerWidth, height: BannerHeight }} source={image} />
</View>
  );
};

  return (
    <View style={styles.container}>
        <Carousel title={props.title}
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}
        >
            {images.map((image, index) =>renderPage(image, index))}
        </Carousel>
    </View>
);
};

export default   CustomSlider;

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      justifyContent: 'center'
  },
});