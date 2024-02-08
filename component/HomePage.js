import React from 'react';
import { Text, View, Pressable, ScrollView, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

//This is used to signin using gmail
GoogleSignin.configure({
  webClientId: '307737501582-t1s2gesc75j13981h8u1mo0593c6ti7n.apps.googleusercontent.com',
});

const HomePage = () => {
  const navigation = useNavigation();

  return (

    // #18497a
    

    <ScrollView style={{ backgroundColor: '#18497a' }}>
      
      <View style={styles.headContainer}>
       <Image style={{height:250,width:250}}source={require('../assests/logopng.png')}/> 

        <View style={[styles.touchableOpacityView, styles.first]}>
       
            <TouchableOpacity onPress={() => navigation.navigate(SignInPage)}>
            <Text style={styles.teext}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.touchableOpacityView, styles.second]}>
          <TouchableOpacity onPress={() => navigation.navigate(SignUpPage)}>
            <Text style={styles.teext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

</ScrollView>

  );
};

export default HomePage;

const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:120
  },
  touchableOpacityView: {
    // backgroundColor: 'red',
    borderRadius: 15,
    height: 50,
    width: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideTouchableOpacity: {},
  touchableOpacityText: {},
  teext: {
    // fontFamily:'',
    // fontWeight:'bold',
    // fontSize:'20'
  },
  first: {
    marginTop: 200,
    backgroundColor: '#0881a6',
  },
  second: {
    marginTop: 40,
    backgroundColor: '#0881a6',
  },
});
