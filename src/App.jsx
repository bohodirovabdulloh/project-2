import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', 'night')
  }, [])
  

  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='w-1/6'>
          <Sidebar />
        </div>
        <div className='w-5/6'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
