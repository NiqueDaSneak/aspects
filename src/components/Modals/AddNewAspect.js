import React, { useState, useContext, useEffect, useRef } from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Switch,
  TextInput,
  Button,
  KeyboardAvoidingView,
  FlatList,
  Modal,
  Alert,
  Keyboard,
  Animated,
  Easing
} from 'react-native'
import { BlurView } from 'expo-blur'

import { theme, useKeyboard } from '../../assets/utils'
import { AspectsContext, ModalContext } from '../../state'

const AddNewAspect = ({ visible }) => {
  const [modalState, modalDispatch] = useContext(ModalContext)
  const [aspectsState, aspectsDispatch] = useContext(AspectsContext)
  const [keyboardHeight] = useKeyboard()

  const [aspectTitle, setAspectTitle] = useState('Useless Placeholder')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [importance, setImportance] = useState('')
  
  const inputRef = useRef()
  const slideLeft = useRef(new Animated.Value(0)).current
  const slideLeft2 = useRef(new Animated.Value(400)).current

  useEffect(() => {
    if (modalState.modalActive) {
      inputRef.current.focus()
    }
  }, [modalState.modalActive])

  useEffect(() => {
    if (questionIndex > 0) {
      Animated.timing(slideLeft, {
        toValue: -400,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start()
      
      Animated.timing(slideLeft2, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start()
    }
  }, [questionIndex])
  
  const submitNewAspect = () => {
    let newAspect = {
      title: aspectTitle,
      importanceStatement: importance,
      considerations: []
    }
    aspectsDispatch({
      type: 'ADD_NEW_ASPECT',
      payload: newAspect
    })
    modalDispatch({
      type: 'CLOSE_MODAL'
    })
  }

  return(
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.')
      }}
    >
      <BlurView intensity={100} style={{
        height: '100%',
        width: '100%' 
      }}>
        <Animated.View 
          style={[styles.titleContainer, {
            bottom: keyboardHeight + 30,
            left: slideLeft 
          }]
            
          }>
          <Text style={{
            fontSize: theme.fonts.sizes.large,
            marginBottom: '4%', 
          }}>Give Your Aspect A Title</Text>
          <TextInput
            ref={inputRef}
            blurOnSubmit
            maxLength={41}
            keyboardAppearance={'dark'}
            returnKeyType={'next'}          
            style={styles.titleInput}
            onChangeText={text => setAspectTitle(text)}
            placeholder="Useless Placeholder"
            onSubmitEditing={() => setQuestionIndex(questionIndex + 1)}
          /> 
          <Button color="green" title="Next" onPress={() => setQuestionIndex(questionIndex + 1)} />
        </Animated.View>
        <Animated.View 
          style={[styles.importanceContainer, {
            bottom: keyboardHeight + 30,
            left: slideLeft2,
          }]}>
          <Text style={{
            fontSize: theme.fonts.sizes.large,
            marginBottom: '4%', 
          }}>Why is this important to you?</Text>
          <TextInput
            keyboardAppearance={'dark'}
            blurOnSubmit
            returnKeyType={'done'}         
            multiline={true}
            numberOfLines={4}
            style={styles.importanceInput}
            onChangeText={text => setImportance(text)}
            onSubmitEditing={() => submitNewAspect()}
          />
          <Button color="green" title="Create" onPress={() => submitNewAspect()} />
        </Animated.View>
      </BlurView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    marginTop: 'auto',
    
    display: 'flex',
    alignItems: 'center',
    position: 'absolute'
  },
  titleInput: { 
    borderRadius: 10, 
    fontSize: theme.fonts.sizes.medium, 
    borderColor: 'gray', 
    borderWidth: 1 ,
    paddingLeft: '2%',
    marginBottom: '4%', 
    width: '80%',
    textAlign: 'center',
    padding: '2%',
  },
  importanceContainer: {
    width: '100%',
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute'
  },
  importanceInput: { 
    borderRadius: 10, 
    height: 80, 
    width: '80%',
    marginBottom: '4%', 
    fontSize: theme.fonts.sizes.small, 
    borderColor: 'gray', 
    borderWidth: 1,
    padding: '4%',
  }
})

export default AddNewAspect