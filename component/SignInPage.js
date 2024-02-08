// import React, { useState } from 'react';
// import { Text, TextInput, View, TouchableOpacity, ScrollView, Pressable, StyleSheet, useEffect, KeyboardAvoidingView } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import SignUpPage from './SignUpPage';
// import Dashboard from '../drawer/Dashboard';
// import DrawerNavigator from '../drawer/DrawerNavigator';


// import auth from '@react-native-firebase/auth';

// import { GoogleSignin } from '@react-native-google-signin/google-signin';



// //This is used to signin using gmail
// GoogleSignin.configure({
//   webClientId: '307737501582-t1s2gesc75j13981h8u1mo0593c6ti7n.apps.googleusercontent.com',
// });



// const SignInPage = () => {
//   const navigation = useNavigation();


//   const [profileImage, setProfileimage] = useState('');


//   //This will store the output of the authentication

//   // useEffect(()=>
//   // {GoogleSignin.configure();},
//   // []);

//   const signInWithGoogle = async () => {
//     try {
//       const userData = await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//       await GoogleSignin.signOut();
//       const { idToken } = await GoogleSignin.signIn();
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//       auth().signInWithCredential(googleCredential);
//       console.log(userData);
//       navigation.navigate(DrawerNavigator);
//     } catch (error) {
//       console.log(error);
//     }
//   };



//   const registerWithEmail = async () => {
//     try {
//       const userValue = await auth().createUserWithEmailAndPassword(Email, Password)
//       console.log(userValue);
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   // const signInWithEmail = async () => {
//   //   try {
//   //     const userValue = await auth().signInWithEmailAndPassword(Email, Password);
//   //     // User signed in successfully

//   //     navigation.navigate(DrawerNavigator );
//   //     console.log('User signed in:', userValue.user);
//   //   } catch (error) {
//   //     // Handle errors during sign-in
//   //     console.error('Sign-in error:', error.code, error.message);
//   //     Alert.alert('Sign-in Error', 'Invalid email or password. Please try again.');
//   //   }
//   // };

//   const signInWithEmail = async () => {
//     try {
//       await auth().signInWithEmailAndPassword(Email, Password);
//       console.log('User signed in successfully!');
//       navigation.navigate(DrawerNavigator);
//     } catch (error) {
//       console.error('Error signing in:', error.message);
//     }
//   };

//   const [Email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");
//   const [showPass, Pass] = useState(false);
//   const [buttonPressed, setButtonPressed] = useState(false);
//   const [display, setDisplay] = useState(false);


//   //This functin will reset both the container using useState
//   const reset = () => {
//     setEmail("");
//     setPassword("");
//   };

//   const Show = () => {
//     Pass(!showPass);
//   };

//   const handleButtonPress = () => {
//     setDisplay(true);
//     setButtonPressed(true);

//     setTimeout(() => {
//       setButtonPressed(false);
//       setDisplay(false);
//     }, 1200);
//   };

//   const signedIn = () => {
//     console.log("Signed in");
//   };

//   return (
//     <KeyboardAvoidingView behavior='padding'>
//       <ScrollView style={styles.container}>
//       <View style={styles.headContainer}>
//         <View style={styles.firstContainer}>
//           <Text style={styles.firstContainerText}>Welcome Back !</Text>
//         </View>
//         <View style={styles.secondContainer}>
//           <Text style={styles.secondContainerText}>Login to your account</Text>
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder='Enter E-mail'
//             keyboardType='email-address'
//             autoCapitalize='none'
//             onChangeText={(text) => setEmail(text)}
//             value={Email}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder='Enter Password'
//             onChangeText={(text) => setPassword(text)}
//             value={Password}
//             secureTextEntry={!showPass}
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Pressable onPress={Show} disabled={buttonPressed} style={styles.showHideButton}>
//             <Text style={styles.buttonText}>Show / Hide password</Text>
//           </Pressable>
//           <Pressable onPress={registerWithEmail} disabled={buttonPressed} style={styles.resetButton}>
//             <Text style={styles.buttonText}>Reset Data</Text>
//           </Pressable>

//         </View>
//         <View style={styles.signInButton}>
//           <Pressable style={styles.bttnStyle} onPress={signInWithEmail}>
//             <Text style={styles.signInText} >Sign In</Text>
//           </Pressable>
//         </View>
//         <View style={styles.socialButtonsContainer}>
//           <TouchableOpacity style={[styles.socialButton, styles.bttnStyle]} onPress={signInWithGoogle}>
//             <Text style={styles.socialButtonText}>Sign in using Google</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.signUpContainer}>
//           <TouchableOpacity style={[styles.signUpButton, styles.bttnStyle]} onPress={() => navigation.navigate(SignUpPage)}>
//             <Text>Don't have an account? Sign Up</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   loginButton: {
//     flex: 1,
//     // backgroundColor: '#313635',
//     backgroundColor: '#3498db',
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 10,
//     borderRadius: 15,
    
