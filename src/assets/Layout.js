import React from 'react'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import { useModal } from '../hooks/modal.hook'

const Layout = ({ children }) => {
    const  { modalActive, openModal } = useModal()

  return(
    <>
      {children}
      <Footer openModal={() => openModal()} />
      <Modal modalActive={modalActive}/>
    </>
  )
}

export default Layout