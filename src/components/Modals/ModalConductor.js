import React, { useContext } from 'react'
// import { useModal } from '../../hooks/modal.hook'
import AddNewAspect from './AddNewAspect'
import AspectDetails from './AspectDetails'
import ConsiderationDetails from './CreateShortTermConsideration'
import { ModalContext } from '../../state'
import CreateShortTermConsideration from './CreateShortTermConsideration'
import CreateLongTermConsideration from './CreateLongTermConsideration'

const ModalConductor = () => {

  const [state, dispatch] = useContext(ModalContext)
  const { modalVisible, modalType } = state


  return(
    <>
      <AddNewAspect visible={modalType === 'ADD_NEW_ASPECT'} />
      <AspectDetails visible={modalType === 'GET_ASPECT_DETAILS'} />
      <CreateShortTermConsideration visible={modalType === 'ADD_SHORT_CONSIDERATION'} />
      <CreateLongTermConsideration visible={modalType === 'ADD_LONG_CONSIDERATION'} />
    </>
  )
}

export default ModalConductor