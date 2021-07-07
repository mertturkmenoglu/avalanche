import React from 'react';
import { useRouter } from 'next/router';

import ISidebarItem from '../interfaces/ISidebarItem';
import SidebarItem from './SidebarItem';

class Props {
  className?: string = '';

  items: ISidebarItem[] = [];
}

const Sidebar = (props: Props): JSX.Element => {
  const router = useRouter();

  return (
    <div className={`overflow-hidden border-r-2 border-gray-100 ${props.className}`}>
      <nav className="mx-4">
        {props.items.map((item) => (
          <SidebarItem item={item} active={item.link === router.pathname} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
