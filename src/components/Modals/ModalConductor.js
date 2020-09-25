import React from 'react'
import { StyleSheet } from 'react-native'

import Animations from '../../assets/animations'
import AddNewAspect from '../Modals/AddNewAspect'
import * as Animatable from 'react-native-animatable'

const ModalConductor = ({ modalActive, modalType }) => {
  return(
    <Animatable.View animation={ modalActive ? Animations.slideUp : null } style={styles.modal}>
      <AddNewAspect active={modalType === 'ADD_NEW_ASPECT'} />
    </Animatable.View>
  )
}
const styles = StyleSheet.create({
  modal: {
    paddingRight: '4%',
    paddingLeft: '4%',
    height: '100%',
    width: '100%',
    backgroundColor: 'lightgrey',
    position: 'absolute',
    bottom: '-100%',
    display: 'flex',
    zIndex: 2
  },
})

export default ModalConductor