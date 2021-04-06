import React, { useContext } from 'react'
import AppBar from './AppBar'

import Sidebar from './Sidebar'
import AppContext, { AppContextType } from '../contexes/AppContext'

import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  CollectionIcon,
  CubeIcon,
  UserGroupIcon,
  BellIcon,
  CogIcon,
} from '@heroicons/react/outline'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  const ctx = useContext<AppContextType>(AppContext)

  const items = [
    { link: '/', name: 'Home', icon: HomeIcon },
    { link: '/search', name: 'Search', icon: SearchIcon },
    { link: `/user/${ctx.username}`, name: 'Profile', icon: UserIcon },
    { link: '/boards', name: 'Boards', icon: CollectionIcon },
    { link: '/projects', name: 'Projects', icon: CubeIcon },
    { link: '/teams', name: 'Teams', icon: UserGroupIcon },
    { link: '/notifications', name: 'Notifications', icon: BellIcon },
    { link: '/settings', name: 'Settings', icon: CogIcon },
  ]

  return (
    <div className="h-screen flex">
      <Sidebar items={items} className="mt-12" />
      <AppBar className="fixed w-full" />
      <div className="ml-48 mt-12">{children}</div>
    </div>
  )
}

export default Layout
