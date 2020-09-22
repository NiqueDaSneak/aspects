import React, {useState, useRef} from 'react'
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
import Modal from './src/components/Modal'
import Footer from './src/components/Footer'
import { ModalContext } from './src/state/modal.context'
import { useModal } from './src/hooks/modal.hook'


const App = () => {

    const modal = useModal()

    return (
        <ModalContext.Provider value={modal}>
            <View style={styles.page}>
                <Footer />
                <Modal />
            </View>
        </ModalContext.Provider>
    )
}

const styles = StyleSheet.create({
    page: {
        height: '100%',
        width: '100%',
        backgroundColor: 'grey',
    },
})

export default App