// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
// import SettingsScreen from './DrawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import AboutScreens from './DrawerScreens/AboutScreens';
import ProfileScreens from './DrawerScreens/ProfileScreens'; 
import CourseScreen from './DrawerScreens/CourseScreen';
import CourseDetails from './Components/CourseDetails';
import PurchaseHistory from './DrawerScreens/PurchaseHistory';
import Invoice from './DrawerScreens/invoice';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Dashboard', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },    // headerLeft: () => (
          //   <NavigationDrawerHeader navigationProps={navigation} />
          // ),
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
       <Stack.Screen
        name="ViewPurchase"
        component={CourseScreen}
        options={{
          title: 'Purchase History', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="ViewCourse"
        component={CourseScreen}
        options={{
          title: 'View Course', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
     <Stack.Screen
        name="ViewCourseDetale"
        component={CourseDetails}
        options={{
          title: 'View Course Detale', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="ProfileScreens"
        component={ProfileScreens}
        options={{
          title: 'Profile', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="PurchaseHistory"
        component={PurchaseHistory}
        options={{
          title: 'Purchase History', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
     <Stack.Screen
        name="Invoice"
        component={Invoice}
        options={{
          title: 'Invoice Detail', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}s
      />
    </Stack.Navigator>
  );
};
const CourseScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="CourseScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
          name="CourseScreen"
          component={CourseScreen}
          options={{
            title: 'Course', //Set Header Title
          }}/>
    </Stack.Navigator>
  );
};

const aboutScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="aboutScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="AboutScreens"
        component={AboutScreens}
        options={{
          title: 'About', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const LiveClassesScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="LiveScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
    </Stack.Navigator>
  );
};



const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical:0, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',fontSize:20,fontWeight:"100",
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Dashboard'}}
        component={homeScreenStack}
      />
          <Drawer.Screen
        name="CourseScreenStack"
        options={{drawerLabel: 'Courses'}}
        component={CourseScreenStack}
      />
       <Drawer.Screen
        name="aboutScreenStack"
        options={{drawerLabel: 'About TCM'}}
        component={aboutScreenStack}
      />
     
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;