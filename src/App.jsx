import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
<<<<<<< HEAD
import Sidebar from './components/Sidebar'
=======
import Navbar from './components/Navbar'
>>>>>>> 409e545f05e23509d053ae4e0c3291c3ecb107f1

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
