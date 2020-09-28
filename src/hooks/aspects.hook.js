import React, { useState, useCallback } from 'react'

export const useAspects = () => {
  // const [aspects, setAspects] = useState([])
  const [aspects, setAspects] = useState([
    {
      'title': 'This is the title',
      'type': 'long',
      'importanceStatement': 'This is important ',
      'tasks': [
        'Something is going good',
        'Bet I like this',
        'Wtf going on that I can believe. '
      ]
    },
    {
      'title': 'This is the title',
      'type': 'long',
      'importanceStatement': 'This is important ',
      'tasks': [
        'Something is going good',
        'Bet I like this',
        'Wtf going on that I can believe. '
      ]
    },
    {
      'title': 'This is the title',
      'type': 'long',
      'importanceStatement': 'This is important ',
      'tasks': [
        'Something is going good',
        'Bet I like this',
        'Wtf going on that I can believe. '
      ]
    },
    {
      'title': 'This is the title',
      'type': 'short',
      'importanceStatement': 'This is important ',
      'tasks': [
        'Something is going good',
        'Bet I like this',
        'Wtf going on that I can believe. '
      ]
    },
    {
      'title': 'This is the title',
      'type': 'short',
      'importanceStatement': 'This is important ',
      'tasks': [
        'Something is going good',
        'Bet I like this',
        'Wtf going on that I can believe. '
      ]
    },

    {
      'title': 'This is the title',
      'type': 'short',
      'importanceStatement': 'This is important ',
      'tasks': [
        'Something is going good',
        'Bet I like this',
        'Wtf going on that I can believe. '
      ]
    },

  ])

  const addNewAspect = useCallback((newAspect) => {
    setAspects(oldAspects => setAspects([...oldAspects, newAspect]))
  },
  [],
  )

  const getLongTasks = useCallback(() => {
    console.log('inside getLongTasks')
    let matches = aspects.filter(aspect => aspect.type === 'long')
    console.log('matches: ', matches)
    let longTaskArrays = matches.map(el => el.tasks).concat()
    // matches.forEach(match => {
    //   longTasks.concat(match.tasks)
    // })
    console.log('longTasks: ', [].concat.apply([], longTaskArrays))
    return [].concat.apply([], longTaskArrays)
  })

  return {
    aspects: aspects,
    addNewAspect: addNewAspect,
    getLongTasks: getLongTasks,
  }
}