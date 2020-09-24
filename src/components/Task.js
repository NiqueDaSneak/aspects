import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { theme } from '../assets/utils'

const Task = ({ style, text }) => {

  return(
    <TouchableOpacity key={text} style={styles.containerStyle} onPress={() => console.log('pressed')}>
      <View>
        <Text style={styles.taskBtn}>+</Text>
      </View>
      <View style={styles.taskText}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    height: '100%',
    marginRight: 10,
    width: 200,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'gray',
    borderWidth: 1, 
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  taskBtn: {
    fontSize: theme.fonts.sizes.large,
  },
  taskText: {
    width: 100,
    fontSize: theme.fonts.sizes.small
  }
})
export default Task