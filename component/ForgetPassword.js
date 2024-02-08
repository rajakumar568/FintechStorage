import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { useState } from 'react';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/storage';


const ForgetPassword = () => {
  const [Email, setEmail] = useState('');
  const navigation = useNavigation();


  //firebase.auth().signOut();

  const pressHere = () => {
    firebase.auth().sendPasswordResetEmail(Email)
      .then(() => {
        alert("password reset email sent")
      })
      .catch((error) => {
        alert(error)
      })
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#0881a6',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <TextInput
        style={styles.input}
        placeholder='Enter Your E-mail'
        keyboardType='email-address'
        autoCapitalize='none'
        onChangeText={(text) => setEmail(text)}
        value={Email}
      />
      <TouchableOpacity onPress={pressHere} style={styles.bttn} >
        <Text>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=>{navigation.goBack()}} style={styles.bttn2} >
        <Text>Already have password, Sign In</Text>
      </TouchableOpacity>


    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  input: {

    height: 50, width: 300, backgroundColor: '#3daae0', borderRadius: 15, marginTop: 100,
    borderColor: 'gray',

  },
  bttn: {
    marginTop: 40,
    height: 50,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2cd4d4',
    borderRadius:15
  },
  bttn2: {
    marginTop:100

  }
})

