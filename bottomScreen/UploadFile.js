
// // // import { View, Text, StyleSheet, Pressable } from 'react-native'
// // // import React from 'react'
// // // import DocumentPicker from 'react-native-document-picker'
// // // import RNFetchBlob from 'rn-fetch-blob';
// // // import { firebase } from '@react-native-firebase/app';
// // // import { Alert } from 'react-native';


// // // // Initialize Firebase
// // // if (!firebase.apps.length) {
// // //   firebase.initializeApp({
// // //     // Your Firebase configuration
// // //   });
// // // }

// // // const UploadFile = () => {

// // //   const firebaseConfig = {
// // //     apiKey: "AIzaSyCNIJ9mhjequeke286pDE6BWKlGia4HBNk",
// // //     authDomain: "fintech-storage.firebaseapp.com",
// // //     projectId: "fintech-storage",
// // //     storageBucket: "fintech-storage.appspot.com",
// // //     messagingSenderId: "441439216842",
// // //     appId: "1:441439216842:web:a4ba0a5546066a7d544033",
// // //     measurementId: "G-4XSD5SHK3R"
// // //   };

// // //   const selectDoc = async () => {
// // //     try {
// // //       const doc = await DocumentPicker.pick({
// // //         type: [DocumentPicker.types.allFiles],
// // //         allowMultiSelection: true
// // //       })
// // //       console.log(doc);

// // //     } catch (err) {
// // //       if (DocumentPicker.isCancel(err)) {
// // //         console.log("User cancelled upload ", err);
// // //       }
// // //       else
// // //         console.log(err);

// // //     }
// // //   }

// // //   // const uploadToFirebase = async () => {
// // //   //   try {
// // //   //     const doc = await DocumentPicker.pick({
// // //   //       type: [DocumentPicker.types.allFiles],
// // //   //       allowMultiSelection: true // Assuming you want to upload a single file
// // //   //     });

// // //   //     const reference = storage().ref(`uploads/${doc.name}`);
// // //   //     await reference.putFile(doc.uri);

// // //   //     console.log('File uploaded to Firebase Storage');

// // //   //     // You can also get the download URL if needed
// // //   //     const downloadURL = await reference.getDownloadURL();
// // //   //     console.log('Download URL:', downloadURL);
// // //   //   } catch (err) {
// // //   //     if (DocumentPicker.isCancel(err)) {
// // //   //       console.log('User cancelled upload');
// // //   //     } else {
// // //   //       console.log('Error uploading file to Firebase:', err);
// // //   //     }
// // //   //   }
// // //   // };


// // //   //Comenting this

// // //   // const uploadToFirebase = async () => {
// // //   //   try {
// // //   //     const promises = selectedFiles.map(async (file) => {
// // //   //       const reference = storage().ref(`uploads/${file.name}`);
// // //   //       await reference.putFile(file.uri);
// // //   //       const downloadURL = await reference.getDownloadURL();
// // //   //       return { name: file.name, downloadURL };
// // //   //     });

// // //   //     const uploadedFiles = await Promise.all(promises);
// // //   //     console.log('Uploaded files:', uploadedFiles);
// // //   //   } catch (error) {
// // //   //     console.error('Error uploading files:', error);
// // //   //   }
// // //   // };

// // //   const uploadToFirebase = async (image) => {
// // //     try {
// // //       setUploading(true);

// // //       const response = await RNFetchBlob.fetch('GET', image.uri);
// // //       const blob = response.blob();
// // //       const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);

// // //       const ref = firebase.storage().ref().child(filename);
// // //       await ref.put(blob);

// // //       setUploading(false);

// // //       Alert.alert('Photo uploaded!');
// // //       setImage(null);
// // //     } catch (error) {
// // //       console.error('Error uploading photo:', error);
// // //       setUploading(false);
// // //       // Handle error accordingly
// // //     }
// // //   };


// // //   return (
// // //     <View style={styles.headerContainer}>
// // //       <Pressable onPress={selectDoc} style={styles.bttn1}>
// // //         <Text>Choose File</Text>
// // //       </Pressable>
// // //       <Pressable onPress={uploadToFirebase} style={styles.bttn2}>
// // //         <Text>Upload Files to database
// // //         </Text>
// // //       </Pressable>
// // //     </View>
// // //   )
// // // }

// // // export default UploadFile
// // // const styles = StyleSheet.create({
// // //   headerContainer: {
// // //     flex: 1,
// // //     backgroundColor: 'gray',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',

// // //   },
// // //   bttn1: {
// // //     height: 50,
// // //     width: '80%',
// // //     backgroundColor: '#2ecc72',
// // //     borderRadius: 15,
// // //     alignItems: 'center',
// // //     justifyContent: 'center'

