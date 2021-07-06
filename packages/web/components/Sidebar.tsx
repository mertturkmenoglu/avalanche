import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import SidebarItem from '../interfaces/SidebarItem';
import { AppContext } from '../contexes/AppContext';

class Props {
  className?: string = '';

  items: SidebarItem[] = [];
}

const Sidebar = (props: Props): JSX.Element => {
  const ctx = useContext(AppContext);
  const router = useRouter();

  const navElementClasses = 'my-2 px-4 py-2 rounded-full cursor-pointer hover:bg-green-50 hover:text-gray-700 flex';

  return (
    <div className={`h-screen fixed overflow-auto border-r-2 border-gray-100 ${props.className}`}>
      <div className={`ml-9 ${ctx.appbar ? 'visible' : 'invisible'}`}>
        Avalanche
      </div>
      <nav>
        <div className="mx-4">
          {props.items.map((it) => {
            const IconTag = it.icon;
            return (
              <Link key={it.link} href={it.link}>
                <div
                  className={
                    it.link !== router.pathname
                      ? navElementClasses
                      : `${navElementClasses} bg-green-50`
                  }
                >
                  <IconTag className="h-5 w-5" />
                  {ctx.appbar && <span className="select-none text-sm ml-2">{' '}{it.name}</span>}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
