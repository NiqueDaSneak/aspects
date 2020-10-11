import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import AspectsContainer from '../components/AspectsContainer'
import TasksContainer from '../components/TasksContainer'

const Hub = () => {

  return(
    <ScrollView 
      contentContainerStyle={{
        height: 1000 
      }}>
      <AspectsContainer />
      <TasksContainer type='long' />
      <TasksContainer type='short' />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  // page: {
  //   height: 5000,
  //   width: '100%',
  //   backgroundColor: 'grey',
  // },
  contentContainer: {
    
  }
})

export default Hub