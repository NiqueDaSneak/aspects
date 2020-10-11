import React from 'react'
import Layout from './src/assets/Layout'
import Hub from './src/pages/Hub'
import ModalConductor from './src/components/Modals/ModalConductor'
import { AspectsContextProvider } from './src/state/aspects.context'
import { ModalContextProvider } from './src/state/modal.context'

const App = () => {
  return (
    <>
      <ModalContextProvider>
        <AspectsContextProvider>
          <Layout>
            <Hub />
          </Layout>
          <ModalConductor />
        </AspectsContextProvider>
      </ModalContextProvider>
    </>
  )
}

export default App