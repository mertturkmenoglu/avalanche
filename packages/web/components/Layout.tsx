import React, { useContext } from 'react';
import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  CollectionIcon,
  CubeIcon,
  UserGroupIcon,
  BellIcon,
  CogIcon,
} from '@heroicons/react/outline';
import AppBar from './AppBar';

import Sidebar from './Sidebar';
import { AppContext, AppContextType } from '../contexes/AppContext';
import FlameIcon from './FlameIcon';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  const ctx = useContext<AppContextType>(AppContext);

  const items = [
    { link: '/', name: 'Home', icon: HomeIcon },
    { link: '/search', name: 'Search', icon: SearchIcon },
    { link: `/user/${ctx.username}`, name: 'Profile', icon: UserIcon },
    { link: '/boards', name: 'Boards', icon: CollectionIcon },
    { link: '/projects', name: 'Projects', icon: CubeIcon },
    { link: '/teams', name: 'Teams', icon: UserGroupIcon },
    { link: '/notifications', name: 'Notifications', icon: BellIcon },
    { link: '/settings', name: 'Settings', icon: CogIcon },
  ];

  return (
    <div className="h-screen flex overflow-hidden">
      <div className="hidden lg:block w-48">
        <div className="dark:bg-gray-700">
          <div className="flex items-center justify-center py-2">
            <FlameIcon />
          </div>
          <Sidebar items={items} className="h-screen"/>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <AppBar className="w-full pr-2" />
        <main className="overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
