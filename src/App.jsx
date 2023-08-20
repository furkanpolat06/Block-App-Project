import { useState } from 'react'
import './index.css'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
       
    </>
  )
}

export default App