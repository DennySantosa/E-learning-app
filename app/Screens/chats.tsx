import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';


const mentors = [
  {
    name: 'Jacob Kulikowski',
    title: 'Marketing Analyst',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Claire Ordonez',
    title: 'VP of Sales',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Priscilla Ehrman',
    title: 'UX Designer',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'Wade Chenail',
    title: 'Manager, Solution Engineering',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'Kathryn Pera',
    title: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    name: 'Francene Vandyne',
    title: 'EVP and GM, Sales Cloud',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    name: 'Benny Spanbauer',
    title: 'Senior Product Manager',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    name: 'Jamel Eusebio',
    title: 'Product Designer',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    name: 'Cyndy Lillibridge',
    title: 'VP of Marketing',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    name: 'Titus Kitamura',
    title: 'VP of Marketing',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
];



export default function App() {

    const router = useRouter();
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={()=>router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Chats</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
      <Pressable onPress={()=>router.navigate('./chatDetails')} style={styles.mentorCard}>
    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.mentorImage} />
    <View style={styles.mentorInfo}>
      <Text style={styles.mentorName}>Prashant Singh</Text>
      <Text style={styles.mentorTitle}>Maths Teacher</Text>
    </View>
    <TouchableOpacity >
     <FontAwesome name="commenting" color="#4f75fc" size={31} />
    </TouchableOpacity>
  </Pressable>
  <Pressable onPress={()=>router.navigate('./chatDetails')} style={styles.mentorCard}>
    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/2.jpg' }} style={styles.mentorImage} />
    <View style={styles.mentorInfo}>
      <Text style={styles.mentorName}>Rahul Gupta</Text>
      <Text style={styles.mentorTitle}>Accounts Teacher</Text>
    </View>
    <TouchableOpacity >
     <FontAwesome name="commenting" color="#4f75fc" size={31} />
    </TouchableOpacity>
  </Pressable>
  <Pressable onPress={()=>router.navigate('./chatDetails')} style={styles.mentorCard}>
    <Image source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }} style={styles.mentorImage} />
    <View style={styles.mentorInfo}>
      <Text style={styles.mentorName}>Neha Singh</Text>
      <Text style={styles.mentorTitle}>Economics Teacher</Text>
    </View>
    <TouchableOpacity >
     <FontAwesome name="commenting" color="#4f75fc" size={31} />
    </TouchableOpacity>
  </Pressable>

  <Pressable onPress={()=>router.navigate('./chatDetails')} style={styles.mentorCard}>
    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.mentorImage} />
    <View style={styles.mentorInfo}>
      <Text style={styles.mentorName}>Prashant Singh</Text>
      <Text style={styles.mentorTitle}>Maths Teacher</Text>
    </View>
    <TouchableOpacity >
     <FontAwesome name="commenting" color="#4f75fc" size={31} />
    </TouchableOpacity>
  </Pressable>
  <Pressable onPress={()=>router.navigate('./chatDetails')} style={styles.mentorCard}>
    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/2.jpg' }} style={styles.mentorImage} />
    <View style={styles.mentorInfo}>
      <Text style={styles.mentorName}>Rahul Gupta</Text>
      <Text style={styles.mentorTitle}>Accounts Teacher</Text>
    </View>
    <TouchableOpacity >
     <FontAwesome name="commenting" color="#4f75fc" size={31} />
    </TouchableOpacity>
  </Pressable>
  <Pressable onPress={()=>router.navigate('./chatDetails')} style={styles.mentorCard}>
    <Image source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }} style={styles.mentorImage} />
    <View style={styles.mentorInfo}>
      <Text style={styles.mentorName}>Neha Singh</Text>
      <Text style={styles.mentorTitle}>Economics Teacher</Text>
    </View>
    <TouchableOpacity >
     <FontAwesome name="commenting" color="#4f75fc" size={31} />
    </TouchableOpacity>
  </Pressable>
  <Pressable onPress={()=>router.navigate('./chatDetails')} style={styles.mentorCard}>
    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.mentorImage} />
    <View style={styles.mentorInfo}>
      <Text style={styles.mentorName}>Prashant Singh</Text>
      <Text style={styles.mentorTitle}>Maths Teacher</Text>
    </View>
    <TouchableOpacity >
     <FontAwesome name="commenting" color="#4f75fc" size={31} />
    </TouchableOpacity>
  </Pressable>
  <Pressable onPress={()=>router.navigate('./chatDetails')} style={styles.mentorCard}>
    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/2.jpg' }} style={styles.mentorImage} />
    <View style={styles.mentorInfo}>
      <Text style={styles.mentorName}>Rahul Gupta</Text>
      <Text style={styles.mentorTitle}>Accounts Teacher</Text>
    </View>
    <TouchableOpacity >
     <FontAwesome name="commenting" color="#4f75fc" size={31} />
    </TouchableOpacity>
  </Pressable>
  <Pressable onPress={()=>router.navigate('./chatDetails')} style={styles.mentorCard}>
    <Image source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }} style={styles.mentorImage} />
    <View style={styles.mentorInfo}>
      <Text style={styles.mentorName}>Neha Singh</Text>
      <Text style={styles.mentorTitle}>Economics Teacher</Text>
    </View>
    <TouchableOpacity >
     <FontAwesome name="commenting" color="#4f75fc" size={31} />
    </TouchableOpacity>
  </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    margin:3
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  mentorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  mentorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  mentorInfo: {
    flex: 1,
  },
  mentorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mentorTitle: {
    fontSize: 14,
    color: '#777',
  },
  chatButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 20,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
