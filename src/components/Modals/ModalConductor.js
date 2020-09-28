import React from 'react'
import { StyleSheet } from 'react-native'

import Animations from '../../assets/animations'
import AddNewAspect from '../Modals/AddNewAspect'
import * as Animatable from 'react-native-animatable'

const ModalConductor = ({ modalActive, modalType, closeModal }) => {
  return(
    <Animatable.View animation={Animations.slide(modalActive) } style={styles.modal}>
      { modalType !== undefined && 
      <AddNewAspect active={modalType === 'ADD_NEW_ASPECT'} closeModal={closeModal} />
      }
    </Animatable.View>
  )
  // console.log(modalType)
  // if (modalType !== undefined) {
  //   return(
  //       <AddNewAspect active={modalType === 'ADD_NEW_ASPECT'} closeModal={closeModal} />
  //   )
  // } else {
  //   return null
  // }
}

const styles = StyleSheet.create({
  modal: {
    opacity: 0,
    bottom: '-100%',   
    paddingRight: '4%',
    paddingLeft: '4%',
    height: '100%',
    width: '100%',
    backgroundColor: 'lightgrey',
    position: 'absolute',
    display: 'flex',
    zIndex: 2
  },
})

export default ModalConductor