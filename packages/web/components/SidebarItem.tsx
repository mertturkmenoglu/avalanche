import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import ISidebarItem from '../interfaces/ISidebarItem';

interface Props {
  item: ISidebarItem;

  active?: boolean;
}

const SidebarItem = ({
  item, active = false,
}: Props) => {
  const navElementClasses = 'my-2 px-4 py-2 rounded-full cursor-pointer text-black hover:bg-indigo-700 hover:text-white flex g-focus';
  const activeClasses = 'bg-indigo-700 text-white';
  const classes = classnames(navElementClasses, { [activeClasses]: active });

  return (
    <Link key={item.link} href={item.link}>
      <a className={classes}>
        <item.icon className="h-5 w-5" />
        <span className="select-none text-sm ml-2">{' '}{item.name}</span>
      </a>
    </Link>
  );
};

export default SidebarItem;
