import { createContext } from 'react';

export interface AppContextType {
  username: string
  userImage: string
  appbar: boolean
}

const AppContext = createContext<AppContextType>({
  username: '',
  userImage: '/profile.png',
  appbar: true,
});

export default AppContext;
