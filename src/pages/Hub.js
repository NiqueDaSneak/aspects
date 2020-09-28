import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import AspectsContainer from '../components/AspectsContainer'
import LongTasksContainer from '../components/LongTasksContainer'
import { useAspects } from '../hooks/aspects.hook'

const Hub = () => {

  return(
    <ScrollView style={styles.page}>
      <AspectsContainer />
      {/* <View style={styles.aspectsContainer}>
        
      </View> */}
      <LongTasksContainer />
      <View style={styles.shortTasks}>

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