import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {

    const router = useRouter();
    const navigation = useNavigation();
    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
      };
    return (
        
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row', marginRight:15,}}>
                <Ionicons name="menu" onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} size={30} ></Ionicons>
                </View>
                
                <Image source={require('../../../assets/images/users/user10.jpeg')} style={styles.profilePic} />
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Welcome Back!</Text>
                    <Text style={styles.userName}>Dishant Nirmal</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} style={{ width: 42, height: 42, backgroundColor: "#c5d2f6", borderRadius: 15, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      
                    <Ionicons name="notifications" size={24} color="#4f75fc" />
                </TouchableOpacity>
            </View>

            <ImageBackground style={styles.banner} source={require('../../../assets/images/banners/banner2.png')} borderRadius={31}>
                {/* <Image source={require('../../assets/images/educate8.png')} 
        resizeMode='stretch'
         /> */}
               
                <View style={styles.bannerSearch}>
                    <TextInput style={styles.searchInput} placeholder="Search here..." />
                </View>
            </ImageBackground>

            <View style={styles.classesContainer}>
                <Text style={styles.sectionTitle}>Courses</Text>
                <TouchableOpacity onPress={()=>router.navigate('../../Screens/AllCourses')}>
                    <Text style={styles.seeAllText}>See all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.classesScroll}>
                <TouchableOpacity onPress={()=>router.navigate('../Screens/courseDetails')} style={styles.classBox}>
                    <Image source={require('../../../assets/images/courses/course3.jpeg')} style={styles.classimage} />
                    <View style={styles.courseTitleContainer}>
                      <Text style={styles.courseTitleText}>
                       Mathametics Class 8th
                      </Text>
                    </View>
                    <View style={styles.courseDetailsRow}>
                       <View style={styles.courseAuthor}>
                        <Text style={styles.courseAuthorText}>
                            Rahul Singh
                        </Text>
                       </View>
                       <View style={styles.feedbackRow}>
                       <Ionicons name="star" size={15} color="orange" style={styles.courseFeedbackRating} />
                       <Text style={styles.courseRatingValue}>4.5</Text>
                       <Text style={styles.courseEnrolledValue}>(2,569)</Text>
                       </View>
                       
                    </View>
                    <View style={styles.courseBottom}>
                    <View style={styles.CoursePrice}>
                    <Text style={styles.CoursePriceText}>2,499</Text>
                    <Text style={styles.CourseMRP}>5999</Text>
                    </View>
                    <View style={styles.CourseEnrollButton}>
                    <Pressable style={styles.enrollButton} onPress={()=>router.navigate('../Screens/courseDetails')}>
                       <Text style={styles.enrollText}>Enroll Now</Text>
                       </Pressable>
                    </View>
                    </View>
                    
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>router.navigate('../Screens/courseDetails')} style={styles.classBox}>
                    <Image source={require('../../../assets/images/courses/course4.jpeg')} style={styles.classimage} />
                    <View style={styles.courseTitleContainer}>
                      <Text style={styles.courseTitleText}>
                       Mathametics Class 8th
                      </Text>
                    </View>
                    <View style={styles.courseDetailsRow}>
                       <View style={styles.courseAuthor}>
                        <Text style={styles.courseAuthorText}>
                            Rahul Singh
                        </Text>
                       </View>
                       <View style={styles.feedbackRow}>
                       <Ionicons name="star" size={15} color="orange" style={styles.courseFeedbackRating} />
                       <Text style={styles.courseRatingValue}>4.5</Text>
                       <Text style={styles.courseEnrolledValue}>(2,569)</Text>
                       </View>
                       
                    </View>
                    <View style={styles.courseBottom}>
                    <View style={styles.CoursePrice}>
                    <Text style={styles.CoursePriceText}>2,499</Text>
                    <Text style={styles.CourseMRP}>5999</Text>
                    </View>
                    <View style={styles.CourseEnrollButton}>
                    <Pressable style={styles.enrollButton} onPress={()=>null}>
                       <Text style={styles.enrollText}>Enroll Now</Text>
                       </Pressable>
                    </View>
                    </View>
                    
                </TouchableOpacity>
               <TouchableOpacity onPress={()=>router.navigate('../Screens/courseDetails')} style={styles.classBox}>
                    <Image source={require('../../../assets/images/courses/course8.jpeg')} style={styles.classimage} />
                    <View style={styles.courseTitleContainer}>
                      <Text style={styles.courseTitleText}>
                       Mathametics Class 8th
                      </Text>
                    </View>
                    <View style={styles.courseDetailsRow}>
                       <View style={styles.courseAuthor}>
                        <Text style={styles.courseAuthorText}>
                            Rahul Singh
                        </Text>
                       </View>
                       <View style={styles.feedbackRow}>
                       <Ionicons name="star" size={15} color="orange" style={styles.courseFeedbackRating} />
                       <Text style={styles.courseRatingValue}>4.5</Text>
                       <Text style={styles.courseEnrolledValue}>(2,569)</Text>
                       </View>
                       
                    </View>
                    <View style={styles.courseBottom}>
                    <View style={styles.CoursePrice}>
                    <Text style={styles.CoursePriceText}>2,499</Text>
                    <Text style={styles.CourseMRP}>5999</Text>
                    </View>
                    <View style={styles.CourseEnrollButton}>
                        <Pressable style={styles.enrollButton} onPress={()=>null}>
                       <Text style={styles.enrollText}>Enroll Now</Text>
                       </Pressable>
                    </View>
                    </View>
                    
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.tutorSection}>
                <Text style={styles.sectionTitle}>Our tutor</Text>
               <View style={styles.tutorCard}>
                <View style={styles.tutorImageContainer}>
                <Image source={require('../../../assets/images/onboarding1.png')} style={styles.tutorImage} />
                </View>
                <View style={styles.tutorInfo}>
              
                    <Text style={styles.tutorCourseTitle}>Mrs. Ludhiyana Gupta</Text>
                    <View style={styles.tutorDurationRow}>
                        <View style={styles.subjectContainer}>
                        <Text style={styles.tutorSubjectText}>Economics</Text>
                        </View>
                       
                        <View style={styles.durationContainer}>
                        <Text style={styles.tutorDurationText}>English</Text>
                     
                        </View>
                    </View>
                   
                    <View style={styles.coursePriceRow}>
                     <View style={styles.priceSection}>
                     <Ionicons name="star" size={15} color="orange" />
                            <Ionicons name="star" size={15} color="orange"  />
                            <Ionicons name="star" size={15} color="orange"/>
                            <Ionicons name="star" size={15} color="orange" />
                            <Text>(4.5)</Text>
                     </View>
                     
                    </View>
                </View>
                
                
               </View>
               <View style={styles.tutorCard}>
                <View style={styles.tutorImageContainer}>
                <Image source={require('../../../assets/images/onboarding1.png')} style={styles.tutorImage} />
                </View>
                <View style={styles.tutorInfo}>
              
                    <Text style={styles.tutorCourseTitle}>Mrs. Ludhiyana Gupta</Text>
                    <View style={styles.tutorDurationRow}>
                        <View style={styles.subjectContainer}>
                        <Text style={styles.tutorSubjectText}>Economics</Text>
                        </View>
                       
                        <View style={styles.durationContainer}>
                        <Text style={styles.tutorDurationText}>English</Text>
                     
                        </View>
                    </View>
                   
                    <View style={styles.coursePriceRow}>
                     <View style={styles.priceSection}>
                     <Ionicons name="star" size={15} color="orange" />
                            <Ionicons name="star" size={15} color="orange"  />
                            <Ionicons name="star" size={15} color="orange"/>
                            <Ionicons name="star" size={15} color="orange" />
                            <Text>(4.5)</Text>
                     </View>
                     
                    </View>
                </View>
                
                
               </View>
              
                
            </View>
        </ScrollView>
       
    );
};

