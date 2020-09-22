import React, {useState, useRef, useContext} from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Animated, 
    Switch,
    TextInput,
    Button,
    KeyboardAvoidingView,
    ScrollView,
    Dimensions
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Animations from '../assets/animations'
import {ModalContext} from '../state/modal.context'
import {theme} from '../assets/utils'
import Task from './Task'
import { FlatList } from 'react-native-gesture-handler'

const Modal = () => {

    const {modalActive} = useContext(ModalContext)

    const [aspectTitle, setAspectTitle] = useState('Useless Placeholder')
    const [aspectType, setAspectType] = useState(false)
    const [importance, setImportance] = useState('')
    const [taskCreatorInputValue, setTaskCreatorInputValue] = useState('')
    const [tasks, setTasks] = useState([])

    // const taskCreatorRef = useRef(null)

    const toggleSwitch = () => setAspectType(previousState => !previousState)

    const addNewTask = () => {
        setTasks(tasks => [...tasks, taskCreatorInputValue])
        setTaskCreatorInputValue('')
    }

    const submitNewAspect = () => {
        console.log('aspectTitle: ', aspectTitle)
        console.log('aspectType: ', aspectType === false ? 'short' : 'long')
        console.log('importance: ', importance)
        console.log('tasks', tasks)
    }

    const listData = [
        {
            text: 'This is a task text.'
        },
        {
            text: 'This is a task text.'
        },
        {
            text: 'This is a task text.'
        },
        {
            text: 'This is a task text.'
        },
        {
            text: 'This is a task text.'
        }
    ]

    return(
        <Animatable.View animation={ modalActive ? Animations.slideUp : null} style={styles.modal}>
            <KeyboardAvoidingView 
                behavior="padding"
                style={styles.newAspectModal}
            >
                <Text style={{ textAlign: 'center', fontSize: theme.fonts.sizes.large}}>Add New Aspect</Text>
                <Text style={{fontSize: theme.fonts.sizes.small}}>Give Your Aspect A Title</Text>
                <TextInput
                    keyboardAppearance={'dark'}
                    returnKeyType={'done'}          
                    clearTextOnFocus
                    style={styles.aspectTitleInput}
                    onSubmitEditing={text => setAspectTitle(text)}
                    // value={aspectTitle}
                    placeholder="Useless Placeholder"
                /> 
                <Text style={{fontSize: theme.fonts.sizes.small}}>Is this a short term or long term consideration?</Text>
                <View style={styles.swtichContainer}>
                    <Text style={{fontSize: theme.fonts.sizes.small}}>Short Term</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={aspectType ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={aspectType}
                    />
                    <Text style={{fontSize: theme.fonts.sizes.small}}>Long Term</Text>
                </View>
                <Text style={{fontSize: theme.fonts.sizes.small}}>Why is this important to you?</Text>
                <TextInput
                    keyboardAppearance={'dark'}
                    blurOnSubmit={true}
                    returnKeyType={'done'}         
                    multiline = {true}
                    numberOfLines = {4}
                    style={styles.importanceInput}
                    onSubmitEditing={text => setImportance(text)}
                    // value={importance}
                />
                <Text style={{fontSize: theme.fonts.sizes.small}}>What tasks will address this?</Text>
                <View style={styles.newTaskContainer}>
                    <TextInput
                        // ref={taskCreatorRef}
                        keyboardAppearance={'dark'}
                        returnKeyType={'done'}                             
                        maxLength={54}
                        style={styles.taskCreatorInput}
                        onChangeText={(text) => {
                            console.log(text)
                            setTaskCreatorInputValue(text)
                        }}   
                        value={taskCreatorInputValue}
                    />
                    <View style={styles.newTaskBtn}>
                        <TouchableOpacity onPress={() => addNewTask()}>
                            <Text style={{ color: 'white', fontSize: theme.fonts.sizes.medium}}>+</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
                <View style={{width: '100%', height: 60, backgroundColor: 'red'}}>
                    <FlatList 
                        keyExtractor={(item, index) => `${index}`}
                        horizontal
                        data={tasks}
                        // data={listData}
                        renderItem={({item: task}) => (
                            <View 
                                style={{
                                    // width: 300,
                                    paddingLeft: 40,
                                    paddingRight: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1, 
                                    borderRadius: 4,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around'
                                }} 
                                key={task.text}
                            >
                                <TouchableOpacity onPress={() => console.log('pressed')}>
                                    <Text style={{fontSize: theme.fonts.sizes.large}}>+</Text>
                                </TouchableOpacity>
                                <Text style={styles.taskText}>{task}</Text>
                            </View>
                        )}
                    />
                </View>
                <Button onPress={() => submitNewAspect()} style={styles.submitBtn} title='Submit' />
            </KeyboardAvoidingView>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    newTaskContainer: {
        ...theme.layout.flex.row,  
        // backgroundColor: 'pink', 
        // height: '5%',
        // marginTop: '2%', 
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
        // marginTop: '4%',
        // marginBottom: '4%',
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
        height: 40,

    },
    importanceInput: { 
        borderRadius: 10, 
        height: 80, 
        // marginTop: '2%', 
        fontSize: theme.fonts.sizes.small, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: '2%',
    },
    aspectTitleInput: { 
        borderRadius: 10, 
        // marginTop: '2%', 
        fontSize: theme.fonts.sizes.small, 
        height: 40,
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
    modal: {
        // flex: 1,
        paddingRight: '4%',
        paddingLeft: '4%',
        height: '100%',
        width: '100%',
        backgroundColor: 'lightgrey',
        position: 'absolute',
        bottom: '-100%',
        // color: 'white',
        display: 'flex',
        // justifyContent: 'space-between'
        overflow: 'scroll'
    },
})

export default Modal