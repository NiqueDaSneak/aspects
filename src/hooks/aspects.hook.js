import React, { useState, useCallback } from 'react'

export const useAspects = () => {
  const [aspects, setAspects] = useState([])

  const addNewAspect = useCallback((newAspect) => {
    setAspects(oldAspects => setAspects([...oldAspects, newAspect]))
  },
  [],
  )

  return {
    aspects: aspects,
    addNewAspect: addNewAspect
  }
}