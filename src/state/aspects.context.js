import React, { useReducer, createContext } from 'react'
import PropTypes from 'prop-types'

export const AspectsContext = createContext()

const initialState = {
  aspects: [
    {
      'title': 'Aspect Title',
      'type': 'long',
      'importanceStatement': 'This is a statement of importance. ',
      // eslint-disable-next-line quotes
      'tasks': ["This is the max task length, tested and secured bb bbb", "This is the max task length, tested and secured bb bbb"]
    },
    {
      'title': 'Aspect Title',
      'type': 'long',
      'importanceStatement': 'This is a statement of importance. ',
      // eslint-disable-next-line quotes
      'tasks': ["This is the max task length, tested and secured bb bbb", "This is the max task length, tested and secured bb bbb"]
    },
    {
      'title': 'Aspect Title',
      'type': 'short',
      'importanceStatement': 'This is a statement of importance. ',
      // eslint-disable-next-line quotes
      'tasks': ["This is the max task length, tested and secured bb bbb", "This is the max task length, tested and secured bb bbb"]
    },
    {
      'title': 'Aspect Title',
      'type': 'long',
      'importanceStatement': 'This is a statement of importance. ',
      // eslint-disable-next-line quotes
      'tasks': ["This is the max task length, tested and secured bb bbb", "This is the max task length, tested and secured bb bbb"]
    },
  ],
}

const reducer = (state, action) => {
  switch (action.type) {
  case 'ADD_NEW_ASPECT':
    return {
      aspects: [...state.aspects, action.payload]
    }
  default:
    throw new Error()
  }
}

export const AspectsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AspectsContext.Provider value={[state, dispatch]}>
      {children}
    </AspectsContext.Provider>
  )
}

AspectsContextProvider.propTypes = {
  children: PropTypes.any
}