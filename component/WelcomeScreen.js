import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';



// const navigation = useNavigation();

const Welcome = ({navigation}) => {
  useEffect(()=>
  { 
    setTimeout(()=>{
        navigation.navigate('HomePage');
    },3000)
  },[]);
  return(

    <View style={styles.headContainer}>
        <Text>Hello sir</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    headContainer:{
        flex:1,
        backgroundColor:'red'
    }
})


// import React, { useEffect, useRef } from 'react';
// import { View, Animated, StyleSheet } from 'react-native';

// const Welcome = () => {
//   const horseImages = [
//     'https://example.com/horse1.png',
//     'https://example.com/horse2.png',
//     'https://example.com/horse3.png',
//     // Add more URIs as needed
//   ];

//   const animation = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     const runAnimation = () => {
//       Animated.timing(animation, {
//         toValue: horseImages.length - 1,
//         duration: 500,
//         useNativeDriver: false,
//       }).start(() => {
//         animation.setValue(0);
//         runAnimation();
//       });
//     };

//     runAnimation();
//   }, [animation, horseImages]);

//   return (
//     <View style={styles.container}>
//       <Animated.Image
//         style={[
//           styles.horse,
//           {
//             transform: [
//               {
//                 translateX: animation.interpolate({
//                   inputRange: [0, horseImages.length - 1],
//                   outputRange: [0, -100 * (horseImages.length - 1)], // Adjust based on image width
//                 }),
//               },
//             ],
//           },
//         ]}
//         source={{ uri: horseImages[0] }} // Use the first image URI
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black', // Set background color as per your preference
//   },
//   horse: {
//     width: 100, // Adjust based on your image size
//     height: 100, // Adjust based on your image size
//   },
// });

// export default Welcome;
