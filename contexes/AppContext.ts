import {createContext} from 'react'

export interface AppContextType {
  username: string
  userImage: string
}

const AppContext = createContext<AppContextType>({
  username: '',
  userImage: '/profile.png'
})

export default AppContext;