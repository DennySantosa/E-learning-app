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

const MyDoubts = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={{ gap: 20 }}>
                <View style={styles.doubtsCard}>
                    <View style={styles.doubtsCardImageContainer}>
                        <Image source={require('../../assets/images/users/user2.jpeg')} style={{ borderRadius: 50, width: 60, height: 60 }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontWeight: '600' }}>Rahul Kukreja</Text>
                            <Text>B.ED in Mathematics</Text>
                        </View>
                    </View>
                    <View style={{ margin: wp('2%') }}>
                        <Text style={{ fontWeight: '600' }}>What is a quadrilateral and how can we use the formulas of quadrilaterals?</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="calendar" size={15} />
                            <Text style={{ marginLeft: 3 }}>15th June 2024</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="paperclip" size={18} />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>3</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="circle" size={12} color="orange" />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>open</Text>
                        </View>
                    </View>
                </View>
                {/* Repeat the above Card for more doubts */}
                <View style={styles.doubtsCard}>
                    <View style={styles.doubtsCardImageContainer}>
                        <Image source={require('../../assets/images/users/user2.jpeg')} style={{ borderRadius: 50, width: 60, height: 60 }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontWeight: '600' }}>Rahul Kukreja</Text>
                            <Text>B.ED in Mathematics</Text>
                        </View>
                    </View>
                    <View style={{ margin: wp('2%') }}>
                        <Text style={{ fontWeight: '600' }}>What is a quadrilateral and how can we use the formulas of quadrilaterals?</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="calendar" size={15} />
                            <Text style={{ marginLeft: 3 }}>15th June 2024</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="paperclip" size={18} />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>3</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="circle" size={12} color="orange" />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>open</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.doubtsCard}>
                    <View style={styles.doubtsCardImageContainer}>
                        <Image source={require('../../assets/images/users/user2.jpeg')} style={{ borderRadius: 50, width: 60, height: 60 }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontWeight: '600' }}>Rahul Kukreja</Text>
                            <Text>B.ED in Mathematics</Text>
                        </View>
                    </View>
                    <View style={{ margin: wp('2%') }}>
                        <Text style={{ fontWeight: '600' }}>What is a quadrilateral and how can we use the formulas of quadrilaterals?</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="calendar" size={15} />
                            <Text style={{ marginLeft: 3 }}>15th June 2024</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="paperclip" size={18} />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>3</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="circle" size={12} color="orange" />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>open</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.doubtsCard}>
                    <View style={styles.doubtsCardImageContainer}>
                        <Image source={require('../../assets/images/users/user2.jpeg')} style={{ borderRadius: 50, width: 60, height: 60 }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontWeight: '600' }}>Rahul Kukreja</Text>
                            <Text>B.ED in Mathematics</Text>
                        </View>
                    </View>
                    <View style={{ margin: wp('2%') }}>
                        <Text style={{ fontWeight: '600' }}>What is a quadrilateral and how can we use the formulas of quadrilaterals?</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="calendar" size={15} />
                            <Text style={{ marginLeft: 3 }}>15th June 2024</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="paperclip" size={18} />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>3</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="circle" size={12} color="orange" />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>open</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.doubtsCard}>
                    <View style={styles.doubtsCardImageContainer}>
                        <Image source={require('../../assets/images/users/user2.jpeg')} style={{ borderRadius: 50, width: 60, height: 60 }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontWeight: '600' }}>Rahul Kukreja</Text>
                            <Text>B.ED in Mathematics</Text>
                        </View>
                    </View>
                    <View style={{ margin: wp('2%') }}>
                        <Text style={{ fontWeight: '600' }}>What is a quadrilateral and how can we use the formulas of quadrilaterals?</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="calendar" size={15} />
                            <Text style={{ marginLeft: 3 }}>15th June 2024</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="paperclip" size={18} />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>3</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="circle" size={12} color="orange" />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>open</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.doubtsCard}>
                    <View style={styles.doubtsCardImageContainer}>
                        <Image source={require('../../assets/images/users/user2.jpeg')} style={{ borderRadius: 50, width: 60, height: 60 }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontWeight: '600' }}>Rahul Kukreja</Text>
                            <Text>B.ED in Mathematics</Text>
                        </View>
                    </View>
                    <View style={{ margin: wp('2%') }}>
                        <Text style={{ fontWeight: '600' }}>What is a quadrilateral and how can we use the formulas of quadrilaterals?</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="calendar" size={15} />
                            <Text style={{ marginLeft: 3 }}>15th June 2024</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="paperclip" size={18} />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>3</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="circle" size={12} color="orange" />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>open</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.doubtsCard}>
                    <View style={styles.doubtsCardImageContainer}>
                        <Image source={require('../../assets/images/users/user2.jpeg')} style={{ borderRadius: 50, width: 60, height: 60 }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                            <Text style={{ fontWeight: '600' }}>Rahul Kukreja</Text>
                            <Text>B.ED in Mathematics</Text>
                        </View>
                    </View>
                    <View style={{ margin: wp('2%') }}>
                        <Text style={{ fontWeight: '600' }}>What is a quadrilateral and how can we use the formulas of quadrilaterals?</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="calendar" size={15} />
                            <Text style={{ marginLeft: 3 }}>15th June 2024</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name="paperclip" size={18} />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>3</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="circle" size={12} color="orange" />
                            <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>open</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const RaiseDoubt = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.uploadContainer}>
                <View style={styles.uploadBox}>
                    <Image source={require('../../assets/icons/file-upload-outline.png')} style={styles.uploadIcon} />
                    <Text style={styles.uploadText}>Upload File Here</Text>
                    <Text style={styles.orText}>--OR--</Text>
                    <TouchableOpacity style={styles.takePictureButton}>
                        <Ionicons name="camera-outline" size={20} color="white" style={styles.cameraIcon} />
                        <Text style={styles.takePictureText}>Take Picture</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.dropdownText}>Select Class</Text>
                <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.dropdownText}>Select Subject</Text>
                <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.dropdownText}>Select Issue</Text>
                <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.dropdownText}>Select Topic</Text>
                <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.askButton}>
                <Text style={styles.askButtonText}>ASK QUESTION</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const MyDoubtsScreen: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);
    const buttons: TabButtonType[] = [
        { title: 'My Doubts' }, { title: 'Raise' }
    ];
    const router = useRouter();

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Doubts</Text>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <TabButtons buttons={buttons} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            {selectedTab === CustomTab.Tab1 ? <MyDoubts /> : <RaiseDoubt />}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#f8f8f8',
    },
    container: {
        margin: wp('3%'),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: wp('3%'),
        marginRight: wp('3%'),
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    scrollViewContent: {
        paddingBottom: hp('10%'),
        paddingHorizontal: wp('3%'),
    },
    doubtsCard: {
        margin: wp('2%'),
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#808080',
        shadowRadius: 5,
        shadowOpacity: 0.7,
    },
    doubtsCardImageContainer: {
        flexDirection: 'row',
    },
    uploadContainer: {
        marginBottom: 16,
        marginTop: 15,
    },
    uploadBox: {
        height: 300,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        justifyContent: "center",
    },
    uploadIcon: {
        width: 40,
        height: 40,
        marginBottom: 8,
    },
    uploadText: {
        fontSize: 16,
        marginBottom: 8,
    },
    orText: {
        fontSize: 16,
        marginBottom: 8,
    },
    takePictureButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 8,
        borderRadius: 8,
    },
    cameraIcon: {
        width: 20,
        height: 20,
        tintColor: '#fff',
        marginRight: 8,
    },
    takePictureText: {
        fontSize: 16,
        color: '#fff',
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    dropdownText: {
        fontSize: 16,
    },
    dropdownIcon: {
        fontSize: 16,
    },
    askButton: {
        backgroundColor: '#007bff',
        padding: 16,
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: wp('50%'),
    },
    askButtonText: {
        fontSize: 16,
        color: '#fff',
    },
});

export default MyDoubtsScreen;
