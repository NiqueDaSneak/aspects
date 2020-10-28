import React, { useContext } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'
import { theme } from '../assets/utils'
import { ModalContext } from '../state'
import showShortTermConsiderationActions from './Modals/showShortTermConsiderationActions'
const Consideration = ({ style, text, creator, type }) => {
  const [modalState, modalDispatch] = useContext(ModalContext)

  const creatorPressHandler = () => {
    if (type === 'short') {
      modalDispatch({
        type: 'OPEN_MODAL',
        modalType: 'ADD_SHORT_CONSIDERATION' 
      })
    }
  }

  return creator ? (
    <TouchableOpacity onPress={() => creatorPressHandler()}>
      <View style={{
        ...styles.containerStyle,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'lightgrey',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        width: 90,
        // height: 80
      }}>
        <Text style={{
          fontSize: 50,
          color: 'grey' 
        }}>+</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity 
      onPress={() => {
        showShortTermConsiderationActions()
      }}
      key={text} 
      style={[styles.containerStyle, style]}>
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