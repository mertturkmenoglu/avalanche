import React, { useContext } from 'react'
import AppContext from '../contexes/AppContext'

import Sidebar from './Sidebar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  const ctx = useContext(AppContext)

  return (
    <div className="h-screen container flex">
      <div className="w-64 border-r-2 border-gray-100">
        <Sidebar />
      </div>
      <div className="flex-1">
        <div className="flex flex-col">
          <div className="bg-gray-white h-12 flex flex-row py-2 px-4">
            <div className="ml-auto">{ctx.username}</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
