import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const AskQuestion: React.FC = () => {
    const router = useRouter();
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Ask Question</Text>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.uploadContainer}>
                <View style={styles.uploadBox}>
                    <Image
                        source={require('../../../assets/icons/file-upload-outline.png')} // Replace with your upload icon path
                        style={styles.uploadIcon}
                    />
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

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 16,
        paddingTop:50,
        marginBottom:50,
        paddingBottom:150,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    uploadContainer: {
        marginBottom: 20,
    },
    uploadBox: {
        height: 300,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    askButtonText: {
        fontSize: 16,
        color: '#fff',
    },
});

export default AskQuestion;
