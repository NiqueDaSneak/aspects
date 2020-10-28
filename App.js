import React from 'react'
import Layout from './src/assets/Layout'
import Hub from './src/pages/Hub'
import ModalConductor from './src/components/Modals/ModalConductor'
import { AspectsContextProvider } from './src/state/aspects.context'
import { ModalContextProvider } from './src/state/modal.context'
import { ConsiderationContextProvider } from './src/state/considerations.context'
const App = () => {
  return (
    <>
      <ModalContextProvider>
        <AspectsContextProvider>
          <ConsiderationContextProvider>
            <Layout>
              <Hub />
            </Layout>
            <ModalConductor />
          </ConsiderationContextProvider>
        </AspectsContextProvider>
      </ModalContextProvider>
    </>
  )
}

export default App