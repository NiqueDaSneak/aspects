import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../assets/utils'

const Card = ({ aspectTitle }) => {
  return(
    <View style={styles.card}>
      <View style={styles.content}>

      </View>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: theme.fonts.sizes.small, color: 'red', textAlign: 'center' }}>This is the title at its longest possible</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'black', 
    // height: '20%', 
    width: '100%', 
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,  
    padding: '4%'
  },
  content: {
    backgroundColor: 'orange', 
    height: '90%', 
    width: '100%', 
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15, 
  },
  card: {
    width: 175,
    height: 99,
    backgroundColor: 'white',
    borderRadius: 15,
    marginRight: 20,
    marginBottom: 60,
  },
})

export default Card