import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { theme } from '../assets/utils'
import { useAspects } from '../hooks/aspects.hook'
import Card from './Card'
import Task from './Task'

const AspectsContainer = () => {
  const{ getLongTasks } = useAspects()

  return(
    <View style={styles.container}>
      <Text style={[theme.fonts.types.subHeading, {
        paddingBottom: '4%' 
      }]}>Long Term Tasks</Text>
      <ScrollView 
        horizontal={true} 
        showsVerticalScrollIndicator={false} 
        showsHorizontalScrollIndicator={false}
      >
        <FlatList 
          contentContainerStyle={{
            backgroundColor: 'green',
            height: 140,
            display: 'flex',
            justifyContent: 'space-between' 
          }}
          key={1}
          keyExtractor={(item, index) => `${index}`}
          numColumns={Math.ceil(getLongTasks().length / 2)}
          data={getLongTasks()}
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
    backgroundColor: 'pink',
    paddingLeft: '4%', 
  },
})

export default AspectsContainer