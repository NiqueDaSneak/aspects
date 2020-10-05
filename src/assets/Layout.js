import React from 'react'
import Footer from '../components/Footer'
import ModalConductor from '../components/Modals/ModalConductor'
import { useModal } from '../hooks/modal.hook'

const Layout = ({ children }) => {
  const  { modalActive, openModal, modalType, closeModal } = useModal()
  return(
    <>
      {children}
      <Footer modalActive={modalActive} openModal={openModal} />
      <ModalConductor modalActive={modalActive} modalType={modalType} closeModal={closeModal}/>
    </>
  )
}

export default Layout