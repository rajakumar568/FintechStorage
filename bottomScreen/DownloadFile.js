import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const DownloadFile = () => {
  return (
    <View style={styles.headContainer}>
      <TouchableOpacity style={styles.bttn}>
    <Text>Download File</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default DownloadFile;

const styles = StyleSheet.create({
headContainer:{
    flex:1,
    backgroundColor:'#0881a6',
    justifyContent:'center',
    alignItems:'center'
  },
  bttn:{
    width: 150,
    height: 50,
    backgroundColor:'#25CCF7',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    marginTop:300
  },
})