import React, { useState, useCallback } from 'react'
// import ModalContext from '../state/modal.context'

export const useModal = () => {
  const [modalActive, setModalActive] = useState(false)

  const openModal = useCallback(() => {
    console.log('in hook')
    console.log('before set', modalActive)
    setModalActive(true)
    console.log('after set', modalActive)
  },
  [],
  )

  return {
    modalActive,
    openModal

  }
}