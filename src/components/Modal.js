import React, {useState, useRef, useContext} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Animated, 
  Switch,
  TextInput,
  Button,
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import Animations from '../assets/animations'
import {ModalContext} from '../state/modal.context'
import {theme} from '../assets/utils'
import Task from './Task';

const Modal = () => {

  const {modalActive} = useContext(ModalContext)

  const [value, onChangeText] = useState('Useless Placeholder');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return(
    <Animatable.View animation={ modalActive ? Animations.slideUp : null} style={styles.modal}>
      <Text style={{marginTop: '4%', textAlign: 'center', fontSize: theme.fonts.sizes.large}}>Add New Aspect</Text>
      <Text style={{marginTop: '4%', fontSize: theme.fonts.sizes.small}}>Give Your Aspect A Title</Text>
      <TextInput
      clearTextOnFocus
      style={{ marginTop: '2%', fontSize: theme.fonts.sizes.medium, height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      /> 
      <Text style={{marginTop: '4%', fontSize: theme.fonts.sizes.small}}>Is this a short term or long term consideration?</Text>
      <View style={{marginTop: '2%', display: 'flex', flexDirection: 'row'}}>
        <Text style={{fontSize: theme.fonts.sizes.medium}}>Short Term</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{fontSize: theme.fonts.sizes.medium}}>Long Term</Text>
      </View>
      <Text style={{marginTop: '4%', fontSize: theme.fonts.sizes.small}}>Why is this important to you?</Text>
      <TextInput
        multiline = {true}
        numberOfLines = {4}
        style={{ minHeight: '20vh', marginTop: '2%', fontSize: theme.fonts.sizes.medium, borderColor: 'gray', borderWidth: 1 }}
      // onChangeText={text => onChangeText(text)}
      // value={value}
      />
      <Text style={{marginTop: '4%', fontSize: theme.fonts.sizes.small}}>What tasks will address this?</Text>
      <View style={[theme.layout.flex.row, {marginTop: '2%', alignItems: 'center'}]}>
        <TextInput
        style={{ fontSize: theme.fonts.sizes.medium, height: 40, borderColor: 'gray', borderWidth: 1, width: '80vw' }}
        // onChangeText={text => onChangeText(text)}
        // value={value}
        />
        <View style={styles.newTaskBtn}>
          <TouchableOpacity>
            <Text style={{color: 'white', fontSize: '16pt'}}>+</Text>
          </TouchableOpacity> 
        </View>
      </View>
      <View style={styles.taskCont}>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>
        <Task style={{marginRight: '2%', marginBottom: '2%'}}/>

          {/* map of tasks */}
      </View>
      <Button style={styles.submitBtn} title='submit' />
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  submitBtn: {
    // height: '80vh'
  },
  newTaskBtn: {
    width: '10vw',
    backgroundColor: 'black',
    height: '10vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  modal: {
    paddingRight: '4%',
    paddingLeft: '4%',
    height: '100%',
    width: '100%',
    backgroundColor: 'lightgrey',
    position: 'fixed',
    bottom: '-100vh',
    color: 'white',
    display: 'flex',
    // justifyContent: 'space-between'
    overflow: 'scroll'
  },
  taskCont: {
    marginTop: '2%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})

export default Modal