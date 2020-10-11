import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { theme } from '../assets/utils'

const Consideration = ({ style, text }) => {

  return(
    <TouchableOpacity key={text} style={[styles.containerStyle, style]} onPress={() => console.log('pressed')}>
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
    minHeight: 80,
    marginBottom: 10,
    marginRight: 10,
    padding: 10,
    borderColor: 'black',
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
    paddingLeft: 20,
    width: 200,
    fontSize: theme.fonts.sizes.small
  }
})
export default Consideration