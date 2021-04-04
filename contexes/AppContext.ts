import {createContext} from 'react'

export interface AppContextType {
  username: string
}

const AppContext = createContext<AppContextType>({
  username: '',
})

export default AppContext;