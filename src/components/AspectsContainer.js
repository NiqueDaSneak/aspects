import React, { useContext } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../assets/utils'
import Card from './Card'
import { AspectsContext, ModalContext } from '../state'
import PropTypes from 'prop-types'

const AspectsContainer = () => {

  const [aspectState] = useContext(AspectsContext)
  const { aspects } = aspectState
  // eslint-disable-next-line no-unused-vars
  const [modalState, modalDispatch] = useContext(ModalContext)

  return(
    <Container>
      <TouchableOpacity on onPress={() => modalDispatch({
        type: 'OPEN_MODAL',
        payload: 'ADD_NEW_ASPECT' 
      })}>
        <Card disabled /> 
      </TouchableOpacity>
      <FlatList
        key={aspects.length}        
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

const Container = ({children}) => (
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

Container.propTypes = {
  children: PropTypes.any,
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    height: 370,
    paddingLeft: '4%', 
  },
})

export default AspectsContainer