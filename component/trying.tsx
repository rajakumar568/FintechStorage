import { StyleSheet, Text, View ,TextInput,Pressable} from 'react-native';
import React from 'react';
import { useState } from "react";

const Trying = () => {

  
    // const navigation = useNavigation();
  
  
    const [Fname, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [display, setDisplay] = useState(false)
  
  
    const reset = () => {
      setFname("");
      setLname("");
      setEmail("");
      setPassword("");
      setCPassword("");
      // const[display,setDisplay]=useState(false)
      // setDisplay(false);
    };


  return (
    <View style={styles.headContainer}>
         <View style={styles.welcome}>
          <Text style={styles.welcomeOne}>Welcome !</Text>
         </View>
         <View style={styles.welcomeText}>
          <Text style={styles.welcomeTextOne}>Sign up for the FinTech Authenticator</Text>
         </View>
         <View style={[styles.fName,styles.allContainer]}>
         <TextInput
            style={styles.input}
            placeholder='Enter your first name'
            value={Fname}
            onChangeText={(text) => setFname(text)}
          />
         </View>
         <View style={[styles.lName,styles.allContainer]}>
         <TextInput
            style={styles.input}
            placeholder='Enter your last name'
            value={lName}
            onChangeText={(text) => setLname(text)}
          />
         </View>
         <View style={[styles.email,styles.allContainer]}>
         <TextInput
            style={styles.input}
            placeholder='Enter your email'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
         </View>
         <View style={[styles.password,styles.allContainer]}>
         <TextInput
            style={styles.input}
            placeholder='Enter Password'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
         </View>
         <View style={[styles.cPassword,styles.allContainer]}>
         <TextInput
            style={styles.input}
            placeholder='Confirm password'
            value={cPassword}
            onChangeText={(text) => setCPassword(text)}
          />
         </View>
         <View style={[styles.reset,styles.allContainer]}>
         <Pressable style={styles.resetOne} onPress={() => reset()}>
            <Text style={styles.teextPresable}>Reset Data</Text>
          </Pressable>
         </View>
         <View style={[styles.signUp,styles.allContainer]}>
         <Pressable style={styles.reset} onPress={()=>navigation.navigate(Dashboard)}>
            <Text style={styles.teextPresable}>Sign Up</Text>
          </Pressable>
         </View>

    </View>
  )
};

export default Trying;

const styles = StyleSheet.create({

  headContainer:{
    flex:1,
    backgroundColor:'#67E6DC',
  },
  welcome:{
    flex:2,
    alignItems:'center',
    justifyContent:'center'
  },
  welcomeOne:{
    fontSize:60,

  },
  welcomeText:{
    flex:1,
    // backgroundColor:'red'
  },
  welcomeTextOne:{
    fontSize:25
  },
  input:{
    fontSize:25,
    
    width:'90%',
    height:70,
    alignItems:'center',
    justifyContent:'center',

    backgroundColor:'white',
    borderColor:'black',
    borderRadius:15,
    borderWidth:1,
    // margin:30

  },
  allContainer:{
    flex:1,
    alignItems:'center'

  },
  fName:{
    
  },
  lName:{
  
  },
  email:{
 
  },
  password:{
    
  },
  cPassword:{
   
  },
  teextPresable:{},
  reset:{
    justifyContent:'space-evenly'

    
  },
  resetOne:{
    backgroundColor:'#000000',
    height:40,
    width:'40%'
  },
  signUp:{
    
  }


})