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
      <Text style={[theme.fonts.types.heading, { paddingBottom: '4%' }]}>Aspects</Text>
      <View styles={styles.cardContainer}>
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

    </View>
  )
}

const styles = StyleSheet.create({
  
  cardContainer: { 
    height: '10%', 
    width: '100%', 
    backgroundColor: 'blue',
  },
  container: {
    marginTop: '10%',
    height: 370,
    backgroundColor: 'pink',
    paddingLeft: '4%', 
  },
})

export default AspectsContainer