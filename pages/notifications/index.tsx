import React from 'react'

import Layout from '../../components/Layout'
import NotificationItem from '../../components/NotificationItem'
import Sidebar from '../../components/Sidebar'

import { notificationsSidebarItems } from '../../interfaces/notificationsSidebarItems'

const NotificationsPage = (): JSX.Element => {
  const notifications = [
    'John Doe invited you to an event',
    'John Doe created an event',
    'Jane added you to a project',
    'Reminder: Call Jane',
    'Automatic Heroku deploy failed',
    'Team Vevericka: Hello World',
    'Team Avalanche: Hello World',
    'Project X: Hello World',
    'Project Y: Hello World',
  ]

  return (
    <Layout>
      <Sidebar items={notificationsSidebarItems} />

      <div className="ml-56">
        {notifications.map((text, idx) => {
          return (
            <NotificationItem
              className="my-4 w-full"
              notification={{ content: text }}
              key={idx}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default NotificationsPage
