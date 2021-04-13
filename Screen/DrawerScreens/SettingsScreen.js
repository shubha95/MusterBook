// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView,StyleSheet,ScrollView} from 'react-native';
import { Card } from 'react-native-elements';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={styles.container}>
      <Card title="Local Modules">
        {/*react-native-elements Card*/}
        <Text style={styles.paragraph}>
          React Native Card View
          for Android and IOS using
          "react-native-elements"
        </Text>
      </Card>
    </View>
    <View style={styles.container}>
      <Card title="Local Modules">
        {/*react-native-elements Card*/}
        <Text style={styles.paragraph}>
          React Native Card View
          for Android and IOS using
          "react-native-elements"
        </Text>
      </Card>
    </View>
    <View style={styles.container}>
      <Card title="Local Modules">
        {/*react-native-elements Card*/}
        <Text style={styles.paragraph}>
          React Native Card View
          for Android and IOS using
          "react-native-elements"
        </Text>
      </Card>
    </View>
    <View style={styles.container}>
      <Card title="Local Modules">
        {/*react-native-elements Card*/}
        <Text style={styles.paragraph}>
          React Native Card View
          for Android and IOS using
          "react-native-elements"
        </Text>
      </Card>
    </View>
    <View style={styles.container}>
      <Card title="Local Modules">
        {/*react-native-elements Card*/}
        <Text style={styles.paragraph}>
          React Native Card View
          for Android and IOS using
          "react-native-elements"
        </Text>
      </Card>
    </View>
    <View style={styles.container}>
      <Card title="Local Modules">
        {/*react-native-elements Card*/}
        <Text style={styles.paragraph}>
          React Native Card View
          for Android and IOS using
          "react-native-elements"
        </Text>
      </Card>
    </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default SettingsScreen;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});