import React, { useContext } from 'react';

import {
  UserIcon, CogIcon, LogoutIcon, MenuIcon,
} from '@heroicons/react/outline';

import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
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
      action: () => router.push('/login'),
    }];

  return (
    <div
      className={`bg-white h-12 flex flex-row py-1 px-1 border-b-2 border-gray-100 ${props.className}`}
    >
      <div className="flex items-center select-none cursor-pointer" onClick={toggleSidebar}>
        <MenuIcon className="w-5 h-5 md:hidden" />
      </div>
      <Menu as="div" className="ml-auto">
        <div>
          <Menu.Button className="inline-flex justify-center items-center w-full px-2 py-1 text-sm font-medium text-black space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
            <div>{ctx.username}</div>
            <div className="flex justify-center items-center">
              <Image src={ctx.userImage} width={32} height={32} className="cursor-pointer" />
            </div>
            <ChevronDownIcon
              className="w-5 h-5 -mr-1"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {menuItems.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
    </div>
  );
};

export default AppBar;
