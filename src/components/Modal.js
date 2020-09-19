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
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import Animations from '../assets/animations'
import {ModalContext} from '../state/modal.context'
import {theme} from '../assets/utils'
import Task from './Task'

const Modal = () => {

    const {modalActive} = useContext(ModalContext)

    const [aspectTitle, setAspectTitle] = useState('Useless Placeholder')
    const [aspectType, setAspectType] = useState(false)
    const [importance, setImportance] = useState('')
    const [taskCreatorInputValue, setTaskCreatorInputValue] = useState('')
    const [tasks, setTasks] = useState([])
    const toggleSwitch = () => setAspectType(previousState => !previousState)
    const addNewTask = () => {
        // console.log(taskText)
        setTasks(tasks => [...tasks, taskCreatorInputValue])
        // console.log(tasks)
        setTaskCreatorInputValue('')
    }
    const submitNewAspect = () => {
        console.log('aspectTitle: ', aspectTitle)
        console.log('aspectType: ', aspectType === false ? 'short' : 'long')
        console.log('importance: ', importance)
        console.log('tasks', tasks)
    }

    return(
        <Animatable.View animation={ modalActive ? Animations.slideUp : null} style={styles.modal}>
            <Text style={{marginTop: '4%', textAlign: 'center', fontSize: theme.fonts.sizes.large}}>Add New Aspect</Text>
            <Text style={{marginTop: '4%', fontSize: theme.fonts.sizes.small}}>Give Your Aspect A Title</Text>
            <TextInput
                clearTextOnFocus
                style={styles.aspectTitleInput}
                onChangeText={text => setAspectTitle(text)}
                value={aspectTitle}
            /> 
            <Text style={{marginTop: '4%', fontSize: theme.fonts.sizes.small}}>Is this a short term or long term consideration?</Text>
            <View style={styles.swtichContainer}>
                <Text style={{fontSize: theme.fonts.sizes.medium}}>Short Term</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={aspectType ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={aspectType}
                />
                <Text style={{fontSize: theme.fonts.sizes.medium}}>Long Term</Text>
            </View>
            <Text style={{marginTop: '4%', fontSize: theme.fonts.sizes.small}}>Why is this important to you?</Text>
            <TextInput
                multiline = {true}
                numberOfLines = {4}
                style={styles.importanceInput}
                onChangeText={text => setImportance(text)}
                value={importance}
            />
            <Text style={{marginTop: '4%', fontSize: theme.fonts.sizes.small}}>What tasks will address this?</Text>
            <View style={[theme.layout.flex.row, {marginTop: '2%', alignItems: 'center'}]}>
                <TextInput
                    maxLength={54}
                    style={styles.taskCreatorInput}
                    onChangeText={text => setTaskCreatorInputValue(text)}
                    value={taskCreatorInputValue}
                />
                <View style={styles.newTaskBtn}>
                    <TouchableOpacity onPress={() => addNewTask()}>
                        <Text style={{color: 'white', fontSize: '16pt'}}>+</Text>
                    </TouchableOpacity> 
                </View>
            </View>
            <View style={styles.taskContainer}>
                {tasks.map(task => (
                    <Task key={task} text={task} style={{marginRight: '2%', marginBottom: '2%'}} />
                ))}
            </View>
            <Button onPress={() => submitNewAspect()} style={styles.submitBtn} title='submit' />
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    swtichContainer: {       
        marginTop: '4%',
        marginBottom: '4%',
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly'
    },
    taskCreatorInput: {         
        borderRadius: '10px', 
        fontSize: theme.fonts.sizes.small, 
        minHeight: '6vh',
        borderColor: 'gray', 
        borderWidth: 1, 
        width: '80vw',
        paddingLeft: '2%',
    },
    importanceInput: { 
        borderRadius: '10px', 
        minHeight: '20vh', 
        marginTop: '2%', 
        fontSize: theme.fonts.sizes.small, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: '2%',
    },
    aspectTitleInput: { 
        borderRadius: '10px', 
        marginTop: '2%', 
        fontSize: theme.fonts.sizes.small, 
        minHeight: '6vh',
        borderColor: 'gray', 
        borderWidth: 1 ,
        paddingLeft: '2%',
    },
    // submitBtn: {
    //     paddingBottom: '4%',
    // },
    newTaskBtn: {
        width: '10vw',
        backgroundColor: 'black',
        height: '10vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: '10px', 
    },
    modal: {
        paddingRight: '4%',
        paddingLeft: '4%',
        height: '100%',
        width: '100%',
        backgroundColor: 'lightgrey',
        position: 'fixed',
        bottom: '-100vh',
        // color: 'white',
        display: 'flex',
        // justifyContent: 'space-between'
        overflow: 'scroll'
    },
    taskContainer: {
        marginTop: '4%',
        marginBottom: '4%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        justifyContent: 'center',
    }
})

export default Modal