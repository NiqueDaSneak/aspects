import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import {theme} from '../assets/utils'

const Task = ({style, text}) => {
    return(
        <View style={[styles.containerStyle, style]}>
            <TouchableOpacity onPress={() => console.log('pressed')}>
                <Text style={styles.taskBtn}>+</Text>
            </TouchableOpacity>
            <Text style={styles.taskText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        height: '16vh', 
        width: '44vw', 
        borderColor: 'gray',
        borderWidth: 1, 
        borderRadius: '4vw',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskBtn: {
        fontSize: '30pt',
        marginLeft: '30%',
    },
    taskText: {
        width: '66%',
        marginLeft: '10%',
        fontSize: theme.fonts.sizes.xsmall
    } 
})
export default Task