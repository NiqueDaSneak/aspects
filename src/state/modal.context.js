import React, { useReducer, createContext } from 'react'

export const ModalContext = createContext()

const initialState = {
  modalActive: false,
  modalType: ''
}

const reducer = (state, action) => {
  switch (action.type) {
  case 'OPEN_MODAL':
    return {
      modalActive: true
    }
  case 'CLOSE_MODAL':
    return {
      modalActive: false
    }
  default:
    throw new Error()
  }
}

export const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ModalContext.Provider value={[state, dispatch]}>
      {children}
    </ModalContext.Provider>
  )
}
