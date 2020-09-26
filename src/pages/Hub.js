import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import AspectsContainer from '../components/AspectsContainer'

const Hub = () => {
  return(
    <ScrollView style={styles.page}>
      <AspectsContainer />
      {/* <View style={styles.aspectsContainer}>
        
      </View> */}
      <View style={styles.shortTasks}>

      </View>
      <View style={styles.longTasks}>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page: {
    // height: '50%',
    // width: '100%',
    backgroundColor: 'grey',
  },
  // aspectsContainer: {
  //   marginTop: '10%',
  //   height: '33%',
  //   backgroundColor: 'pink'
  // },
  shortTasks: {
    height: '33%',
    backgroundColor: 'red'
  },
  longTasks: {
    height: '33%',
    backgroundColor: 'orange'
  },
})

export default Hub