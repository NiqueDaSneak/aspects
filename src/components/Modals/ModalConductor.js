import React, { useEffect, useRef, useContext } from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native'
// import { useModal } from '../../hooks/modal.hook'
import AddNewAspect from '../Modals/AddNewAspect'
import { ModalContext } from '../../state'

const ModalConductor = () => {

  const [state, dispatch] = useContext(ModalContext)
  const { modalActive, modalType } = state
  const closeModal = () => dispatch({
    type: 'CLOSE_MODAL' 
  })

  const slideUpAnimation = useRef(new Animated.Value(-100)).current

  useEffect(() => {
    if (modalActive) {
      Animated.timing(slideUpAnimation, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start()
    } else {
      Animated.timing(slideUpAnimation, {
        toValue: -100,
        duration: 600,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start()
    }
  }, [modalActive])

  return(
    <Animated.View style={{
      ...styles.modal,
      bottom: slideUpAnimation.interpolate({
        inputRange: [-100, 0],
        outputRange: ['-100%', '0%']

      }),
    }}>
      <AddNewAspect active={modalType === 'ADD_NEW_ASPECT'} closeModal={closeModal} />
    </Animated.View>
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
    display: 'flex',
    zIndex: 2
  },
})

export default ModalConductor