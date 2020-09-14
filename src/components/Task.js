import React from 'react'
import {View, StyleSheet} from 'react-native'

const Task = ({style}) => {
  return(
    <View style={[styles.containerStyle, style]}></View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    height: '7vh', 
    width: '30vw', 
    borderColor: 'gray',
    borderWidth: 1, 
    borderRadius: '4vw'
  }
})
export default Task