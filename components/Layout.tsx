import React from 'react'
import AppBar from './AppBar'

import Sidebar from './Sidebar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="h-screen flex">
      <div className="w-64 border-r-2 border-gray-100">
        <Sidebar />
      </div>
      <div className="flex-1">
        <div className="flex flex-col">
          <AppBar />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
