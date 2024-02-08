// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';



// const SignUpPage = () => {


//   const [Fname, setFname] = useState("");
//   const [lName, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [cPassword, setCPassword] = useState("");

//   const reset = () => {
//     setFname("");
//     setLname("");
//     setEmail("");
//     setPassword("");
//     // setCPassword("");
//   };


//   const registerWithEmail=async(Email,Password,Fname,lName)=>{


//   };

//   return (




//     <View style={styles.headContainer}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.main}>
//         {/* <KeyboardAvoidingView behavior='padding'> */}

//         <View style={styles.welcome}>
//           <Text style={styles.welcomeOne}>Welcome !</Text>
//         </View>
//         <View style={styles.welcomeText}>
//           <Text style={styles.welcomeTextOne}>Sign up for the FinTech Authenticator</Text>
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder='Enter your first name'
//             autoCapitalize='none'
//             value={Fname}
//             onChangeText={(text) => setFname(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder='Enter your last name'
//             value={lName}
//             autoCapitalize='none'
//             onChangeText={(text) => setLname(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder='Enter your email'
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder='Enter Password'
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//             secureTextEntry={true}
//           />

//         </View>
//         <View style={styles.buttonContainer}>
//           <Pressable style={styles.reset} onPress={() => navigation.navigate(Dashboard)}>
//             <Text style={styles.teextPresable}>Sign Up</Text>
//           </Pressable>
//           <Pressable style={styles.resetOne} onPress={() => reset()}>
//             <Text style={styles.teextPresable}>Reset Data</Text>
//           </Pressable>
//         </View>
//         <View style={styles.allContainer}></View>

//       </KeyboardAvoidingView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//   },
//   main: {
//     flex: 1,
//     backgroundColor: '#313635',
//   },
//   headContainer: {
//     flex: 1,
//     backgroundColor: '#67E6DC',
//   },
//   welcome: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   welcomeOne: {
//     fontSize: 40,
//   },
//   welcomeText: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   welcomeTextOne: {
//     fontSize: 20,
//   },
//   inputContainer: {
//     flex: 6,
//     alignItems: 'center',
//   },
//   input: {
//     fontSize: 25,
//     width: '80%',
//     height: '14%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#6fecf2',
//     borderRadius: 15,
//     marginBottom: 10,
//     borderWidth: 1, // Set the width of the border
//     borderColor: 'black', // Set the color of the border
//     padding: 10,
//   },
//   buttonContainer: {
//     flex: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor:'black'
//   },
//   reset: {
//     backgroundColor: 'salmon',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 40,
//     width: '40%',
//     marginVertical: 10,
//   },
//   resetOne: {
//     backgroundColor: 'salmon',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 40,
//     width: '40%',
//     marginVertical: 10,
//   },
//   teextPresable: {},
// });

// export default SignUpPage;

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView ,TouchableOpacity} from 'react-native';
import Dashboard from '../drawer/Dashboard';
import DrawerNavigator from '../drawer/DrawerNavigator';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
// import { TouchableOpacity } from 'react-native-gesture-handler';




const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const registerWithEmail = async () => {
    try {
      const userValue = await auth().createUserWithEmailAndPassword(email, password)
      console.log(userValue);
      navigation.navigate('DrawerNavigator')
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('DrawerNavigator')
  };
  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    // setCPassword("");
  };



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>Welcome!</Text>
      </View>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Welcome to Fintech Storage</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your first Name"
          placeholderTextColor="#fff"

          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your last Name"
          placeholderTextColor="#fff"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your E-mail"
          placeholderTextColor="#fff"
          value={email}
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#fff"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={registerWithEmail}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
 
      </View>
     <TouchableOpacity style={{marginBottom:-50,marginTop:20}} onPress={ ()=>{navigation.goBack()}}>

     <Text >Already have an account, Sign In</Text>

     </TouchableOpacity>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0881a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    marginBottom: 10,
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000', // Set text color to white
  },
  welcomeTextContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: '#000', // Set text color to white
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#fff',
    marginTop: 10
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#25CCF7',
    padding: 10,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 17,
  },
});

export default SignUpPage;
