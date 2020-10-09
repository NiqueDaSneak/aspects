import React, { useState, useCallback } from 'react'

export const useAspects = () => {
  const [aspects, setAspects] = useState([{title: 'test'}])
  const addNewAspect = (newAspect) => {

    console.log('inside addNewAspect: ', newAspect)
    setAspects(oldAspects => setAspects([...oldAspects, newAspect]))
  }

  const getTasks = useCallback((type) => {
    let matches = aspects.filter(aspect => aspect.type === type)
    let taskArrays = matches.map(el => el.tasks).concat()
    return [].concat.apply([], taskArrays)
  })

  return {
    aspects: aspects,
    addNewAspect: addNewAspect,
    getTasks: getTasks,
  }
}