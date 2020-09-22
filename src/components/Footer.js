import React, {useContext} from 'react'
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
import {ModalContext} from '../state/modal.context'
import { theme } from '../assets/utils'


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
        height: '10%',
        width: '100%',
        backgroundColor: 'green',
        position: 'absolute',
        bottom: 0
    },
    plus: {
        fontSize: theme.fonts.sizes.xlarge,
        color: 'white',
        textAlign: 'center'
    }
})

export default Footer