//   },
//   container: {
//     backgroundColor: '#313635',
//     height: '100%',
//   },
//   headContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 20,
//   },
//   firstContainer: {
//     marginBottom: 20,
//   },
//   firstContainerText: {
//     fontSize: 40,
//   },
//   secondContainer: {
//     marginBottom: 20,
//   },
//   secondContainerText: {
//     fontSize: 25,
//   },
//   inputContainer: {
//     width: '100%',
//     marginVertical: 20,
//   },
//   input: {
//     fontSize: 20,
//     borderWidth: 1,
//     borderColor: 'gray',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//     paddingLeft: 20
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   showHideButton: {
//     flex: 1,
//     marginRight: 10,
//     borderRadius: 15,
//     backgroundColor: '#74B9FF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   resetButton: {
//     flex: 1,
//     backgroundColor: '#74B9FF',
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 15,
//   },
//   bttnStyle: {
//     borderRadius: 15
//   },
//   signInButton: {
//     height: 50,
//     width: '50%',
//     backgroundColor: '#487EB0',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: 25,

//   },
//   signInText: {
//     borderRadius: 10,
//     fontSize: 25,
//     // fontFamily:'100
//     // fontStyle:'bold'
//     fontWeight: 'bold',
//     color: 'black'
//     // borderWidth:
//   },

//   buttonText: {
//     color: 'white',
//   },
//   socialButtonsContainer: {
//     marginBottom: 20,
//   },
//   socialButton: {
//     marginTop: 15,
//     backgroundColor: '#25CCF7',
//     height: 55,
//     width: 250,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   socialButtonText: {
//     color: 'white',
//   },
//   signUpContainer: {
//     marginBottom: 20,
//   },
//   signUpButton: {
//     height: 45,
//     width: 250,
//     backgroundColor: '#2ecc72',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default SignInPage;


import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, Pressable, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import ForgetPassword from './ForgetPassword';


const SignInPage = () => {
  const navigation = useNavigation();

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
 
  const reset=()=>{
    setEmail('');
    setPassword('');
  }
  const toggleShowPass = () => {
    setShowPass(!showPass);
  };
    const signInWithGoogle = async () => {
    try {
      const userData = await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      await GoogleSignin.signOut();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      auth().signInWithCredential(googleCredential);
      console.log(userData);
      navigation.navigate('DrawerNavigator');
    } catch (error) {
      console.log(error);
    }
  };
//   const pressHere = () => {
//     firebase.auth().sendPasswordResetEmail(Email)
//         .then(() => {
//             alert("password reset email sent")
//         })
//         .catch((error) => {
//             alert(error)
//         })
// };
  

  const signInWithEmail = async () => {
    try {
      if (!Email || !Password) {
        Alert.alert('Empty Value', 'Please enter both email and password.');
        return;
      }
      await auth().signInWithEmailAndPassword(Email, Password);
      console.log('User signed in successfully!');
      navigation.navigate('DrawerNavigator');
      Alert.alert('Dashboard is launching');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        Alert.alert('User Not Found', 'Kindly sign up to create an account.');
      } else if (error.code === 'auth/invalid-credential') {
        Alert.alert('Invalid Credential', 'Please check your email and password and try again.');
      } else {
        console.error('Error signing in:', error.message);
      }
    }
  };
  
  

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome Back!</Text>
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Login to your account</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Enter Your E-mail'
              keyboardType='email-address'
              autoCapitalize='none'
              onChangeText={(text) => setEmail(text)}
              value={Email}
            />
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder='Enter Your Password'
                onChangeText={(text) => setPassword(text)}
                value={Password}
                secureTextEntry={!showPass}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={toggleShowPass}>
                <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} size={20} color='gray' />
              </TouchableOpacity>
            </View>


            <View style={styles.passwordResetContainer}>
              <TouchableOpacity style={styles.passwordResetContainer}onPress={()=>{navigation.navigate('ForgetPassword')}}>
                <Text style={{color:'white'}}>Forget password</Text>
              </TouchableOpacity>
            </View>


            
          </View>
          <View style={styles.buttonContainer}>
          <Pressable style={styles.resetButton} onPress={reset}>
              <Text style={styles.signInText}>Reset</Text>
            </Pressable>
            <Pressable style={styles.signInButton} onPress={signInWithEmail}>
              <Text style={styles.signInText}>Sign In</Text>
            </Pressable>
            
          </View>
          <View style={styles.lowerButton}>
          <View style={styles.socialButtonsContainer}>
            <Pressable onPress={signInWithGoogle}>
              <Text style={{color:'black'}}>Sign in using Google</Text>
            </Pressable>
          </View>
          <View style={styles.signUpContainer}>
            <TouchableOpacity  onPress={() => navigation.navigate('SignUpPage')}>
              <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0881a6',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  welcomeContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 40,
    color:'black'
  },
  loginContainer: {
    marginBottom: 20,
  },
  loginText: {
    fontSize: 20,
    color: 'black',
  },
  inputContainer: {
    width: '80%',
    marginVertical: 20,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    color: 'white',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    width:'110%',
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
  eyeIcon: {
    padding: 10,
  },
  passwordResetContainer:{

  },
  buttonContainer: {
    marginBottom: 20,
    // flex:4,
    flexDirection:'row',
    justifyContent:"space-between"
  },
  signInButton: {
    height: 45,
    width: '50%',
    backgroundColor: '#2ecc72',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  signInText: {
    fontSize: 20,
    color: 'black',
  },
  resetButton:{
     height: 45,
     width: '45%',
    backgroundColor: '#2ecc72',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  socialButtonsContainer: {
    marginBottom: 20,
    height:45,
    width:'80%',
    backgroundColor:'#25CCF7',
    alignSelf:"center",
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  signUpContainer: {
    marginBottom: 20,
    width:'80%',
    alignSelf:"center",
    alignContent:'center',
    alignItems:'center'

  },
  signUpButton: {
    height: 45,
    width: '100%',
    backgroundColor: '#2ecc72',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  signUpText: {
    // color: 'white',
  },
});

export default SignInPage;
