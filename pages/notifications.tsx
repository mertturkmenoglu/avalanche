import React from 'react'
import Layout from '../components/Layout'

const NotificationsPage = (): JSX.Element => {
  const notifications = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non placeat itaque laborum doloremque ipsum cum asperiores doloribus facilis qui corporis, obcaecati magni aspernatur eos porro, quam possimus eum voluptate recusandae.',
  ]

  return (
    <Layout>
      {notifications.map((notification, idx) => {
        return (
          <div key={idx} className="my-4 px-4">
            {notification}
          </div>
        )
      })}
    </Layout>
  )
}

export default NotificationsPage
