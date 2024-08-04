import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Platform } from 'react-native';
import React, { useState } from 'react';
import TabButtons, { TabButtonType } from '@/components/tabButtons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export enum CustomTab {
    Tab1,
    Tab2
}

const UpcomingClasses = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={{ gap: 20 }}>
                <View style={styles.classCard}>
                    <View style={styles.classRow}>
                        <View style={styles.classImageContainer}>
                            <Image source={require('../../assets/images/courses/course3.jpeg')} style={styles.classImage} />
                        </View>
                        <View style={styles.ClassColumn}>
                            <View style={styles.languageContainer}>
                                <View style={styles.languageBadge}>
                                    <Text style={styles.languageText}>English</Text>
                                </View>
                                <View style={styles.languageBadge}>
                                    <Text style={styles.languageText}>Hindi</Text>
                                </View>
                            </View>
                            <View style={styles.classInfo}>
                                <FontAwesome name="calendar" size={21} />
                                <Text style={styles.classInfoText}>24-June-2024</Text>
                            </View>
                            <View style={styles.classInfo}>
                                <FontAwesome name="clock-o" size={21} />
                                <Text style={styles.classInfoText}>8:00 PM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.classCardBottomBar}>
                        <View style={styles.instructorContainer}>
                            <Image source={require('../../assets/images/users/user1.jpeg')} style={styles.instructorImage} />
                            <View style={styles.instructorInfo}>
                                <Text style={styles.instructorName}>Rohini Sharma</Text>
                                <Text style={styles.instructorRole}>Instructor</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.detailsButton}>
                            <Text style={styles.detailsButtonText}>See Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Repeat the above Class Card for more classes */}
                <View style={styles.classCard}>
                    <View style={styles.classRow}>
                        <View style={styles.classImageContainer}>
                            <Image source={require('../../assets/images/courses/course3.jpeg')} style={styles.classImage} />
                        </View>
                        <View style={styles.ClassColumn}>
                            <View style={styles.languageContainer}>
                                <View style={styles.languageBadge}>
                                    <Text style={styles.languageText}>English</Text>
                                </View>
                                <View style={styles.languageBadge}>
                                    <Text style={styles.languageText}>Hindi</Text>
                                </View>
                            </View>
                            <View style={styles.classInfo}>
                                <FontAwesome name="calendar" size={21} />
                                <Text style={styles.classInfoText}>24-June-2024</Text>
                            </View>
                            <View style={styles.classInfo}>
                                <FontAwesome name="clock-o" size={21} />
                                <Text style={styles.classInfoText}>8:00 PM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.classCardBottomBar}>
                        <View style={styles.instructorContainer}>
                            <Image source={require('../../assets/images/users/user1.jpeg')} style={styles.instructorImage} />
                            <View style={styles.instructorInfo}>
                                <Text style={styles.instructorName}>Rohini Sharma</Text>
                                <Text style={styles.instructorRole}>Instructor</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.detailsButton}>
                            <Text style={styles.detailsButtonText}>See Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.classCard}>
                    <View style={styles.classRow}>
                        <View style={styles.classImageContainer}>
                            <Image source={require('../../assets/images/courses/course3.jpeg')} style={styles.classImage} />
                        </View>
                        <View style={styles.ClassColumn}>
                            <View style={styles.languageContainer}>
                                <View style={styles.languageBadge}>
                                    <Text style={styles.languageText}>English</Text>
                                </View>
                                <View style={styles.languageBadge}>
                                    <Text style={styles.languageText}>Hindi</Text>
                                </View>
                            </View>
                            <View style={styles.classInfo}>
                                <FontAwesome name="calendar" size={21} />
                                <Text style={styles.classInfoText}>24-June-2024</Text>
                            </View>
                            <View style={styles.classInfo}>
                                <FontAwesome name="clock-o" size={21} />
                                <Text style={styles.classInfoText}>8:00 PM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.classCardBottomBar}>
                        <View style={styles.instructorContainer}>
                            <Image source={require('../../assets/images/users/user1.jpeg')} style={styles.instructorImage} />
                            <View style={styles.instructorInfo}>
                                <Text style={styles.instructorName}>Rohini Sharma</Text>
                                <Text style={styles.instructorRole}>Instructor</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.detailsButton}>
                            <Text style={styles.detailsButtonText}>See Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.classCard}>
                    <View style={styles.classRow}>
                        <View style={styles.classImageContainer}>
                            <Image source={require('../../assets/images/courses/course3.jpeg')} style={styles.classImage} />
                        </View>
                        <View style={styles.ClassColumn}>
                            <View style={styles.languageContainer}>
                                <View style={styles.languageBadge}>
                                    <Text style={styles.languageText}>English</Text>
                                </View>
                                <View style={styles.languageBadge}>
                                    <Text style={styles.languageText}>Hindi</Text>
                                </View>
                            </View>
                            <View style={styles.classInfo}>
                                <FontAwesome name="calendar" size={21} />
                                <Text style={styles.classInfoText}>24-June-2024</Text>
                            </View>
                            <View style={styles.classInfo}>
                                <FontAwesome name="clock-o" size={21} />
                                <Text style={styles.classInfoText}>8:00 PM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.classCardBottomBar}>
                        <View style={styles.instructorContainer}>
                            <Image source={require('../../assets/images/users/user1.jpeg')} style={styles.instructorImage} />
                            <View style={styles.instructorInfo}>
                                <Text style={styles.instructorName}>Rohini Sharma</Text>
                                <Text style={styles.instructorRole}>Instructor</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.detailsButton}>
                            <Text style={styles.detailsButtonText}>See Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const Completed = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={{ gap: 20 }}>
                <View style={styles.classCard}>
                    <View style={styles.classRow}>
                        <View style={styles.classImageContainer}>
                            <Image source={require('../../assets/images/courses/course3.jpeg')} style={styles.classImage} />
                        </View>
                        <View style={styles.ClassColumn}>
                            <View style={styles.languageContainer}>
                                <View style={styles.languageBadge}>
                                    <Text style={styles.languageText}>English</Text>
                                </View>
                                <View style={styles.languageBadge}>
                                    <Text style={styles.languageText}>Hindi</Text>
                                </View>
                            </View>
                            <View style={styles.classInfo}>
                                <FontAwesome name="calendar" size={21} />
                                <Text style={styles.classInfoText}>24-June-2024</Text>
                            </View>
                            <View style={styles.classInfo}>
                                <FontAwesome name="clock-o" size={21} />
                                <Text style={styles.classInfoText}>8:00 PM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.classCardBottomBar}>
                        <View style={styles.instructorContainer}>
                            <Image source={require('../../assets/images/users/user1.jpeg')} style={styles.instructorImage} />
                            <View style={styles.instructorInfo}>
                                <Text style={styles.instructorName}>Rohini Sharma</Text>
                                <Text style={styles.instructorRole}>Instructor</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.completedButton}>
                            <Text style={styles.completedButtonText}>COMPLETED</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Repeat the above Class Card for more classes */}
            </View>
        </ScrollView>
    );
};

