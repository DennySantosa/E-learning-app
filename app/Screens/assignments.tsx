import { StyleSheet, Text, TouchableOpacity, View,Image, ScrollView, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'
import TabButtons, { TabButtonType } from '@/components/tabButtons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export enum CustomTab {
    Tab1,
    Tab2
}
const UploadAssignment = () => {
    return (
      <ScrollView style={{marginTop:10,margin:wp('2%')}}>
        <Text style={{ fontSize: 18, color: "grey", position: "absolute", top: 20, left: 20, zIndex: 1 }}>
          Description
        </Text>
        <TextInput style={styles.descriptionInput}>
  
        </TextInput>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "96%" }}>
          <Text style={{ fontSize: 16, color: "gray" }}>
            Attach Files
          </Text>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>upload</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.fileList}>
          <View style={styles.fileItem}>
            <Text style={styles.fileName}>1. Assignment.pdf</Text>
            <TouchableOpacity>
              <Text style={styles.deleteButton}>🗑️</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  const DownloadAssignment = () => {
    return (
      <ScrollView style={{marginTop:10,margin:wp('2%')}}>
        <Text style={styles.introduction}>Introduction</Text>
        <Text style={{ fontSize: 17, color: "grey" }}>
          Kindly make sure that you have read all the
          question carefully.Download the assignment
          and upload the it will the ansers.
        </Text>
        <View style={{ paddingTop:hp('10%') }}>
          <TouchableOpacity style={styles.downloadbutton}>
            <Text style={styles.downloadtext}>Download</Text>
          </TouchableOpacity>
        </View>
  
  
      </ScrollView>
    );
  };
  
  

const assignments:React.FC = () => {

    const[selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);
    const buttons:TabButtonType[] = [
        {title:'Download' }, {title:'Upload' }
        
    ];
    const router = useRouter();
  return (
   
    <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity onPress={()=>router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Assignments</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.assignmentContainer}>
         <View style={{flex:1.3, flexDirection:'row'}}>
        <Image style={styles.image} source={require('../../assets/images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg') } />
       
        </View>
        <View style={{flexDirection:'row', flex:2,}}>
        <View style={{flexDirection:'column', justifyContent:'center',}}>
          <Text style={{fontWeight:'bold', marginBottom:10, fontSize:16}}>Computer Science HTML</Text>
          <Text style={styles.submissionDate}>Submission Date: </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>12/06/2024</Text>
          </View>
        </View>
      </View>
        
      <TabButtons buttons={buttons}  selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      {selectedTab === CustomTab.Tab1 ? DownloadAssignment():UploadAssignment()}
    </View>
 
  )
}
  const styles = StyleSheet.create({
    container:{
    marginTop:60,
     margin:wp('3%'),
     flex:1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10,
        marginLeft:wp('3%'),
        marginRight:wp('3%'),
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      introduction: {
        fontSize: 20,
        color: "#335ff6",
        paddingBottom: 20
      },
     
      image: {
       width:wp('30%'),
       height:wp('30%'),
        borderRadius: 25,
        marginRight: 20,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      submissionDate: {
        fontSize: 14,
        color: '#888',
      },
      descriptionInput: {
        height: 200,
        borderColor: '#dadeeb',
        borderWidth: 1,
        display: "flex",
        borderRadius: 30,
        padding: 10,
        marginBottom: 20,
        backgroundColor: "#eff3ff"
      },
      uploadButton: {
        zIndex: 1,
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 20,
        width: 120,
      },
      uploadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold"
      },
      fileList: {
        marginBottom: 20,
      },
      fileItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eff3ff',
        borderRadius: 10,
        marginBottom: 30,
      },
      fileName: {
        fontSize: 16,
      },
      deleteButton: {
        color: '#888',
      },
      submitButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
      },
      submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold"
      },
      downloadbutton: {
        backgroundColor: "#3352f8",
        borderRadius: 25,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 55,
      },
      downloadtext: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
      },
      assignmentContainer:{
        margin:wp('5%'),
        flexDirection:'row',
        justifyContent:'flex-start'
      }

  })

export default assignments

