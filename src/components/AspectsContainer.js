import React, { useContext } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../assets/utils'
import Card from './Card'
import { AspectContext } from '../context/aspect.context'

const AspectsContainer = ({ openModal }) => {

  const [state] = useContext(AspectContext)
  const { aspects } = state

  return(
    <Container>
      <TouchableOpacity on onPress={() => openModal('ADD_NEW_ASPECT')}>
        <Card disabled /> 
      </TouchableOpacity>
      <FlatList
        key={Math.random()}        
        keyExtractor={(item, index) => `${index}`}
        numColumns={Math.ceil(aspects.length / 2)}
        data={aspects}
        renderItem={({ item: aspect }) => (
          <Card data={aspect} />
        )}
      />
    </Container>
  ) 
}

const Container = ({ children }) => (
  <View style={styles.container}>
    <Text style={[theme.fonts.types.heading, {
      paddingBottom: '4%' 
    }]}>Aspects</Text>
    <ScrollView 
      horizontal={true} 
      showsVerticalScrollIndicator={false} 
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </View>
)


const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    height: 370,
    paddingLeft: '4%', 
  },
})

export default AspectsContainer