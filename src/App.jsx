import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='w-1/4'>
          <Sidebar />
        </div>
        <div className='w-3/4'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
