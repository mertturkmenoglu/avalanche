import React from 'react';
import IRecentActivity from '../interfaces/IRecentActivity';

interface Props {
  activity: IRecentActivity;
}

const RecentActivity = ({ activity }: Props) => (
  <div className="flex items-center rounded justify-between">
    <span className="rounded-full text-white dark:text-gray-800 p-2">
      <img src={activity.user.image} height={64} width={64} className="rounded-full" alt={activity.user.name} />
    </span>
    <div className="flex items-center w-full justify-between">
      <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
        <p className="text-gray-700 dark:text-white">
          <span className="font-bold mr-1">
            {activity.user.name}
          </span>
          {activity.description}
        </p>
        <p className="text-gray-500 font-light text-xs">
          {new Date(activity.date).toDateString()}
        </p>
      </div>
    </div>
  </div>
);

export default RecentActivity;
