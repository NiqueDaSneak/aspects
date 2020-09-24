import React, { useState, useRef } from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Animated, 
  Switch,
  TextInput,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Layout from './src/assets/Layout'
import Hub from './src/pages/Hub'
import { ModalContext } from './src/state/modal.context'
import { useModal } from './src/hooks/modal.hook'


const App = () => {

  const modal = useModal()

  return (
    <ModalContext.Provider value={modal}>
      <Layout>
        <Hub />

      </Layout>
    </ModalContext.Provider>
  )
}

// const styles = StyleSheet.create({
// })

export default App