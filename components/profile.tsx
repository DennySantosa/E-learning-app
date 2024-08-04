import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => <View><Text>Home Screen</Text></View>;
const MyCourseScreen = () => <View><Text>My Course Screen</Text></View>;
const InboxScreen = () => <View><Text>Inbox Screen</Text></View>;
// const TransactionsScreen = () => <View><Text>Transactions Screen</Text></View>;

const ProfileStack = () => (
  <Stack.Navigator>
    {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    <Stack.Screen name="EditProfile" component={HomeScreen} />
    <Stack.Screen name="Notification" component={HomeScreen} />
    <Stack.Screen name="Payment" component={HomeScreen} />
    <Stack.Screen name="Security" component={HomeScreen} />
    <Stack.Screen name="Language" component={HomeScreen} />
    <Stack.Screen name="PrivacyPolicy" component={HomeScreen} />
    <Stack.Screen name="HelpCenter" component={HomeScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Course" component={MyCourseScreen} />
        {/* <Tab.Screen name="Inbox" component={InboxScreen} /> */}
        {/* <Tab.Screen name="Transactions" component={TransactionsScreen} /> */}
        {/* <Tab.Screen name="Profile" component={ProfileStack} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
