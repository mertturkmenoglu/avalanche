import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import ITodayEvent from '../interfaces/ITodayEvent';

interface Props {
  event: ITodayEvent;
  className?: string;
}

const TodayEvent = ({ event }: Props) => (
  <div className="flex items-center mb-2 rounded justify-between">
    <div className="flex w-full items-center justify-between">
      <div className="flex">
        <ChevronRightIcon className={`w-5 h-5 ${event.color}`} />
        <p className="text-sm font-normal">
          {event.description}
        </p>
      </div>
      <p>{new Date(event.date).getHours()}:{new Date(event.date).getMinutes().toString().padStart(2, '0')}</p>
    </div>
  </div>

);

export default TodayEvent;
