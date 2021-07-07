import React, { useContext } from 'react';

import {
  UserIcon, CogIcon, LogoutIcon, MenuIcon, SearchIcon,
} from '@heroicons/react/outline';

import { Menu } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AppContext } from '../contexes/AppContext';

interface Props {
  className?: string;
}

const AppBar = (props: Props): JSX.Element => {
  const ctx = useContext(AppContext);
  const router = useRouter();

  const toggleSidebar = () => {
    ctx.appbar = !ctx.appbar;
  };

  const menuItems = [
    {
      icon: UserIcon,
      label: 'Profile',
      action: () => router.push(`/user/${ctx.username}`),
    },
    {
      icon: CogIcon,
      label: 'Settings',
      action: () => router.push('/settings'),
    },
    {
      icon: LogoutIcon,
      label: 'Logout',
      action: () => router.push('/landing'),
    }];

  return (
    <header
      className={`bg-white dark:bg-gray-600 h-12 flex flex-row py-1 border-b-2 border-gray-100 ${props.className}`}
    >
      <form className="ml-auto flex items-center">
        <input type="text" className="border-2 border-indigo-800 border rounded-full g-focus px-2 text-sm font-bold placeholder-black placeholder-opacity-70 py-1" placeholder="Search"/>
        <button type="submit" className="g-focus" aria-labelledby="app-bar-search-icon-desc">
          <SearchIcon className="h-5 w-5 mx-2 text-indigo-800"/>
        </button>
        <p id="app-bar-search-icon-desc" className="hidden" tabIndex={-1}>Search</p>
      </form>
      <div className="flex items-center select-none cursor-pointer ml-4" onClick={toggleSidebar}>
        <MenuIcon className="w-5 h-5 md:hidden" />
      </div>
      <Menu as="div" className="focus:outline-none focus:border-0">
        <div>
          <p id="app-bar-menu-item-desc" className="hidden" tabIndex={-1}>User Menu</p>
          <Menu.Button className="inline-flex justify-center items-center w-full px-2 py-1 text-sm font-medium text-black space-x-2 g-focus" tabIndex={0} aria-labelledby="app-bar-menu-item-desc">
            <div className="flex justify-center items-center">
              <Image src={ctx.userImage} width={32} height={32} className="cursor-pointer" alt="User Profile Image" />
            </div>
          </Menu.Button>
        </div>

        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {menuItems.map((item) => (
              <Menu.Item key={item.label}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-red-900`}
                    onClick={item.action}
                  >
                    <item.icon className="w-6 h-6 mr-2" />
                    {item.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </header>
  );
};

export default AppBar;
