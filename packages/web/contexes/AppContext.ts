import { createContext } from 'react';

export interface AppContextType {
  username: string
  userImage: string
  appbar: boolean
}

export const AppContext = createContext<AppContextType>({
  username: '',
  userImage: '/profile.png',
  appbar: true,
});

export const defaultAppContextValues: AppContextType = {
  username: 'mert',
  userImage: '/profile.png',
  appbar: true,
};
