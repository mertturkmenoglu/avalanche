import React from 'react';

interface ISidebarItem {
  link: string
  name: string
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

export default ISidebarItem;
