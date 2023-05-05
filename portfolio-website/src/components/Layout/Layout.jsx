import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import './Layout.css'

import React from 'react'

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar/>
      <div className='page'>
        <Outlet/>

      </div>
    </div>
    
  )
}

export default Layout