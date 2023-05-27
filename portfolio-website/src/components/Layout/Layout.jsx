import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import './Layout.css'

import React from 'react'

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar/>
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>
        <Outlet/>
        <span className='tags bottom-tags' id='bottom-tags'>&lt;/body&gt;</span>
      </div>
    </div>
    
  )
}

export default Layout