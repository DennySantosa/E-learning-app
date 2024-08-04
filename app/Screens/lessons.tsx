import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';

const lessons = [
  {
    section: 'Section 1 - Introduction',
    totalDuration: '15 min',
    lessons: [
      { id: 1, title: 'Introduction of HTML', duration: '10 mins' },
      { id: 2, title: 'Basics of HTML', duration: '10 mins' },
      { id: 3, title: 'Use of H1 Tag', duration: '10 mins' },
    ],
  },
  {
    section: 'Section 2 - Tables',
    totalDuration: '65 min',
    lessons: [
      { id: 4, title: 'Basic of Table', duration: '10 mins' },
      { id: 5, title: 'Use of Table Row', duration: '10 mins' },
    ],
  },
];

const LessonsScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>router.back()}>
          <Ionicons name="arrow-back"  size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Lessons</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {lessons.map((section, index) => (
        <View key={index} style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.section}</Text>
            <Text style={styles.sectionDuration}>{section.totalDuration}</Text>
          </View>
          {section.lessons.map((lesson) => (
            <View key={lesson.id} style={styles.lesson}>
              <View style={styles.lessonNumber}>
                <Text style={styles.lessonNumberText}>{lesson.id}</Text>
              </View>
              <View style={styles.lessonDetails}>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.lessonDuration}>{lesson.duration}</Text>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Ionicons name="play-circle" size={24} color="#3366FF" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
     
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    height: hp('100%')
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionDuration: {
    fontSize: 16,
    color: '#3366FF',
  },
  lesson: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  lessonNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E0E7FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  lessonNumberText: {
    color: '#3366FF',
    fontSize: 16,
    fontWeight: "bold",
  },
  lessonDetails: {
    flex: 1,
    gap:10
  },
  lessonTitle: {
    fontSize: 16,
  },
  lessonDuration: {
    fontSize: 14,
    color: '#888',
  },
  playButton: {
    marginLeft: 10,
  },
});

export default LessonsScreen;
