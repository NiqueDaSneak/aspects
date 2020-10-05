import React, { useState, useCallback } from 'react'

export const useModal = () => {

  const [modalActive, setModalActive] = useState(false)
  const [modalType, setModalType] = useState()


  const openModal = useCallback((type) => {
    
    setModalType(type)
    setModalActive(true)
  },
  [modalActive],
  )

  const closeModal = useCallback(() => {
    // setModalType(type)
    setModalActive(false)
  },
  [modalActive],
  )

  return {
    modalActive,
    openModal,
    closeModal,
    modalType
  }
}