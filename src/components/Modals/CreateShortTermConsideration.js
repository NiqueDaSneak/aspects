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
import { Picker } from '@react-native-picker/picker'

import { theme, useKeyboard } from '../../assets/utils'
import { AspectsContext, ModalContext } from '../../state'
import { ConsiderationContext } from '../../state/considerations.context'
import { AspectsContextProvider } from '../../state/aspects.context'

const CreateShortTermConsideration = ({ visible }) => {
  const [modalState, modalDispatch] = useContext(ModalContext)
  const [considerationState, considerationDispatch] = useContext(ConsiderationContext)
  const [keyboardHeight] = useKeyboard()
  const [aspectState, aspectsDispatch] = useContext(AspectsContext)
  const { aspects } = aspectState
  const [considerationTitle, setConsiderationTitle] = useState('Useless Placeholder')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [importance, setImportance] = useState('')
  const [aspectPicker, setAspectPicker] = useState('No')
  const inputRef = useRef()
  const slideLeft = useRef(new Animated.Value(0)).current
  const slideLeft2 = useRef(new Animated.Value(400)).current
  const slideLeft3 = useRef(new Animated.Value(400)).current

  
  useEffect(() => {
    if (visible) {
      inputRef.current.focus()
    }
  }, [visible])

  useEffect(() => {
    // after first question move to next
    if (questionIndex === 1) {
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
    // move on to the last question
    if (questionIndex === 2) {
      Animated.timing(slideLeft2, {
        toValue: -400,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start()
      
      Animated.timing(slideLeft3, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start()
    }
  }, [questionIndex])
  
  const submitNewConsideration = () => {
    let newConsideration = {
      title: considerationTitle,
      importanceStatement: importance,
      type: 'short',
      aspect: aspectPicker
    }
    console.log(newConsideration)
    considerationDispatch({
      type: 'ADD_NEW',
      newConsideration: newConsideration
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
      <BlurView tint='dark' intensity={100} style={{
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
            fontSize: theme.fonts.sizes.medium,
            color: 'white',
            width: '80%',
            marginBottom: '2%', 
          }}>What is one specific thing you need to do now to either create or sustain your vision? </Text>
          <Text style={{
            fontSize: theme.fonts.sizes.small,
            color: 'white',
            width: '80%',
            marginBottom: '4%', 
          }}>Put another way; What is a step I can take to overcome an obstacle I'm facing</Text>
          <TextInput
            ref={inputRef}
            blurOnSubmit
            maxLength={41}
            keyboardAppearance={'dark'}
            returnKeyType={'next'}          
            // style={styles.titleInput}
            multiline={true}
            numberOfLines={4}
            style={styles.importanceInput}
            onChangeText={text => setConsiderationTitle(text)}
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
            fontSize: theme.fonts.sizes.medium,
            marginBottom: '4%', 
            color: 'white',
            width: '80%'
          }}>Why is this important to you?</Text>
          <TextInput
            keyboardAppearance={'dark'}
            blurOnSubmit
            returnKeyType={'done'}         
            multiline={true}
            numberOfLines={4}
            style={styles.importanceInput}
            onChangeText={text => setImportance(text)}
            onSubmitEditing={() => {
              setQuestionIndex(questionIndex + 1)
              Keyboard.dismiss()
            }
            }
          />
          <Button color="green" title="Next" onPress={() => {
            setQuestionIndex(questionIndex + 1)
            Keyboard.dismiss()
          } 
          } />
        </Animated.View>
        <Animated.View 
          style={[styles.importanceContainer, {
            bottom: keyboardHeight,
            left: slideLeft3,
          }]}>
          <View style={{
            position: 'absolute',
            alignItems: 'center',
            bottom: 300 
          }}>
            <Text style={{
              fontSize: theme.fonts.sizes.medium,
              marginBottom: '4%', 
              color: 'white',
              width: '80%'
            }}>Does this correspond with any of your aspects?</Text>
            <Picker
              selectedValue={aspectPicker}
              style={{
                width: '80%',
              }}
              onValueChange={(itemValue, itemIndex) =>
                setAspectPicker(itemValue)
              }
            >
              {aspects.map(aspect => (
                <Picker.Item key={aspect.title} label={aspect.title} value={aspect.title} />
              ))}
            </Picker>

            <Button color="green" title="Create" onPress={() => submitNewConsideration()} />
          </View>
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
    color: 'white',
  }
})

export default CreateShortTermConsideration