// // //   },
// // //   bttn2: {
// // //     marginTop: 20,
// // //     height: 50,
// // //     width: '80%',
// // //     backgroundColor: '#25CCF7',
// // //     borderRadius: 15,
// // //     alignItems: 'center',
// // //     justifyContent: 'center'
// // //   }
// // // })




// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, Pressable } from 'react-native';
// // import DocumentPicker from 'react-native-document-picker';
// // import RNFetchBlob from 'rn-fetch-blob';
// // import { firebase } from '@react-native-firebase/app';
// // import { Alert } from 'react-native';

// // // Initialize Firebase
// // if (!firebase.apps.length) {
// //   firebase.initializeApp({
// //     // Your Firebase configuration
// //   });
// // }

// // const UploadFile = () => {
// //   const [uploading, setUploading] = useState(false);

// //     const firebaseConfig = {
// //     apiKey: "AIzaSyCNIJ9mhjequeke286pDE6BWKlGia4HBNk",
// //     authDomain: "fintech-storage.firebaseapp.com",
// //     projectId: "fintech-storage",
// //     storageBucket: "fintech-storage.appspot.com",
// //     messagingSenderId: "441439216842",
// //     appId: "1:441439216842:web:a4ba0a5546066a7d544033",
// //     measurementId: "G-4XSD5SHK3R"
// //   };

// //   const selectDoc = async () => {
// //     try {
// //       const doc = await DocumentPicker.pick({
// //         type: [DocumentPicker.types.allFiles],
// //         allowMultiSelection: true
// //       });
// //       console.log(doc);
// //     } catch (err) {
// //       if (DocumentPicker.isCancel(err)) {
// //         console.log("User cancelled upload ", err);
// //       } else {
// //         console.log(err);
// //       }
// //     }
// //   };

// //   const uploadToFirebase = async (image) => {
// //     try {
// //       setUploading(true);

// //       // Ensure that the image.uri is properly formatted
// //       const uri = image.uri.startsWith('file://') ? image.uri : `file://${image.uri}`;

// //       const response = await RNFetchBlob.fetch('GET', uri);
// //       const blob = response.blob();
// //       const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);

// //       const ref = firebase.storage().ref().child(filename);
// //       await ref.put(blob);

// //       setUploading(false);

// //       Alert.alert('Photo uploaded!');
// //       setImage(null);
// //     } catch (error) {
// //       console.error('Error uploading photo:', error);
// //       setUploading(false);
// //       // Handle error accordingly
// //     }
// //   };


// //   return (
// //     <View style={styles.headerContainer}>
// //       <Pressable onPress={selectDoc} style={styles.bttn1}>
// //         <Text>Choose File</Text>
// //       </Pressable>
// //       <Pressable onPress={uploadToFirebase} style={styles.bttn2}>
// //         <Text>Upload Files to database</Text>
// //       </Pressable>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   headerContainer: {
// //     flex: 1,
// //     backgroundColor: 'gray',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   bttn1: {
// //     height: 50,
// //     width: '80%',
// //     backgroundColor: '#2ecc72',
// //     borderRadius: 15,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   bttn2: {
// //     marginTop: 20,
// //     height: 50,
// //     width: '80%',
// //     backgroundColor: '#25CCF7',
// //     borderRadius: 15,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// // export default UploadFile;
// // 




// import React, { useState } from 'react';
// import {
//   View,
//   SafeAreaView,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Platform,
//   Alert,
//   Image
// } from 'react-native';
// import storage from '@react-native-firebase/storage';
// import * as Progress from 'react-native-progress';
// import DocumentPicker from 'react-native-document-picker'



// export default function UploadScreen() {
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [transferred, setTransferred] = useState(0);



//   // const selectImage = () => {
//   //   const options = {
//   //     maxWidth: 2000,
//   //     maxHeight: 2000,
//   //     storageOptions: {
//   //       skipBackup: true,
//   //       path: 'images'
//   //     }
//   //   };
//   // ImagePicker.showImagePicker(options, response => {
//   //   if (response.didCancel) {
//   //     console.log('User cancelled image picker');
//   //   } else if (response.error) {
//   //     console.log('ImagePicker Error: ', response.error);
//   //   } else if (response.customButton) {
//   //     console.log('User tapped custom button: ', response.customButton);
//   //   } else {
//   //     const source = { uri: response.uri };
//   //     console.log(source);
//   //     setImage(source);
//   //   }
//   // });

//   // const selectImage = async () => {

//   //   try {
//   //     const response = await DocumentPicker.pick({
//   //       type: [DocumentPicker.types.images],
//   //       allowMultiSelection: true
//   //     })
//   //     console.log(response);
//   //     // const source = { uri: response.uri };
//   //     console.log(response.name);

