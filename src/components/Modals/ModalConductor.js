import React from 'react'
import { StyleSheet } from 'react-native'

import Animations from '../../assets/animations'
import AddNewAspect from '../Modals/AddNewAspect'
import * as Animatable from 'react-native-animatable'

const ModalConductor = ({ modalActive, modalType, closeModal }) => {
  if (modalType !== undefined) {
    return(
      <Animatable.View animation={ modalType === undefined ? null : Animations.slide(modalActive) } style={styles.modal}>
        <AddNewAspect active={modalType === 'ADD_NEW_ASPECT'} closeModal={closeModal} />
      </Animatable.View>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  modal: {
    opacity: 0,
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