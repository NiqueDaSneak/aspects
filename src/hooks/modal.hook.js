import React, { useState, useCallback } from 'react'

export const useModal = () => {
  const [modalActive, setModalActive] = useState(false)
  const [modalType, setModalType] = useState()

  const openModal = useCallback((type) => {
    console.log('type: ', type)
    setModalType(type)
    setModalActive(true)
  },
  [],
  )

  const closeModal = useCallback((type) => {
    setModalType(type)
    setModalActive(true)
  },
  [],
  )

  return {
    modalActive,
    openModal,
    closeModal,
    modalType
  }
}