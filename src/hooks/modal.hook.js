import React, { useState, useCallback } from 'react'
import ModalContext from '../state/modal.context'

export const useModal = () => {
    const [modalActive, setModalActive] = useState(false)

    const openModal = useCallback(() => {
        setModalActive(true)
    },
    [],
    )

    return {
        modalActive,
        openModal
    }
}