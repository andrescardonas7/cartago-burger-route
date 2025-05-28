import React from 'react'
import BurgerRoute from './components/BurgerRoute'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Ruta de Hamburguesas - Cartago
        </h1>
        <BurgerRoute />
      </div>
    </div>
  )
}

export default App 