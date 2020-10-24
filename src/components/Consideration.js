import React, { useContext } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'
import { theme } from '../assets/utils'
import { ModalContext } from '../state'

const Consideration = ({ style, text, creator }) => {
  const [modalState, modalDispatch] = useContext(ModalContext)
  // const deleteHandler = () => {
  //   return Alert.alert(
  //     'Alert Title',
  //     'My Alert Msg',
  //     [
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel'
  //       },
  //       {
  //         text: 'OK',
  //         onPress: () => console.log('OK Pressed') 
  //       }
  //     ],
  //     {
  //       cancelable: false 
  //     }
  //   )
  // }

  return creator ? (
    <TouchableOpacity onPress={() => modalDispatch({
      type: 'OPEN_MODAL',
      modalType: 'ADD_NEW_ASPECT' 
    })}>
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
    <TouchableOpacity onLongPress={() => modalDispatch({
      type: 'OPEN_MODAL',
      modalType: '' 
    })} key={text} style={[styles.containerStyle, style]} onPress={() => console.log('pressed')}>
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