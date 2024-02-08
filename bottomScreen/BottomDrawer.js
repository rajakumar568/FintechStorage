import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UploadFile from './UploadFile';
import DownloadFile from './DownloadFile';
import DrawerAnimation from '../drawer/DrawerAnimation';
import { Image } from 'react-native';


const Bottom=createBottomTabNavigator();
const BottomDrawer = () => {
  return (

    <Bottom.Navigator drawerContent={props=><DrawerAnimation{...props}/>}>
        <Bottom.Screen name='UploadFile' component={UploadFile} options={{headerShown:false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../assests/upload.png')} // Adjust the path to your PNG image
            style={{ width: 24, height: 24, tintColor: focused ? '#007AFF' : '#999999' }}
          />
        ),}} />
        

        <Bottom.Screen name='DownloadFile' component={DownloadFile} options={{ headerShown:false,
           tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assests/download.png')} // Adjust the path to your PNG image
              style={{ width: 24, height: 24, tintColor: focused ? '#007AFF' : '#999999' }}
            />
          ),
        }}/>
    </Bottom.Navigator>
   
  )
}

export default BottomDrawer

const styles = StyleSheet.create({})