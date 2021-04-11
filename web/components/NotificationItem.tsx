import Notification from '../interfaces/Notification'

import { BellIcon } from '@heroicons/react/outline'

interface Props {
  notification: Notification
  className?: string
}

const NotificationItem = ({ notification }: Props): JSX.Element => {
  const classes =
    'rounded-lg px-2 border-2 border-gray-200 flex flex-row my-4 py-4 mx-4 w-full'
  return (
    <div className={classes}>
      <BellIcon className="w-8 h-8 text-green-200 mr-3" />
      <div className="font-thin text-lg">{notification.content}</div>
    </div>
  )
}

export default NotificationItem
