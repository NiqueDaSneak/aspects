import React, { useState, useContext, useEffect } from 'react'
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
} from 'react-native'
import { theme } from '../../assets/utils'
import Task from '../Task'   
import { useAspects } from '../../hooks/aspects.hook'

const AddNewAspect = ({ modalActive }) => {
  const  { addNewAspect } = useAspects()

  const [aspectTitle, setAspectTitle] = useState('Useless Placeholder')
  const [aspectType, setAspectType] = useState(false)
  const [importance, setImportance] = useState('')
  const [taskCreatorInputValue, setTaskCreatorInputValue] = useState('')
  const [tasks, setTasks] = useState([])

  const toggleSwitch = () => setAspectType(previousState => !previousState)

  const addNewTask = () => {
    setTasks(tasks => [...tasks, taskCreatorInputValue])
    setTaskCreatorInputValue('')
  }

  const submitNewAspect = () => {
    let newAspect = {
      title: aspectTitle,
      type: aspectType ? 'long' : 'short',
      importanceStatement: importance,
      tasks: tasks
    }

    addNewAspect(newAspect)
  }


  return(
    <KeyboardAvoidingView 
      behavior="padding"
      style={styles.newAspectModal}
    >
      <Text style={{ textAlign: 'center', fontSize: theme.fonts.sizes.large }}>Add New Aspect</Text>
      <Text style={{ fontSize: theme.fonts.sizes.small }}>Give Your Aspect A Title</Text>
      <TextInput
        multiline={true}
        blurOnSubmit
        keyboardAppearance={'dark'}
        returnKeyType={'done'}          
        style={styles.aspectTitleInput}
        onChangeText={text => setAspectTitle(text)}
        placeholder="Useless Placeholder"
      /> 
      <Text style={{ fontSize: theme.fonts.sizes.small }}>Is this a short term or long term consideration?</Text>
      <View style={styles.swtichContainer}>
        <Text style={{ fontSize: theme.fonts.sizes.small }}>Short Term</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={aspectType ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={aspectType}
        />
        <Text style={{ fontSize: theme.fonts.sizes.small }}>Long Term</Text>
      </View>
      <Text style={{ fontSize: theme.fonts.sizes.small }}>Why is this important to you?</Text>
      <TextInput
        keyboardAppearance={'dark'}
        blurOnSubmit
        returnKeyType={'done'}         
        multiline={true}
        numberOfLines={4}
        style={styles.importanceInput}
        onChangeText={text => setImportance(text)}
      />
      <Text style={{ fontSize: theme.fonts.sizes.small }}>What tasks will address this?</Text>
      <View style={styles.newTaskContainer}>
        <TextInput
          multiline={true}
          blurOnSubmit={true}
          keyboardAppearance={'dark'}
          returnKeyType={'done'}                             
          maxLength={54}
          style={styles.taskCreatorInput}
          onChangeText={(text) => {
            setTaskCreatorInputValue(text)
          }}   
          value={taskCreatorInputValue}
        />
        <View style={styles.newTaskBtn}>
          <TouchableOpacity onPress={() => addNewTask()}>
            <Text style={{ color: 'white', fontSize: theme.fonts.sizes.medium }}>+</Text>
          </TouchableOpacity> 
        </View>
      </View>
      <View style={{ width: '100%', height: '15%' }}>
        <FlatList 
          keyExtractor={(item, index) => `${index}`}
          horizontal
          data={tasks}
          renderItem={({ item: task }) => (
            <Task key={task} text={task} />
          )}
        />
      </View>
      <Button onPress={() => submitNewAspect()} style={styles.submitBtn} title='Submit' />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  newTaskContainer: {
    ...theme.layout.flex.row,  
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  newAspectModal: {
    paddingTop: '20%',
    paddingBottom: '20%',
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '100%'
  },
  swtichContainer: {       
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  taskCreatorInput: {         
    borderRadius: 10, 
    fontSize: theme.fonts.sizes.small, 
    borderColor: 'gray', 
    borderWidth: 1, 
    width: '80%',
    paddingLeft: '2%',
    height: 30,
  },
  importanceInput: { 
    borderRadius: 10, 
    height: 80, 
    fontSize: theme.fonts.sizes.small, 
    borderColor: 'gray', 
    borderWidth: 1,
    padding: '2%',
  },
  aspectTitleInput: { 
    borderRadius: 10, 
    fontSize: theme.fonts.sizes.small, 
    height: 30,
    borderColor: 'gray', 
    borderWidth: 1 ,
    paddingLeft: '2%',
  },
  submitBtn: {
    paddingBottom: '4%',
  },
  newTaskBtn: {
    width: '15%',
    backgroundColor: 'black',
    height: 40,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 10, 
  },
})

export default AddNewAspect