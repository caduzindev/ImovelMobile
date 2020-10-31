import React from 'react'
import Router from './routes'
import ImoveisProvider from './contexts/Imoveis'
import ImovelProvider from './contexts/Imovel'

const App = ()=>{
  return (
    <ImoveisProvider>
      <ImovelProvider>
        <Router/>
      </ImovelProvider>
    </ImoveisProvider>
  )
}

export default App;