const styles = StyleSheet.create({
    container: {
       
        backgroundColor: '#f8f8f8',
        paddingTop:30,
    },
    header: {
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    welcomeContainer: {
        flex: 1,
        marginLeft: 10,
    },
    welcomeText: {
        fontSize: 16,
        color: '#888',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    notificationIcon: {
        marginLeft: 'auto',
        paddingTop: 65,
    },
    banner: {
        position:'relative',
       
      
        height: hp('18 %'),
        borderRadius: 31,
        margin: 16,
        padding:wp('5%'),
        alignItems:'center',
        elevation:2,
       
        shadowColor:'#eee',
        shadowRadius:31,
        shadowOpacity:0.2
        
        
    },

    bannerText: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 10,
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 8,
        minHeight:40,
        maxHeight:60,
        elevation:5,
        
        shadowColor: '#000',
        shadowRadius: 15,
        shadowOpacity:0.3
    },
    classesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAllText: {
        color: '#4B84F1',
    },
    classesScroll: {
        marginTop: 10,
        paddingHorizontal: 16,
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between"
    },
    classBox: {
        margin:wp('3%'),
        paddingBottom:wp('4.5%'),
        width: wp('65%'),
        height: wp('55%'),
        backgroundColor: '#fff',
        borderRadius: 12,
        // paddingLeft: 8,
        elevation:8,
        flexDirection: "column",
       
        alignItems: "flex-start",
        textAlign: "left",

        shadowOffset:{
            width:1,
            height:1,
        },

        shadowColor:'#808080 ',
        shadowRadius:5,
        shadowOpacity: 0.7
       
        // alignItems: 'center',
        // marginRight: 10,
    },
    classText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#345ae7",
        zIndex: 100,
     
        top: 8,
        left: 10
    },
    classtext: {
        fontSize: 14,
        fontWeight: 'bold',
        zIndex: 100,
        color: "#345ae7",
        
        top: 18,
        left: 23
    },
    classimage: {
        width: "100%",
        height: "60%",
        
        top: 0,
        borderTopLeftRadius:12,
        borderTopRightRadius:12
    },
    tutorSection: {
        paddingHorizontal: 16,
        marginTop: 20,
    },
    tutorCard: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 25,
        
        height:wp('40%'),
        marginTop: 45,
        alignItems: 'center',
        marginBottom:20,
        elevation:8,
        shadowOffset:{
            width:1,
            height:1,
        },

        shadowColor:'#808080 ',
        shadowRadius:25,
        shadowOpacity: 0.2

    },
    tutorImage: {
        width:wp('35%'),
        height:wp('50%'),
        paddingRight: 20,
        borderRadius: 10,
        position: 'absolute',
        bottom: -wp('20%')
    },
    tutorInfo: {
      
        flex: 1,
        flexDirection:'column'

    },
    tutorSubject: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    tutorName: {
        fontSize: 16,
        color: "white"
    },
    tutorDetails: {
        color: 'white',
    },
    tutorClasses: {
        marginTop: 4,
        color: "#021f8d",
        fontSize: 22,
        fontWeight: "700"
    },
    bannerSearch:{
        position:'absolute',
        bottom: -hp('15%')/6,
        justifyContent:'center',
        flexDirection:'column',
        borderRadius:wp('10%'),
        width:wp('80%')
    },
    courseTitleContainer:{
      marginTop:wp('2%'),
      marginLeft:wp('3%'),
      marginRight:wp('3%')
    },
    courseTitleText:{
     fontWeight:'bold',
     fontSize:16,
    },
    courseDetailsRow:{
        flexDirection:'row',

    },
    courseAuthor:{
      flex:1,
      flexDirection:'row',
      marginLeft:wp('3%'),
      marginTop:wp('1.5%'),
    },
    courseAuthorText:{
      fontWeight:'bold',
      fontSize:12,
      color:'#555555'
    },
    feedbackRow:{
        marginTop:wp('1.5%'),
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    courseFeedbackRating:{

    },
    courseRatingValue:{
        marginLeft:2,
        fontWeight:'semibold',
        color: '#555555'
    },
    courseEnrolledValue:{
       color: '#555555',
       fontWeight:'semibold'
    },
    CoursePrice:{
        marginTop:wp('1.5%'),
        marginLeft:wp('3%'),
        flexDirection:'row',
        flex:1,
    },
    CoursePriceText:{
      fontWeight:'bold',
      fontSize:18,
      color:'#5477fb'
    },
    CourseMRP:{
        fontSize:14,
        margin:3,
        color:'#555555',
        fontWeight:'semibold',
        textDecorationLine:'line-through'
    },
    courseBottom:{
        flexDirection:'row'
    },
    CourseEnrollButton:{
      flex:1,
      flexDirection:'row',
      marginTop:wp('1.5%'),
      justifyContent:'flex-end',
      alignItems:'center',
     
    },
    enrollText:{
        fontSize:10,
        fontWeight:'bold',
        color:'#fff',
        padding:wp('1.2%'),
        
    },
    enrollButton:{
       justifyContent:'flex-end',
       backgroundColor:'#5477fb',
       marginRight:wp('2.5%'),
       borderRadius:wp('15%'),
    },
    tutorCourseTitle:{
      fontWeight:'bold',
      fontSize:wp('5%')
    },
    tutorImageContainer:{
        flexDirection:'row',
        flex:1,
    },
    tutorDurationRow:{
        flexDirection:'row',
    },
    subjectContainer:{
        marginTop:wp('1.5%'),
      backgroundColor:'#5477fb',

      padding:4,
      borderRadius:5
    },
    tutorSubjectText:{
        
        
        color:'#fff',
     
       
    },
    durationContainer:{
        marginTop:wp('1.5%'),
        backgroundColor:'#5477fb',
        marginLeft:3,
        padding:4,
        borderRadius:5
    },
    tutorDurationText:{
        color:'#fff',
    },
    coursePriceRow:{
        flexDirection:'row'
    },
    priceSection:{
     flex:1,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     marginTop:wp('3.5%'),
    },
    coursePriceValue:{
      fontSize:20,
      fontWeight:'bold',
      color:'#5477fb'
    },
    courseMRP:{
        marginTop:wp('1%'),
        marginLeft:3,
        textDecorationLine:'line-through'
    }
});

export default HomeScreen;
