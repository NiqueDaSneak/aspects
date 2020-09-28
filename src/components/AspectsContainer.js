import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { theme } from '../assets/utils'
import { useAspects } from '../hooks/aspects.hook'
import Card from './Card'

const AspectsContainer = () => {
  const  { aspects } = useAspects()

  return(
    <View style={styles.container}>
      <Text style={[theme.fonts.types.heading, {
        paddingBottom: '4%' 
      }]}>Aspects</Text>
      <ScrollView 
        horizontal={true} 
        showsVerticalScrollIndicator={false} 
        showsHorizontalScrollIndicator={false}
      >
        <FlatList 
          keyExtractor={(item, index) => `${index}`}
          // horizontal
          numColumns={Math.ceil(aspects.length / 2)}
          data={aspects}
          renderItem={({ item: aspect }) => (
            <Card aspect={aspect}/>
          )}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    height: 370,
    paddingLeft: '4%', 
  },
})

export default AspectsContainer