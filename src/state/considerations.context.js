import React, { useReducer, createContext } from 'react'

export const ConsiderationContext = createContext()

const initialState = {
  considerations: []
}

const reducer = (state, action) => {
  switch (action.type) {
  case 'ADD_NEW':
    return {
      considerations: [...state.considerations, action.newConsideration]
    }
  // case 'OPEN_MODAL':
  //   return {
  //     modalActive: true,
  //     modalType: action.modalType,
  //     modalData: action.modalData
  //   }
  // case 'CLOSE_MODAL':
  //   return {
  //     modalVisible: false
  //   }
  default:
    throw new Error()
  }
}

export const ConsiderationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ConsiderationContext.Provider value={[state, dispatch]}>
      {children}
    </ConsiderationContext.Provider>
  )
}
