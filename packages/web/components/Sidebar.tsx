import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import SidebarItem from '../interfaces/SidebarItem';

class Props {
  className?: string = '';

  items: SidebarItem[] = [];
}

const Sidebar = (props: Props): JSX.Element => {
  const router = useRouter();

  const navElementClasses = 'my-2 px-4 py-2 rounded-full cursor-pointer text-black hover:bg-indigo-500 hover:text-white flex g-focus';

  return (
    <div className={`overflow-hidden border-r-2 border-gray-100 ${props.className}`}>
      <nav>
        <div className="mx-4">
          {props.items.map((it) => {
            const IconTag = it.icon;
            return (
              <Link key={it.link} href={it.link}>
                <a
                  className={
                    it.link !== router.pathname
                      ? navElementClasses
                      : `${navElementClasses} bg-indigo-700 text-white`
                  }
                >
                  <IconTag className="h-5 w-5" />
                  <span className="select-none text-sm ml-2">{' '}{it.name}</span>
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
