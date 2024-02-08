import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileView = () => {
  return (
    <View style={styles.headContainer}>
      <Text>ProfileView</Text>
    </View>
  )
}

export default ProfileView

const styles = StyleSheet.create({
    headContainer:{
        flex:1,
        backgroundColor:'#0881a6'
    }
})