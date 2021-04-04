import { useContext } from 'react'
import { useRouter } from 'next/router'

import AppContext from '../contexes/AppContext'
import Dropdown from './Dropdown'

const AppBar = (): JSX.Element => {
  const ctx = useContext(AppContext)
  const router = useRouter()

  const menuItemClasses =
    'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'

  const logout = () => {
    router.push('/login')
  }

  return (
    <div className="bg-gray-white h-12 flex flex-row py-2 px-4 border-b-2 border-gray-100">
      <Dropdown className="ml-auto" title={ctx.username}>
        <div className="py-1" role="none">
          <div className={menuItemClasses} role="menuitem">
            Profile
          </div>
          <div className={menuItemClasses} role="menuitem">
            Settings
          </div>
        </div>
        <div className="py-1" role="none">
          <div className={menuItemClasses} role="menuitem" onClick={logout}>
            Logout
          </div>
        </div>
      </Dropdown>
    </div>
  )
}

export default AppBar
