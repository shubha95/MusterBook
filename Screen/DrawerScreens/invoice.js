import React from 'react';
import {View , Text, Image ,TouchableOpacity,StyleSheet,SafeAreaView,ScrollView}  from 'react-native';
import { Card } from 'react-native-elements';

const CustomCard = ( ) => {
    return(
        <SafeAreaView >
        <ScrollView >
        <Card  >
        {/*react-native-elements Card*/}
        <View >
              <Image
                source={require('../../Image/tcm-logo.png')}
                  style={{
                  width: '100%',
                  height: 100,
                  justifyContent: 'center',
                }}
              />
            </View>
        <Text style={styles.paragraph}>Puchased On: 5th March 2021</Text>
        <Text style={styles.paragraph}>From : TCM Address: 57 S. P. Marg, Civil Lines , Prayagraj (211001) INDIA</Text>
        <Text style={styles.paragraph}>Phone : 9336339618</Text>
        <Text style={styles.paragraph}>Email : tcm.education14@gmail.com</Text>
        <Text style={styles.paragraph}>To : Shubahm </Text>
        <Text style={styles.paragraph}>Address: 57 S. P. Marg, Civil Lines , Prayagraj (211001) INDIA </Text>
        <Text style={styles.paragraph}>Phone : 9336339618</Text>
        <Text style={styles.paragraph}>Email : tcm.education14@gmail.com</Text>
        <Text style={styles.paragraph}>OrderID: TCM896567776sss</Text>
        <Text style={styles.paragraph}>Transaction ID: 898989XXXXXX89</Text>
        <Text style={styles.paragraph}>PaymentMode: Admin Enroll</Text>
        <Text style={styles.paragraph}>Currency: USD</Text>
        <Text style={styles.paragraph}>Payment Status: Recieved </Text>
        <Text style={styles.paragraph}>Enroll On: 5th March 2021</Text>
        <TouchableOpacity
            // onPress={()=>props.onPressDetails()}
            style={styles.buttonStyle}
            >
            <Text style={styles.buttonTextStyle}>Download</Text>
          </TouchableOpacity>
      </Card>
      
     </ScrollView>
   </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    paragraph: {
        margin: 5,
        fontSize: 18,
        fontWeight: 'bold',
        // textAlign: 'center',
        color: '#34495e',
      },
      buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        // borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
})


export default CustomCard;