//   //   } catch (err) {
//   //     if (DocumentPicker.isCancel(err)) {
//   //       console.log("User cancelled upload ", err);
//   //     }
//   //     else
//   //       console.log(err);

//   //   }
//   // }


//   const selectImage = async () => {
//     try {
//       const response = await DocumentPicker.pick({
//         type: [DocumentPicker.types.images],
//         allowMultiSelection: true
//       });
//       console.log(response);
//       const selectedImages = response.map(item => ({ uri: item.uri, name: item.name }));
//       setImages(selectedImages);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log("User cancelled upload ", err);
//       } else {
//         console.log(err);
//       }
//     }
//   };

//   const uploadImage = async () => {
//     if (!image) {
//       Alert.alert('Please select an image first.');
//       return;
//     }

//     const { uri } = image;
//     const filename = uri.substring(uri.lastIndexOf('/') + 1);
//     const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

//     setUploading(true);
//     setTransferred(0);

//     const task = storage()
//       .ref(filename)
//       .putFile(uploadUri);

//     task.on('state_changed', snapshot => {
//       setTransferred(
//         Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
//       );
//     });

//     try {
//       await task;
//       Alert.alert(
//         'Photo uploaded!',
//         'Your photo has been uploaded to Firebase Cloud Storage!'
//       );
//     } catch (e) {
//       console.error(e);
//       Alert.alert('Error', 'Failed to upload image.');
//     }

//     setUploading(false);
//     setImage(null);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
//         <Text style={styles.buttonText}>Pick an image</Text>
//       </TouchableOpacity>
//       <View style={styles.imageContainer}>
//         {image && (
//           <Image source={{ uri: image.uri }} style={styles.imageBox} />
//         )}
//         {uploading ? (
//           <View style={styles.progressBarContainer}>
//             <Progress.Bar progress={transferred / 100} width={300} />
//           </View>
//         ) : (
//           <TouchableOpacity
//             style={styles.uploadButton}
//             onPress={uploadImage}>
//             <Text style={styles.buttonText}>Upload image</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#bbded6'
//   },
//   selectButton: {
//     borderRadius: 5,
//     width: 150,
//     height: 50,
//     backgroundColor: '#8ac6d1',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   uploadButton: {
//     borderRadius: 5,
//     width: 150,
//     height: 50,
//     backgroundColor: '#ffb6b9',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   imageContainer: {
//     marginTop: 30,
//     marginBottom: 50,
//     alignItems: 'center'
//   },
//   progressBarContainer: {
//     marginTop: 20
//   },
//   imageBox: {
//     width: 300,
//     height: 300
//   }
// });




import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image,
  ScrollView
} from 'react-native';
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';
import DocumentPicker from 'react-native-document-picker';

export default function UploadScreen() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const selectImage = async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        allowMultiSelection: false // Set to true if you want to allow multiple image selection
      });
      setImage(response);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled upload', err);
      } else {
        console.log(err);
      }
    }
  };

  const uploadImage = async () => {
    if (!image) {
      Alert.alert('Please select an image first.');
      return;
    }

    const { uri, name } = image;
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

    setUploading(true);
    setTransferred(0);

    const task = storage()
      .ref(name)
      .putFile(uploadUri);

    task.on('state_changed', snapshot => {
      setTransferred(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
    });

    try {
      await task;
      Alert.alert(
        'Photo uploaded!',
        'Your photo has been uploaded to Firebase Cloud Storage!'
      );
    } catch (e) {
      console.error(e);
      Alert.alert('Error', 'Failed to upload image.');
    }

    setUploading(false);
    setImage(null);
  };
 return (
    // <SafeAreaView  >
      <ScrollView style={{backgroundColor:'#0881a6',flex:1}}>
      <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
        <Text style={styles.buttonText}>Pick an image</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {image && image.uri ? ( // Add a condition to check if 'image' and 'image.uri' are not null
          <Image source={{ uri: image.uri }} style={styles.imageBox} />
        ) : null}
        {uploading ? (
          <View style={styles.progressBarContainer}>
            <Progress.Bar progress={transferred / 100} width={300} />
          </View>
        ) : (
          <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
            <Text style={styles.buttonText}>Upload image</Text>
          </TouchableOpacity>
        )}
      </View>
    {/* </SafeAreaView> */}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
    // backgroundColor: '#0881a6'
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    marginTop:500,
    backgroundColor:'#25CCF7',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center'
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor:'#25CCF7',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',

  },
  progressBarContainer: {
    marginTop: 20,
    color:'salmon',
    backgroundColor:'salmon'
  },
  imageBox: {
    width: 300,
    height: 300
  }
});




