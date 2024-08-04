import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp, widthPercentageToDP as dp } from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';


interface Course {
    id: string;
    title: string;
    duration: string;
    progress: string;
    total: string;
    image: any;
}

const ongoingCourses: Course[] = [
    { id: '1', title: 'Reproduction Biology (8th)', duration: '3 hrs 15 mins', progress: '73', total: '146', image: require("../../../assets/images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg") },
    { id: '2', title: 'HTML Computer Science (8th)', duration: '3 hrs 15 mins', progress: '73', total: '146', image: require('../../../assets/images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg') },
];

const completedCourses: Course[] = [
    { id: '1', title: 'Maths Full Syllabus (8th)', duration: '2 hrs 25 mins', progress: '178', total: '178', image: require('../../../assets/images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg') },
    { id: '2', title: 'Science Full Syllabus (8th)', duration: '3 hrs 20 mins', progress: '178', total: '178', image: require('../../../assets/images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg') },
    { id: '3', title: 'English Full Syllabus (8th)', duration: '2 hrs 25 mins', progress: '178', total: '178', image: require('../../../assets/images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg') },
];

const MyCourses: React.FC = () => {
    const [showCompleted, setShowCompleted] = useState(false);

    const router = useRouter();

    const renderCourse = ({ item }: { item: Course }) => (
        <TouchableOpacity onPress={()=> router.navigate('../../Screens/lessons')}  style={styles.courseContainer}>
            <Image source={item.image} style={styles.courseIcon} />
            <View style={styles.courseDetails}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <Text style={styles.courseDuration}>{item.duration}</Text>
                <View style={styles.progressContainer}>
                    <View style={[styles.progressBar, { width: `${(parseInt(item.progress) / parseInt(item.total)) * 100}%` }]} />
                    <Text style={styles.progressText}>{item.progress} / {item.total}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        
        <View style={styles.container}>
            <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 20 }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "90%", justifyContent: "space-between", paddingTop: 5 }}>
                   <FontAwesome onPress={()=>router.back()} name="arrow-left"  size={20} style={{width:50}}></FontAwesome>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        My courses
                    </Text>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 7 }}>
                        <Image
                            resizeMode='stretch'
                            style={{ width: 20, height: 20 }}
                            source={require('../../../assets/icons/search.png')}
                        />
                        <Image
                            resizeMode='stretch'
                            style={{ width: 32, height: 32 }}
                            source={require('../../../assets/icons/more-information.png')}
                        />
                    </View>
                </View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setShowCompleted(false)} style={[styles.button, !showCompleted && styles.activeButton]}>
                        <Text style={styles.buttonText}>Ongoing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowCompleted(true)} style={[styles.button, showCompleted && styles.activeButton]}>
                        <Text style={styles.buttonText}>Completed</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={showCompleted ? completedCourses : ongoingCourses}
                keyExtractor={(item) => item.id}
                renderItem={renderCourse}
            />
        </View>
       
    );
};

const styles = StyleSheet.create({
    container: {
        height:hp('100%'),
        padding: 16,
        backgroundColor: '#fff',
        paddingTop:50,
    },
    header: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    button: {
        color:"yellow",
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    activeButton: {
        borderBottomWidth: 2,
        borderBottomColor: '#007bff',
    },
    buttonText: {
        fontSize: 16,
        color: '#007bff',
    },
    courseContainer: {
        flexDirection: 'row',
        padding: 26,
        backgroundColor: '#f9f9f9',
        marginBottom: 8,
        borderRadius: 8,
        elevation:4,
        shadowOffset:{
            width:1,
            height:1,
        }
        
    },
    courseIcon: {
        width: 90,
        height: 90,
        borderRadius: 20,
        marginRight: 16
    },
    courseDetails: {
        flex: 1
    },
    courseTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    courseDuration: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    progressBar: {
        height: 6,
        backgroundColor: '#fbd333',
        borderRadius: 2.5,
        flex: 1
    },
    progressText: {
        fontSize: 12,
        color: '#666',
        marginLeft: 8,
    },
});

export default MyCourses;
