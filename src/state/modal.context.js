import React, { createContext } from 'react'

export const ModalContext = createContext({
    modalActive: false,
    openModal: () => {},
})

