import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
      
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name='home' color={focused?color:'#000000'} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="myCourses"
        options={{
          title: 'Courses',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name='book' color={focused?color:'#000000'} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="ask"
        options={{
          title: '',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <View style={{backgroundColor:'#ddd', padding:10, height:90, borderRadius:10, flexDirection:'column', justifyContent:'center'}}>
              <Text style={{fontWeight:'bold'}}>ASK ME</Text>
            </View>
          ),
        }}
      />
       <Tabs.Screen
        name="MyAssignments"
        options={{
          title: 'Assignments',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name='file' color={focused?color:'#000000'} size={24} />
          ),
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name='user' color={focused?color:'#000000'} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
