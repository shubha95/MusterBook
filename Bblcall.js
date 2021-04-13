/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
import { useEffect, useState } from 'react';
 import {  SafeAreaView, StyleSheet, ScrollView,  View, Text, StatusBar, } from 'react-native';
 const bbb = require('bigbluebutton-js')

 import {  Header, LearnMoreLinks,Colors,  DebugInstructions,  ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import AppNavigation from './src/components/AppNavigation';
 
 //import Room from './src/components/room/joinRoom';
 import RoomList from './src/components/room/roomList';
import config from './src/config/config';

 const App = (props) => {
  const [result, setData] = useState([]);
  console.log(result);
  

  useEffect(()=>{
    let api = bbb.api(
       config.serverUrl,
       config.secret 
    );
    // console.log(api);
    //  const infosUrl = api.monitoring.getMeetings()
    //  const recordingsUrl = api.recording.getRecordings() 
    //  let result = recordingsUrl
    //  console.log(JSON.stringify(result))
    },[])

   return (
     <>
    <StatusBar barStyle="dark-content" />
       <SafeAreaView>
     {/*    <ScrollView
           contentInsetAdjustmentBehavior="automatic"
           style={styles.scrollView}>*/}
           <View style={styles.body}>
           {/* <Text>shubham</Text> */}
                <AppNavigation/>
               {/* <RoomList componentId = {props.componentId}/> */}
           </View>
        {/* </ScrollView>*/}
       </SafeAreaView>
     </>
   );
 };
 
 App.options = {
   topBar: {
     title: {
       text: 'Room Hall',
       color: 'white'
     },
     background: {
       color: '#4d089a'
     }
   }
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: Colors.lighter,
   },
   engine: {
     position: 'absolute',
     right: 0,
   },
   body: {
     backgroundColor: Colors.white,
     height:'100%',
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     color: Colors.black,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     color: Colors.dark,
   },
   highlight: {
     fontWeight: '700',
   },
   footer: {
     color: Colors.dark,
     fontSize: 12,
     fontWeight: '600',
     padding: 4,
     paddingRight: 12,
     textAlign: 'right',
   },
 });
 
 export default App;
 
 
 