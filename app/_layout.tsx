import { Stack } from 'expo-router';
export default function Layout() {
  return (
    <Stack initialRouteName="login">
     <Stack.Screen name="index"  options={{ headerShown: false }} />   
     <Stack.Screen name="Screens/register"  options={{ headerShown: false }} /> 
     <Stack.Screen name="Screens/courseDetails"  options={{ headerShown: false }} /> 
     <Stack.Screen name="Screens/lessons"  options={{ headerShown: false }} /> 
     <Stack.Screen name="Screens/assignments"  options={{ headerShown: false }} />
     <Stack.Screen name="Screens/myclasses"  options={{ headerShown: false }} />
     <Stack.Screen name="Screens/MyDoubts"  options={{ headerShown: false }} />
     <Stack.Screen name="Screens/chats"  options={{ headerShown: false }} />
     <Stack.Screen name="Screens/chatDetails"  options={{ headerShown: false }} />
     <Stack.Screen name="Screens/Reports"  options={{ headerShown: false }} />
     <Stack.Screen name="(drawer)"  options={{ headerShown: false }} /> 
     
       
    </Stack> );
}
