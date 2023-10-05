import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login,Account } from './pages'
import { Routes, Route } from 'react-router-dom'
import ModalContextProvider from './context/ModalContext.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ModalContextProvider>
          <Routes>
            <Route path='/' element={ <Login />} />
            <Route path='/login/*' element={<Login />} />
            <Route path='/account/*' element={<Account />} />
            {/* <Route path='/*' element={<div>Sorry Page Not Found!</div> } /> */}
            </Routes>
        </ModalContextProvider>
    </>
  )
}

export default App
