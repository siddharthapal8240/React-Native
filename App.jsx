import { View, Text, Image, Button, TouchableOpacity, Alert, Pressable, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
    // const style = {
    //   container: {
    //     width:'100%', 
    //     height:'100%', 
    //     backgroundColor:'#dadada'
    //   }
    // }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        style={{ width: 200, height: 200 }}/>

      {/* <Button title='Press me'></Button> */}

      {/* <TouchableOpacity style={{ backgroundColor: 'orange', padding: 10 }} onPress={() => Alert.alert('Hello')}>
        <Text>Press me</Text>
      </TouchableOpacity> */}

      <Pressable style={styles.button} onPress={() => Alert.alert('Hello')}>
        <Text style={styles.btnText}>Press me</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({

  container: {
    width:'100%', 
    height:'100%', 
    backgroundColor:'#dadada',
    padding: 20,
    gap: 10
  },
  text: {
    fontSize: 30,
    color: 'orange',
    fontWeight:'bold'
  },
  button: {
    backgroundColor: 'orange', 
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    borderRadius: 50,
  },
  btnText: {
    color: 'white',
    fontWeight: '400'
  }
  
})