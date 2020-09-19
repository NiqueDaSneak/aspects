import React, {useContext} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Animated, 
  Switch,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ModalContext} from '../state/modal.context'


const Footer = () => {
  
  const {openModal} = useContext(ModalContext)
  // const [modalActive, setModal] = useState(false)

  const pressHandler = () => {
    openModal()
  }

  return(
    <View style={styles.footer}>
      <TouchableOpacity onPress={pressHandler}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  footer: {
    height: '10vh',
    width: '100vw',
    backgroundColor: 'green',
    position: 'fixed',
    bottom: 0
  },
  plus: {
    fontSize: '30pt',
    color: 'white',
    textAlign: 'center'
  }
})

export default Footer