import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { UserIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline'

import AppContext from '../contexes/AppContext'
import Dropdown from './Dropdown'

interface Props {
  className?: string
}

const AppBar = (props: Props): JSX.Element => {
  const ctx = useContext(AppContext)
  const router = useRouter()

  const menuItemClasses =
    'flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer select-none items-center'

  const logout = () => {
    router.push('/login')
  }

  return (
    <div
      className={
        'bg-white h-12 flex flex-row py-2 px-4 border-b-2 border-gray-100 ' +
        props.className
      }
    >
      <Link href="/">
        <>
          <Image src="/mountainsIndigo.svg" alt="Logo" width={48} height={48} />
          <div className="font-sans font-medium tracking-widest text-2xl ml-1 cursor-pointer text-indigo-900 select-none">
            Avalanche
          </div>
        </>
      </Link>
      <Dropdown className="ml-auto" title={ctx.username} imgSrc={ctx.userImage}>
        <div className="py-1" role="none">
          <div className={menuItemClasses} role="menuitem">
            <UserIcon className="w-6 h-6 mr-2" />
            Profile
          </div>
          <div className={menuItemClasses} role="menuitem">
            <CogIcon className="w-6 h-6 mr-2" />
            Settings
          </div>
        </div>
        <div className="py-1" role="none">
          <div className={menuItemClasses} role="menuitem" onClick={logout}>
            <LogoutIcon className="w-6 h-6 mr-2" />
            Logout
          </div>
        </div>
      </Dropdown>
    </div>
  )
}

export default AppBar