const MyClasses: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);
    const buttons: TabButtonType[] = [
        { title: 'Upcoming' }, { title: 'Completed' }
    ];
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Classes</Text>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <TabButtons buttons={buttons} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {selectedTab === CustomTab.Tab1 ? <UpcomingClasses /> : <Completed />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:50,
        backgroundColor: '#f8f8f8',
        marginHorizontal: wp('3%'),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    scrollViewContent: {
        paddingBottom: hp('10%'),
    },
    classCard: {
        flexDirection: 'column',
        marginVertical: wp('2%'),
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#808080',
        shadowRadius: 1,
        shadowOpacity: 0.5,
    },
    classRow: {
        flexDirection: 'row',
    },
    classImageContainer: {
        margin: 10,
    },
    classImage: {
        width: wp('25%'),
        height: wp('30%'),
        borderRadius: 12,
    },
    ClassColumn: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
    },
    languageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    languageBadge: {
        backgroundColor: 'orange',
        padding: 4,
        borderRadius: 7,
        margin: 3,
    },
    languageText: {
        color: '#fff',
    },
    classInfo: {
        flexDirection: 'row',
        marginTop: wp('3.5%'),
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    classInfoText: {
        marginLeft: 5,
    },
    classCardBottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: wp('2%'),
    },
    instructorContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    instructorImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    instructorInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 3,
    },
    instructorName: {
        fontWeight: 'bold',
    },
    instructorRole: {
        fontSize: 8,
        fontWeight: 'bold',
    },
    detailsButton: {
        backgroundColor: '#5477fb',
        padding: 6,
        borderRadius: 15,
    },
    detailsButtonText: {
        color: '#fff',
    },
    completedButton: {
        padding: 6,
        borderRadius: 15,
    },
    completedButtonText: {
        color: '#5477fb',
    },
});

export default MyClasses;
