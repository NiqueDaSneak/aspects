import React, { useState, useCallback } from 'react'
import AspectsContext from '../state/aspects.context'

export const useAspects = () => {
  const [aspects, setAspects] = useState([])

  // const openModal = useCallback(() => {
  //   setAspects(true)
  // },
  // [],
  // )

  return {
    aspects: aspects,
    // openModal
  }
}