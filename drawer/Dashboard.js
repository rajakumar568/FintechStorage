

// import { View, Text, StyleSheet,BackHandler,Alert } from 'react-native'
// import React from 'react'
// import BottomDrawer from '../bottomScreen/BottomDrawer';
// import { useEffect } from 'react';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import HomePage from '../component/HomePage';
// const navigation = useNavigation();


// const Dashboard = () => {

//   useEffect(() => {
//     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
//       // Display alert when the back button is pressed
//       Alert.alert(
//         'Confirmation',
//         'Do you want to log out?',
//         [
//           { text: 'Cancel', onPress: () => null, style: 'cancel' },
//           { text: 'Logout', onPress: () => {
//             // Navigate to the home page (or any other page you want)
//             navigation.navigate('HomePage');
//           }},
//         ],
//         { cancelable: false }
//       );
//       return true;
//     });

//     return () => backHandler.remove(); 

//   }, [navigation]);

//   return (
//     <View style={styles.headContainer}>
//       <BottomDrawer/>
//       {/* <Text>Welcome To Dashboard</Text> */}
//     </View>
//   )
// }

// export default Dashboard;



// const styles = StyleSheet.create({
//   headContainer:{
//     flex:1,
//     backgroundColor:'salmon',
//   }

// })

// goback
// pop 

import { View, StyleSheet, BackHandler, Alert } from 'react-native';
import React, { useEffect } from 'react';
import BottomDrawer from '../bottomScreen/BottomDrawer';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      Alert.alert(
        'Confirmation',
        'Do you want to log out?',
        [
          { text: 'Cancel', onPress: () => null, style: 'cancel' },
          { text: 'Logout', onPress: () => navigation.navigate('HomePage') },
        ],
        { cancelable: false }
      );
      return true;
    });

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={styles.headContainer}>
      <BottomDrawer />
    </View>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    backgroundColor: 'salmon',
  },
});

export default Dashboard;
