import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { theme } from '../assets/utils'
import { AspectsContext } from '../state'
// import { useAspects } from '../hooks/aspects.hook'
import Card from './Card'
import Task from './Task'

const TasksContainer = ({ type }) => {
  const [state, dispatch] = useContext(AspectsContext)
  const { aspects } = state

  const getTasks = (type) => {
    let matches = aspects.filter(aspect => aspect.type === type)
    let taskArrays = matches.map(el => el.tasks).concat()
    return [].concat.apply([], taskArrays)
  }
  return(
    <View style={styles.container}>
      <Text style={[theme.fonts.types.subHeading, {
        paddingBottom: '4%' 
      }]}>{type === 'long' ? 'Long Term Tasks' : 'Short Term Tasks'}</Text>
      <ScrollView 
        horizontal={true} 
        showsVerticalScrollIndicator={false} 
        showsHorizontalScrollIndicator={false}
      >
        <FlatList 
          contentContainerStyle={{
            height: 140,
            display: 'flex',
            justifyContent: 'space-between' 
          }}
          key={aspects.length}
          keyExtractor={(item, index) => `${index}`}
          numColumns={Math.ceil(getTasks(type).length / 2)}
          data={getTasks(type)}
          renderItem={({ item: task }) => (
            <Task text={task} style={{
            }}/>
          )}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    height: 200,
    paddingLeft: '4%', 
  },
})

export default TasksContainer