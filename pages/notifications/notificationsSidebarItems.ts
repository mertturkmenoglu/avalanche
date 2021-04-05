import { BellIcon, ArchiveIcon } from '@heroicons/react/outline'

import SidebarItem from '../../interfaces/SidebarItem'

export const notificationsSidebarItems: SidebarItem[] = [
    { link: '/notifications', name: 'All Notifications', icon: BellIcon },
    { link: '/notifications/archived', name: 'Archived', icon: ArchiveIcon },
  ]