import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Pressable , Dimensions, TouchableOpacity, Platform  } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

const CourseDetailsScreen: React.FC = () => {

   
const [activeButton, setActiveButton] = useState("About");
  
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView>
               <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
      
            <Image source={require('../../assets/images/courses/course1.jpeg')}
                resizeMode='stretch' style={{ width: "100%", height: 250 }} />
            <Text style={styles.courseTitle}>Mathematics Chapter 3 (Class 8th)</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 15, marginLeft:wp('3%')  }}>
               <View style={styles.courseCategoryContainer}>
                <Text style={styles.courseCategory}>Mathematics</Text>
                </View>
                <Ionicons name="star-half" size={21} color="yellowgreen" />
                <Text style={styles.courseRating}>4.8 (4,479 reviews)</Text>
            </View>

            <Text style={styles.coursePrice}>₹ 2,499</Text>
            <View style={styles.courseDetails}>
               <View style={styles.courseDetailRow}>
               <Ionicons name="people" size={20} color="#4f75fc" />
                <Text style={styles.courseDetailText}>2,499</Text>
               </View>
               <View style={styles.courseDetailRow}>
               <Ionicons name="time" size={20} color="#4f75fc" />
                <Text style={styles.courseDetailText}>1.5 Hours</Text>
               </View>
               <View style={styles.courseDetailRow}>
               <Ionicons name="reader" size={20} color="#4f75fc" />
                <Text style={styles.courseDetailText}>25</Text>
               </View>
            </View>
            <View style={styles.courseDetailTabs}>
              <TouchableOpacity style={{ paddingVertical:10,
        paddingHorizontal:42,
        backgroundColor: activeButton == "About"? "#2467EC": "transparent",borderRadius:activeButton == "About" ? 50:0}}
        onPress={()=> setActiveButton("About")}
        >
            <Text style={{color:activeButton == "About"? "#fff":'#000000'}}>
                About
            </Text>
               
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingVertical:10,
        paddingHorizontal:42,
        backgroundColor: activeButton == "Lessons"? "#2467EC": "transparent",borderRadius:activeButton == "Lessons" ? 50:0}}
        onPress={()=> setActiveButton("Lessons")}
        >
            <Text style={{color:activeButton == "Lessons"? "#fff":'#000000'}}>
                Lessons
            </Text>
               
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingVertical:10,
        paddingHorizontal:32,
        backgroundColor: activeButton == "Reviews"? "#2467EC": "transparent",borderRadius:activeButton == "Reviews" ? 50:0}}
        onPress={()=> setActiveButton("Reviews")}
        >
            <Text style={{color:activeButton == "Reviews"? "#fff":'#000000'}}>
                Reviews
            </Text>
               
              </TouchableOpacity>
            </View>

          
            {activeButton == "About" && (
            <View style={styles.mentorSection}>
                <Text style={styles.mentorTitle}>Mentor</Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "60%" }}>
                    <Image
                        style={styles.mentorImage}
                        source={require('../../assets/images/users/user2.jpeg')}
                    />
                    <View>
                        <Text style={styles.mentorName}>Rahul Nath</Text>
                        <Text style={styles.mentorQualification}>B.ED in Mathematics</Text>
                    </View>
                </View>
                <Text style={styles.aboutCourse}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </View>
            )}
            {activeButton == "Lessons" && (

                <View style={styles.LessonsContainer}>
                    <View style={styles.LessonTiles}>
                        <View style={styles.LessCountContainer}>
                            <Text style={styles.LessonCountText}>01</Text>
                            </View>
                            <View style={styles.LessonTitleContainer}>
                              
                                <Text style={styles.LessonTitleText}>UnderStanding Quadrilaterals matamatics</Text>
                                 <Text style={styles.LessonDuration}> 40 mins</Text>
                                </View>
                                <View style={styles.LessonPlayIcon}>
                                    <FontAwesome name='play-circle' size={30}></FontAwesome>
                                    </View>

                        </View>
                        <View style={styles.LessonTiles}>
                        <View style={styles.LessCountContainer}>
                            <Text style={styles.LessonCountText}>01</Text>
                            </View>
                            <View style={styles.LessonTitleContainer}>
                              
                                <Text style={styles.LessonTitleText}>UnderStanding Quadrilaterals matamatics</Text>
                                 <Text style={styles.LessonDuration}> 40 mins</Text>
                                </View>
                                <View style={styles.LessonPlayIcon}>
                                    <FontAwesome name='play-circle' size={30}></FontAwesome>
                                    </View>

                        </View>
                        <View style={styles.LessonTiles}>
                        <View style={styles.LessCountContainer}>
                            <Text style={styles.LessonCountText}>01</Text>
                            </View>
                            <View style={styles.LessonTitleContainer}>
                              
                                <Text style={styles.LessonTitleText}>UnderStanding Quadrilaterals matamatics</Text>
                                 <Text style={styles.LessonDuration}> 40 mins</Text>
                                </View>
                                <View style={styles.LessonPlayIcon}>
                                    <FontAwesome name='play-circle' size={30}></FontAwesome>
                                    </View>

                        </View>
                    </View>
            )}

            {activeButton =="Reviews" && (
                <View style={styles.reviewContainer}>
                    <View style={styles.reviewTotalCountContainer}>
                    <View style={styles.reviewRating}>
                        <FontAwesome name="star" size={15} color="orange"></FontAwesome>
                        <Text style={styles.RatingValue}>4.8</Text>
                        <Text style={styles.RatingValue}>(4,799)</Text>
                      </View>
                    </View>

                    <View style={styles.reviewCard}>
                    <View style={styles.reviewerImage}>
                        <Image source={require('../../assets/images/users/user1.jpeg')} style={{borderRadius:50, width:wp('15%'),height:wp('15%')}}></Image>
                       <View style={styles.reviewerRating}>
                       <Text style={styles.reviewerName}>Reena Mehta</Text>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <FontAwesome name="star" size={12} color="orange"/>
                            <FontAwesome name="star" size={12} color="orange"/>
                            <FontAwesome name="star" size={12} color="orange"/>
                            <FontAwesome name="star" size={12} color="orange"/>
                            <Text>(4.5)</Text>
                            </View>
                        </View>
                       
                        </View>
                        <View style={styles.reviewerFeedackContent}>
                           <Text style={{textAlign:'left'}}> The code is very good the explaination of the mentor was amazing, easy to understand </Text>
                            </View>
                        
                        
                       

                    </View>
                    
                    </View>
            )}




            <Pressable style={styles.Enrollbutton}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>ENROLL COURSE</Text>
            </Pressable>
           
        </View>
        </ScrollView>
        
        </SafeAreaView>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: { flexGrow: 1 },
    container: {  backgroundColor: '#fff', gap: 10,flex:1, },
    // courseImage: { width: '110%', height: 200, marginBottom: 20 },
    courseTitle: { fontSize: wp('5%') , margin:wp('2%'), fontWeight: 'bold' },
    courseCategory: { fontSize: 16,   color: '#555555' },
    courseRating: { fontSize: 16, marginVertical: 10 },
    coursePrice: { fontSize: 20, marginLeft:wp('3%'), fontWeight: 'bold', color: '#1E90FF' },
    courseDetails: { flexDirection: 'row', margin:wp('1.5%'), marginTop:wp('4%')  },
    courseDetailItem: { fontSize: 15, color: 'black' },
    aboutSection: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
    sectionHeader: { fontSize: 16, fontWeight: 'bold' },
    sectionHeader1: { fontSize: 16, fontWeight: 'bold', color: "#4f75fc" },
    mentorSection: { marginVertical: 20, margin: wp('3%') },
    mentorTitle: { fontSize: 18, fontWeight: 'bold', marginBottom:wp('1.5%') },
    mentorName: { fontSize: 16 },
    mentorImage: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    mentorQualification: { fontSize: 14, color: 'gray' },
    aboutCourse: { fontSize: 14, color: 'gray', marginTop: 10 },
    Enrollbutton: {
        marginLeft:wp('5%'),
        marginRight:wp('5%'),
        height: 40,
        backgroundColor: '#1E90FF',
        borderRadius: 25, // Medium level border radius
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:wp('2%')
    },
    courseCategoryContainer:{
        backgroundColor:'#eee',
        borderRadius: 5,
        padding:wp('1%'),
    },
    courseDetailRow:{
        flexDirection:'row',
        flex:1,
        
        justifyContent:'center',
        alignItems:'center'
      
    },
    courseDetailText:{
        marginLeft:4,
        fontSize: wp('3.5%')
    },
    line: {
        borderBottomColor: '#ddd',  // You can customize the color
        borderBottomWidth: 1,        // The thickness of the line
        marginVertical: 10,          // Space above and below the line
      },
      scene: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      courseDetailTabs:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:wp('2%'),
        marginHorizontal:wp('3'),
        backgroundColor:'#E1E9F8',
        borderRadius:50,
        
      },
      courseDetailTabButtons:{
       
      },
      LessonsContainer:{
        margin:wp('3%')
      },
      LessonTiles:{
        marginBottom:wp('2%'),
        backgroundColor: '#fff',
        flexDirection:'row',
        borderRadius:15,
        ...Platform.select({
           ios:{
            shadowOffset:{
                width:1,
                height:1,
    
            },
            shadowColor:'#ddd',
            shadowOpacity:0.6,
            shadowRadius: 15,
           }
        }) ,
        elevation:4,
        padding: 15,
        justifyContent:'space-between',
       

      },
      LessCountContainer:{
        
        backgroundColor: '#eee',
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        flex:0.5,
      },
      LessonCountText:{
        
        fontWeight:'bold',
        fontSize:18
      },
      LessonTitleContainer:{
        flexDirection:'column',
        justifyContent:'center',
        flex:2,
      },
      LessonTitleText:{
        marginLeft:10,
        fontWeight:'bold'

      },
      LessonDuration:{
        marginLeft: 5,
        fontWeight:'semibold',
        color:'#2467EC'

      },
      LessonPlayIcon:{
        
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      flex:0.5

      },

      reviewContainer:{
        flexDirection:'column',
        margin:wp('3%'),
        marginLeft:wp('5%')
      },
      reviewTotalCountContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      reviewRating:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
      },
      RatingValue:{
        marginLeft:4,
        fontSize:18

      },
      reviewCard:{
        margin:wp('3%'),
        flexDirection:'column',
       
        ...Platform.select({
            ios:{
             shadowOffset:{
                 width:1,
                 height:1,
     
             },
             shadowColor:'#000000',
             shadowOpacity:0.6,
             shadowRadius: 15,
            },
            android:{
                elevation:4,
            }
         }) ,
        

      },
      reviewerImage:{
        flex:0.5,
        flexDirection:'row',
        alignItems:'center',
       
        
      },
      reviewerName:{

       marginLeft:8,
       fontWeight:'bold'
      },
      reviewerRating:{
        flexDirection:'column'
      },
      reviewerFeedackContent:{
       margin:wp('3%')
      }
      


});

export default CourseDetailsScreen;