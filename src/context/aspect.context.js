import React, { useReducer, createContext } from 'react'

export const AspectContext = createContext()

const initialState = {
  aspects: [{
    title: 'testing' 
  }, {
    title: 'another one' 
  },{
    title: 'testing' 
  }, {
    title: 'another one' 
  },{
    title: 'testing' 
  }],
  loading: false,
  error: null
}

const reducer = (state, action) => {
  switch (action.type) {
  case 'ADD_NEW_ASPECT':
    return {
      aspects: [...state.aspects, action.payload]
    }
  // case 'DEL_CONTACT':
  //   return {
  //     contacts: state.contacts.filter(
  //       contact => contact.id !== action.payload
  //     )
  //   }
  // case 'START':
  //   return {
  //     loading: true
  //   }
  // case 'COMPLETE':
  //   return {
  //     loading: false
  //   }
  default:
    throw new Error()
  }
}

export const AspectsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AspectContext.Provider value={[state, dispatch]}>
      {children}
    </AspectContext.Provider>
  )
}