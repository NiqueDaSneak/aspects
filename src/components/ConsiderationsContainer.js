import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { theme } from '../assets/utils'
import { AspectsContext, ModalContext } from '../state'
import Consideration from './Consideration'
import showAspectsTooltip from './Modals/showAspectsTooltip'

const ConsiderationsContainer = ({ type }) => {
  const [aspectsState, aspectsDispatch] = useContext(AspectsContext)
  const { aspects } = aspectsState
  const [modalState, modalDispatch] = useContext(ModalContext)

  const getConsiderations = (type) => {
    let matches = aspects.filter(aspect => aspect.type === type)
    let considerationArrays = matches.map(el => el.considerations).concat()
    return [].concat.apply([], considerationArrays)
  }
  
  return(
    <View style={styles.container}>
      <View style={{
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        paddingBottom: '4%' 

      }}>
        <Text style={theme.fonts.types.subHeading}>
          {type === 'long' ? 'Long Term Considerations' : 'Short Term Considerations'}
        </Text>
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
        <Consideration creator />
        <FlatList 
          contentContainerStyle={{
            height: 140,
            display: 'flex',
            justifyContent: 'space-between' 
          }}
          key={aspects.length}
          keyExtractor={(item, index) => `${index}`}
          numColumns={Math.ceil(getConsiderations(type).length / 2)}
          data={getConsiderations(type)}
          renderItem={({ item: consideration }) => (
            <Consideration text={consideration} />
          )}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    height: 220,
    paddingLeft: '4%',     
  },
})

export default ConsiderationsContainer