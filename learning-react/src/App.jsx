
import { useState } from 'react'
import Login from './projectsComponents/Login'
import Register from './projectsComponents/Register'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Register />} path='/'/>
        <Route element={<Login />} path='/login'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
