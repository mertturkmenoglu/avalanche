import React from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import Layout from '../components/Layout';
import IRecentActivity from '../interfaces/IRecentActivity';
import RecentActivity from '../components/RecentActivity';
import TodayEvent from '../components/TodayEvent';
import ITodayEvent from '../interfaces/ITodayEvent';

const IndexPage = (): JSX.Element => {
  const recentActivities: IRecentActivity[] = [
    {
      user: {
        name: 'John',
        image: 'https://picsum.photos/200/200',
      },
      date: (new Date()).toISOString(),
      description: 'created a task',
    },
    {
      user: {
        name: 'Jane',
        image: 'https://picsum.photos/200/200',
      },
      date: (new Date()).toISOString(),
      description: 'created a repository',
    },
    {
      user: {
        name: 'Emily',
        image: 'https://picsum.photos/200/200',
      },
      date: (new Date()).toISOString(),
      description: 'started following you',
    },
    {
      user: {
        name: 'Kate',
        image: 'https://picsum.photos/200/200',
      },
      date: (new Date()).toISOString(),
      description: 'added you to Project Avalanche',
    },
    {
      user: {
        name: 'Jack',
        image: 'https://picsum.photos/200/200',
      },
      date: (new Date()).toISOString(),
      description: 'starred a repository',
    },
  ];
  const todayEvents: ITodayEvent[] = [
    {
      date: new Date().toISOString(),
      description: 'Dinner with Sarah',
      color: 'text-red-500',
    },
    {
      date: new Date().toISOString(),
      description: 'Meet with Mike',
      color: 'text-yellow-500',
    },
    {
      date: new Date().toISOString(),
      description: 'Meet with Matt',
      color: 'text-blue-500',
    },
    {
      date: new Date().toISOString(),
      description: 'Yoga',
      color: 'text-orange-500',
    },
  ];

  return (
    <Layout>
      <div className="flex">
        <div
          className="rounded-xl w-80 p-4 mt-4 ml-4 dark:bg-gray-800 relative overflow-hidden">
          <div className="w-full flex items-center justify-between mb-8">
            <p className="text-gray-800 dark:text-white text-xl font-normal">
            Recent Activities
            </p>
          </div>
          <div className="divide-y">
            {recentActivities.map((activity) => (
              <RecentActivity activity={activity} key={Math.random()}/>
            ))}
          </div>
        </div>

        <div className="rounded-xl w-80 p-4 dark:bg-gray-800 mt-4 ml-4 relative overflow-hidden">
          <div className="w-full flex items-center justify-between mb-6">
            <p className="text-gray-800 dark:text-white text-xl font-normal">
            Today's Events
            </p>
            <button
              className="flex items-center dark:text-gray-50 g-focus rounded-full">
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
          <div>
            {todayEvents.map((event) => (
              <TodayEvent event={event} className="my-2" />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
