import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { theme } from '../assets/utils'
import { AspectsContext } from '../state'
import Consideration from './Consideration'

const ConsiderationsContainer = ({ type }) => {
  const [state, dispatch] = useContext(AspectsContext)
  const { aspects } = state

  const getConsiderations = (type) => {
    let matches = aspects.filter(aspect => aspect.type === type)
    let considerationArrays = matches.map(el => el.considerations).concat()
    return [].concat.apply([], considerationArrays)
  }
  
  return(
    <View style={styles.container}>
      <Text style={[theme.fonts.types.subHeading, {
        paddingBottom: '4%' 
      }]}>{type === 'long' ? 'Long Term Considerations' : 'Short Term Considerations'}</Text>
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
    // height: 200,
    paddingLeft: '4%', 
    // backgroundColor: 'pink'
  },
})

// ConsiderationsContainer.propTypes = {
//   type: PropTypes.string,
// }

export default ConsiderationsContainer