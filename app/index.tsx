import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { router, useRouter } from 'expo-router';

const { width } = Dimensions.get('window');


const App = () => {

  const router = useRouter();
  const [isStudent, setIsStudent] = useState(true);
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <SafeAreaView>
    <View style={styles.container}>
     

        <Image source={require('../assets/images/logo.png')}
        resizeMode='stretch'
        style={{width:70, height:70,tintColor:'#4a70f9'}}
        />
      <Text style={styles.title}>Sisi Classes</Text>

      <View style={styles.selectionContainer}>
        <Pressable
          style={[styles.selectionButton, isStudent && styles.selectedButton]}
          onPress={() => setIsStudent(true)}
          >
          <View style={styles.selectedCheck}>
          {isStudent && <Ionicons name="checkmark-circle-outline" size={30} color="yellowgreen" style={styles.checkmarkIcon} />}
          </View>
          <Text style={[styles.selectionText, isStudent && styles.selectedText]}>
            I am a 
          </Text>

          <Text style={[styles.selectionText && styles.leftbold, isStudent && styles.selectedText && styles.bold]}>
          STUDENT
          </Text>

        </Pressable>
        <Pressable
          style={[styles.selectionButton, !isStudent && styles.selectedButton]}
          onPress={() => setIsStudent(false)}
        >
          <View style={styles.selectedCheck}>
            {!isStudent && <Ionicons name="checkmark-circle-outline" size={30} color="yellowgreen" style={styles.checkmarkIcon} />}
          </View>
          <View>
            <Text style={[styles.selectionText, !isStudent && styles.selectedText]}>
              I am a 
            </Text>
            <Text style={[styles.selectionText && styles.leftbold, !isStudent && styles.selectedText && styles.bold]}>
              PARENT
            </Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.container_main}>

      <Text style={styles.login_signup}>
        Login or Signup
      </Text>

      <TextInput
        style={styles.input}
        placeholder="+91 Mobile Number"
        keyboardType="phone-pad"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />

      <Pressable style={styles.loginButton} onPress={()=>router.navigate('/(tabs)')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>

      <View style={styles.signupText}>
        <Text>New User ?{' '}</Text>
        <Pressable onPress={()=>router.navigate('/Screens/register')}>
          <Text style={styles.signupLink}>Signup</Text>
        </Pressable>
      </View>

      <View style={styles.signupText}>
      <Text style={styles.container_main_text}>
        or continue with
      </Text>
      </View>
      </View>


      <View style={styles.socialContainer}>
        <Pressable style={styles.socialButton}>
          <Ionicons name="logo-facebook" size={24} color="#3b5998" />
        </Pressable>
        <Pressable style={styles.socialButton}>
          <Ionicons name="logo-google" size={24} color="#db4437" />
        </Pressable>
        <Pressable style={styles.socialButton}>
          <Ionicons name="logo-apple" size={24} color="#000" />
        </Pressable>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    
 
    marginTop:10
  },
  container_close_button:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    paddingLeft:20
  },
  container_header:{
    display:'flex',
    flexDirection:'column',
    width:'80%',
    justifyContent:'center',
    alignContent:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  selectionContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    height:wp('30%'),
    width:wp('90%'),
    elevation:5,
    shadowOffset:{
      width:1,
      height:1,
    },
    shadowColor:'#eee',
    shadowRadius:5,
    shadowOpacity:0.8
  },
  selectionButton: {
    flex: 1,
    display:'flex',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    
  
    
    backgroundColor:'#ddd',
    justifyContent: 'center',
    flexDirection: 'column',
    width:'100%',
    paddingLeft:10
  },
  selectedCheck:{
    marginRight:wp('2%'),
    display:"flex",
    flexDirection:'row',
    justifyContent:'flex-end',
    height:30,
  },
  selectedButton: {
    backgroundColor: '#333450',
  },
  selectionText: {
    height:20,
    fontSize: 16,
    color: '#000',
  },
  selectedText: {
    color: '#fff',
    borderColor:'#000'
  },
  bold:{
    fontWeight:900,
    color:'#fff'
  },
  leftbold:{
    fontWeight:900,
    color:'#000'
  },
  checkmarkIcon: {
    display:'flex',
    marginLeft: 5,
    borderColor:'#000',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingRight:5,
    zIndex:10
  },
  container_main:{
    display:'flex',
    flexDirection:'column',
    width:'80%',
    paddingTop:10,
    // gap:15,
    paddingBottom:20
  },
  input: {
    width: width * 0.8,
    height: 60,
    
    
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop:5,
    marginBottom: 40,
    backgroundColor:'#eaf3ee',
    elevation:5,
    shadowColor:'#ddd',
    shadowOffset:{
      width:1,
      height:1,
    },
    shadowOpacity: 0.8,
  },
  loginButton: {
    width: width * 0.8,
    height: 50,
    backgroundColor: '#4A90E2',
    borderRadius: 25, // Medium level border radius
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  signupText: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:15
  },
  signupLink: {
    color: '#333',
    fontWeight:"900"
  },
  socialContainer: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'60%',
    paddingTop:30,
  
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    
    backgroundColor:'#ddd'
  },
  socialButtonText: {
    fontSize: 24,
    color: '#333',
  },
  login_signup:{
    width:'80%',
    height:'auto',
    fontSize:20,
    marginBottom:10,
    fontWeight:'normal'
  },
  container_main_text:{
    fontSize:12
  }
});

export default App;
