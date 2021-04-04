import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  HomeIcon,
  UserIcon,
  CollectionIcon,
  UserGroupIcon,
  BellIcon,
  CogIcon,
} from '@heroicons/react/outline'

import AppContext, { AppContextType } from '../contexes/AppContext'

const Sidebar = (): JSX.Element => {
  const ctx = useContext<AppContextType>(AppContext)
  const router = useRouter()

  const navElementClasses =
    'my-2 pl-4 py-2 rounded-full cursor-pointer hover:bg-green-50 flex'
  const navElements = [
    { link: '/', name: 'Home', icon: HomeIcon },
    { link: `/user/${ctx.username}`, name: 'Profile', icon: UserIcon },
    { link: '/boards', name: 'Boards', icon: CollectionIcon },
    { link: '/teams', name: 'Teams', icon: UserGroupIcon },
    { link: '/notifications', name: 'Notifications', icon: BellIcon },
    { link: '/settings', name: 'Settings', icon: CogIcon },
  ]

  return (
    <div>
      <nav>
        <div className="mx-4 mt-8">
          {navElements.map((it) => {
            const IconTag = it.icon
            return (
              <Link key={it.link} href={it.link}>
                <div
                  className={
                    it.link !== router.pathname
                      ? navElementClasses
                      : `${navElementClasses} bg-green-50`
                  }
                >
                  <IconTag className="h-6 w-6 mr-2" /> {it.name}
                </div>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
