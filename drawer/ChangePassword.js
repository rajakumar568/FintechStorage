// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React, { useEffect, useState } from 'react';
// import { firebase } from '@react-native-firebase/auth';
// // import { firebase } from '../config';
// // import { TouchableOpacity } from 'react-native-gesture-handler';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';



// // const navigation = useNavigation();


// const ChangePassword = ({ navigation }) => {
//     // useEffect(()=>
//     // { 
//     //   setTimeout(()=>{

//     //   },2000)
//     // },[]);
//     const [name, setName] = useState([]);
//     const pressHere = () => {
//         firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
//             .then(() => {
//                 alert("password reset email sent")
//             })
//             .catch((error) => {
//                 alert(error)
//             })
//     };
//     // useEffect

//     return (
//         <View style={{ flex: 1, backgroundColor: '#0881a6', justifyContent: 'center', alignItems: 'center' }}>
//             <TouchableOpacity onPress={pressHere} style={styles.bttn}>
//                 <Text style={{ fontWeight: 200, fontSize: 20 }}>Reset Password</Text>
//             </TouchableOpacity >
//             <TouchableOpacity style={styles.bttn2} onPress={()=>{navigation.goBack()}} >
//                 <Text>Move to Dashboard</Text>
//             </TouchableOpacity>

//         </View>
//     )
// }

// export default ChangePassword

// const styles = StyleSheet.create({
//     bttn: {
//         backgroundColor: '#25CCF7',
//         height: 50,
//         width: 220,
//         borderRadius: 15,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 500
//     },
//     bttn2: {
//         marginTop: 100
//     },

// })


import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = () => {
    const navigation = useNavigation();

    const pressHere = () => {
        firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
            .then(() => {
                alert("Password reset email sent")
            })
            .catch((error) => {
                alert(error)
            })
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={pressHere} style={styles.button}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0881a6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#25CCF7',
        height: 50,
        width: 220,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    buttonText: {
        fontWeight: '200',
        fontSize: 20,
    },
});

export default ChangePassword;

