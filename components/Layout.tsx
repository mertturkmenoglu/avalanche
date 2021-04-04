import React from 'react'
import AppBar from './AppBar'

import Sidebar from './Sidebar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="h-screen flex">
      <Sidebar className="h-screen mt-12 fixed overflow-auto border-r-2 border-gray-100" />
      <AppBar className="fixed w-full" />
      <div className="ml-48 mt-12">{children}</div>
    </div>
  )
}

export default Layout
