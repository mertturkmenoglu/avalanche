import React from 'react'
import Layout from '../../components/Layout'
import NotificationItem from '../../components/NotificationItem'
import Sidebar from '../../components/Sidebar'
import { notificationsSidebarItems } from '../../interfaces/notificationsSidebarItems'

const ArchivedNotifications = (): JSX.Element => {
  const archivedNotifications: string[] = []
  return (
    <Layout>
      <Sidebar items={notificationsSidebarItems} />
      <div className="ml-56">
        {archivedNotifications.map((text, idx) => {
          return (
            <NotificationItem
              className="my-4 w-full"
              notification={{ content: text }}
              key={idx}
            />
          )
        })}
        {archivedNotifications.length === 0 ? (
          <div className="mt-4">You have no archived notifications</div>
        ) : null}
      </div>
    </Layout>
  )
}

export default ArchivedNotifications
