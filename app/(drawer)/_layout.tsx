import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerLayout } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { state, descriptors, navigation } = props;
  const pathname = usePathname();

  const router =  useRouter();

  useEffect(()=>{console.log(pathname);}, [pathname]);
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={styles.drawerHeader}>
      <Text>SISI Classes</Text>
      </View>
      
      
      <DrawerItem label={"Dashboard"} labelStyle={{color:pathname =="/"?'#fff':'#000000'}} style={{backgroundColor: pathname =="/"? '#4f75fc':'transparent'}}  icon={({color,size})=>(
        <Feather name="home" size={24} color={pathname =="/"? '#fff':'#000000'}/>)}
        onPress={()=>router.navigate('/(tabs)/index')}/>
         <DrawerItem label={"Courses"} labelStyle={{color:pathname =="/myCourses"?'#fff':'#000000'}} style={{backgroundColor: pathname =="/myCourses"? '#4f75fc':'transparent'}}  icon={({color,size})=>(
        <Feather name="book-open" size={24} color={pathname =="/myCourses"? '#fff':'#000000'}/>)}
        onPress={()=>router.navigate('/(tabs)/myCourses')}/>
         <DrawerItem label={"Assignments"}  labelStyle={{color:pathname =="/MyAssignments"?'#fff':'#000000'}} style={{backgroundColor: pathname =="/MyAssignments"? '#4f75fc':'transparent'}}  icon={({color,size})=>(
        <Feather name="file-text" size={24} color={pathname =="/MyAssignments"? '#fff':'#000000'}/>)}
        onPress={()=>router.navigate('/(tabs)/MyAssignments')}/>
        <DrawerItem label={"Classes"} labelStyle={{color:pathname =="/Screens/myclasses"?'#fff':'#000000'}} style={{backgroundColor: pathname =="/Screens/myclasses"? '#4f75fc':'transparent'}}  icon={({color,size})=>(
        <Feather name="video" size={24} color={pathname =="/Screens/myclasses"? '#fff':'#000000'}/>)}
        onPress={()=>router.navigate('../../Screens/myclasses')}/>
        <DrawerItem label={"Attendence"}    icon={({color,size})=>(
        <Feather name="bar-chart" size={24} color="black"/>)}
        onPress={()=>null}/>
        <DrawerItem label={"Chats"} labelStyle={{color:pathname =="/Screens/chats"?'#fff':'#000000'}} style={{backgroundColor: pathname =="/Screens/chats"? '#4f75fc':'transparent'}}  icon={({color,size})=>(
        <FontAwesome name="commenting-o" size={24} color={pathname =="/Screens/chats"? '#fff':'#000000'}/>)}
        onPress={()=>router.navigate('../../Screens/chats')}/>
        <DrawerItem label={"Reports"} labelStyle={{color:pathname =="/Screens/Reports"?'#fff':'#000000'}} style={{backgroundColor: pathname =="/Screens/Reports"? '#4f75fc':'transparent'}}  icon={({color,size})=>(
        <Feather name="file" size={24} color={pathname =="/Screens/Reports"? '#fff':'#000000'}/>)}
        onPress={()=>router.navigate('../../Screens/Reports')}/>
        <DrawerItem label={"Doubts"} labelStyle={{color:pathname =="/Screens/MyDoubts"?'#fff':'#000000'}} style={{backgroundColor: pathname =="/Screens/MyDoubts"? '#4f75fc':'transparent'}}  icon={({color,size})=>(
        <FontAwesome name="comments-o" size={24} color={pathname =="/Screens/MyDoubts"? '#fff':'#000000'}/>)}
        onPress={()=>router.navigate('../../Screens/MyDoubts')}/>
        <DrawerItem label={"Profile"} labelStyle={{color:pathname =="/profile"?'#fff':'#000000'}} style={{backgroundColor: pathname =="/profile"? '#4f75fc':'transparent'}}  icon={({color,size})=>(
        <Feather name="user" size={24}  color={pathname =="/profile"? '#fff':'#000000'}/>)}
        onPress={()=>router.navigate('/(tabs)/profile')}/>
         <DrawerItem label={"Logout"} labelStyle={{color:pathname =="/Screens/logout"?'#fff':'#000000'}} style={{backgroundColor: pathname =="/Screens/logout"? '#4f75fc':'transparent'}}  icon={({color,size})=>(
        <Feather name="lock" size={24} color={pathname =="/Screens/logout"? '#fff':'#000000'}/>)}
        onPress={()=>null}/>
    </DrawerContentScrollView>
  );
}

export default function _layout() {
  return (
    <Drawer screenOptions={{ headerShown: false }} drawerContent={(props) => <CustomDrawerContent {...props} />}/>
    
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: '#fff', // Adjust the transparency here
    flex: 1,
  },
  drawerItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust the transparency here
  },
  activeDrawerItem: {
    backgroundColor: 'rgba(0, 128, 0, 0.7)', // Active item background color
  },
  drawerItemLabel: {
    color: 'rgba(0, 0, 0, 0.7)', // Adjust the transparency here
  },
  activeDrawerItemLabel: {
    color: 'rgba(255, 255, 255, 1)', // Active item label color
  },
  drawerHeader:{
    flexDirection:'column',
    height:150,
    justifyContent:'center',
    alignItems:'center'
  }
});
