import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddUser from './Component/AddUser'
import { Route, Routes } from 'react-router-dom'
import ViewUser from './Component/ViewUser'
import Update from './Component/Update'
import DisplayUser from './Component/DisplayUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element= {<DisplayUser />} />
      <Route path='/add' element= {<AddUser />} />
      <Route path='/view/:id' element= {<ViewUser />} />
      <Route path='/update/:id' element= {<Update />} />
    </Routes>
    </>
  )
}

export default App
