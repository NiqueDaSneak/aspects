import { Alert } from 'react-native'

const showAspectsTooltip = (modalDispatch) => {
  
  Alert.alert(
    'Alert Title',
    'This is my description. I am not sure how long it can be, but boy, this shit better be long. Lets see. Nope, I guess it can be longer. Lets test the limits here. How much bullshit can you come up with. Right now, with this YG going crazy; come on, my guy.',
    [
      {
        text: 'Create My First Aspect',
        onPress: () => modalDispatch({
          type: 'OPEN_MODAL',
          modalType: 'ADD_NEW_ASPECT' 
        }),
      },
      {
        text: 'Learn More',
        onPress: () => console.log('Learn More')
      },
      {
        text: 'Go Back',
        onPress: () => console.log('Go Back'), 
        style: 'destructive'
      }
    ],
    {
      cancelable: false 
    }
  )
}

export default showAspectsTooltip