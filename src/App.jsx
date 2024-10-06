import React from 'react'
import Navbar from './components/Navbar'
import NavLink from './components/NavLink'
import Content from './components/Content'

const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <NavLink />
      <Content />
    </div>
  )
}

export default App