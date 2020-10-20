import React, { useContext } from 'react'
import { Image, StyleSheet, View, Text, FlatList } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../assets/utils'
import Card from './Card'
import { AspectsContext, ModalContext } from '../state'
import PropTypes from 'prop-types'
import showAspectsTooltip from './Modals/showAspectsTooltip'

const AspectsContainer = () => {

  const [aspectState] = useContext(AspectsContext)
  const { aspects } = aspectState
  // eslint-disable-next-line no-unused-vars
  const [modalState, modalDispatch] = useContext(ModalContext)

  return(
    <Container modalDispatch={modalDispatch}>
      <TouchableOpacity on onPress={() => modalDispatch({
        type: 'OPEN_MODAL',
        modalType: 'ADD_NEW_ASPECT' 
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

const Container = ({ children, modalDispatch }) => (
  <View style={styles.container}>
    <View style={{
      display: 'flex',
      flexDirection: 'row', 
      alignItems: 'center',
      paddingBottom: '4%' 

    }}>
      <Text style={[theme.fonts.types.heading, {
      }]}>Aspects</Text>
      <TouchableOpacity onPress={() => showAspectsTooltip(modalDispatch)}>
        <Image 
          resizeMode="contain"
          resizeMethod="resize"
          style={{
            resizeMode: 'contain',
            marginLeft: 10,
            height: 20,
            width: 20
          }} source={require('../assets/information.png')} />
      </TouchableOpacity>
    </View>
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
  modalDispatch: PropTypes.any
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    height: 370,
    paddingLeft: '4%', 
  },
})

export default AspectsContainer