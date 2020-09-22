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
        // height: '100%', 
        // width: '50%', 
        borderColor: 'gray',
        borderWidth: 1, 
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
        // paddingLeft: '5%'
    },
    taskBtn: {
        fontSize: theme.fonts.sizes.large,
        // marginLeft: '10%',
    },
    taskText: {
        width: '66%',
        // marginLeft: '0%',
        fontSize: theme.fonts.sizes.small
    } 
})
export default Task