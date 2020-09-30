import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Animated } from 'react-native'

// import Animations from '../../assets/animations'
import AddNewAspect from '../Modals/AddNewAspect'
// import * as Animatable from 'react-native-animatable'

const ModalConductor = ({ modalActive, modalType, closeModal }) => {

  const slideUpAnimation = useRef(new Animated.Value(-100)).current

  useEffect(() => {
    if (modalActive) {
      Animated.timing(slideUpAnimation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
        // easing: Easing.linear,
      }).start()
    } else {
      Animated.timing(slideUpAnimation, {
        toValue: -100,
        duration: 200,
        useNativeDriver: false
        // easing: Easing.linear,
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
      // bottom: '-100%' ,

    }}>
      {/* { modalType !== undefined &&  */}
      {/* <AddNewAspect active={true} closeModal={closeModal} /> */}
      <AddNewAspect active={modalType === 'ADD_NEW_ASPECT'} closeModal={closeModal} />
      {/* } */}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  modal: {
    // opacity: 0,
    // bottom: slideUpAnimation,   
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