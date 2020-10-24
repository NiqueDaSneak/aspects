import React, { useContext } from 'react'
// import { useModal } from '../../hooks/modal.hook'
import AddNewAspect from './AddNewAspect'
import AspectDetails from './AspectDetails'
import { ModalContext } from '../../state'

const ModalConductor = () => {

  const [state, dispatch] = useContext(ModalContext)
  const { modalVisible, modalType } = state


  return(
    <>
      <AddNewAspect visible={modalType === 'ADD_NEW_ASPECT'} />
      <AspectDetails visible={modalType === 'GET_ASPECT_DETAILS'} />
    </>
  )
}

export default ModalConductor