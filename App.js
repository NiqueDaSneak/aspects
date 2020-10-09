import React from 'react'
import Layout from './src/assets/Layout'
import Hub from './src/pages/Hub'
import ModalConductor from './src/components/Modals/ModalConductor'
import { useModal } from './src/hooks/modal.hook'
import { useAspects } from './src/hooks/aspects.hook'
import { AspectsContextProvider } from './src/context/aspect.context'

const App = () => {
  const  { modalActive, openModal, modalType, closeModal } = useModal()
  // const { addNewAspect, aspects } = useAspects()
  return (
    <>
      <AspectsContextProvider>
        <Layout>
          <Hub openModal={openModal} />
        </Layout>
        <ModalConductor modalActive={modalActive} modalType={modalType} closeModal={closeModal}/>
      </AspectsContextProvider>
    </>
  )
}

export default App