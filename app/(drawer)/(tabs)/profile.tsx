import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = React.useState(false);

    const handleLogout = () => {
        // Implement logout functionality here
        console.log('Logged out');
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Profile</Text>
                    <TouchableOpacity>
                        <Ionicons name="ellipsis-horizontal" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.profileSection}>
                    <Image
                        style={styles.profileImage}
                        source={require('../../../assets/images/users/user8.jpeg')} // Replace with actual image source
                    />
                    <Text style={styles.profileName}>Prashant Singh</Text>
                    <Text style={styles.profileEmail}>pranksngh@gmail.com</Text>
                </View>
                <View style={styles.optionsSection}>
                    <TouchableOpacity style={styles.option} >
                        <Ionicons name="person-outline" size={20} color="black" style={styles.profileIcon} />
                        <View style={styles.profile}>
                            <Text style={styles.optionText}>Edit Profile</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} >
                        <Ionicons name="notifications-outline" size={20} color="black" style={styles.profileIcon} />
                        <View style={styles.profile}>
                            <Text style={styles.optionText}>Notification</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Ionicons name="card-outline" size={20} color="black" style={styles.profileIcon} />
                        <View style={styles.profile}>
                            <Text style={styles.optionText}>Payment</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} >
                        <Ionicons name="shield-checkmark-outline" size={20} color="black" style={styles.profileIcon} />
                        <View style={styles.profile}>
                            <Text style={styles.optionText}>Security</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} >
                        <Ionicons name="albums-outline" size={20} color="black" style={styles.profileIcon} />
                        <View style={styles.profile}>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '92%' }}>
                                    <Text style={styles.optionText}>Language</Text>
                                    <View>
                                        <Text style={styles.optionText}>English (US)</Text>
                                    </View>
                                </View>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.option}>
                        <Ionicons name="eye-outline" size={20} color="black" style={styles.profileIcon} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '92%' }}>
                            <Text style={styles.optionText}>Dark Mode</Text>
                            <Switch
                                value={darkMode}
                                onValueChange={(value) => setDarkMode(value)}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.option} >
                        <Ionicons name="bag-outline" size={20} color="black" style={styles.profileIcon} />
                        <View style={styles.profile}>
                            <Text style={styles.optionText}>Privacy Policy</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} >
                        <Ionicons name="help-circle-outline" size={20} color="black" style={styles.profileIcon} />
                        <View style={styles.profile}>
                            <Text style={styles.optionText}>Help Center</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={handleLogout}>
                        <Ionicons name="log-out-outline" size={20} color="black" style={styles.profileIcon} />
                        <View style={styles.profile}>
                            <Text style={styles.optionText}>Logout</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 50, // Adjust paddingTop as per your design
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
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
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 80,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileEmail: {
        fontSize: 16,
        color: 'gray',
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '94%',
    },
    optionsSection: {
        marginBottom: 20,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    profileIcon: {
        marginRight: 10,
    },
    optionText: {
        fontSize: 16,
    },
});

export default ProfileScreen;
