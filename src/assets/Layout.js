import React from 'react'
import Footer from '../components/Footer'
import ModalConductor from '../components/Modals/ModalConductor'
import { useModal } from '../hooks/modal.hook'

const Layout = ({ children }) => {
  const  { modalActive, openModal, modalType } = useModal()

  return(
    <>
      {children}
      <Footer openModal={(type) => openModal(type)} />
      <ModalConductor modalType={modalType} modalActive={modalActive} />
    </>
  )
}

export default Layout