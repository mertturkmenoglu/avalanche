import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TwitterIcon from '../components/TwitterIcon';
import GitHubIcon from '../components/GitHubIcon';
import LinkedinIcon from '../components/LinkedInIcon';

const LandingPage = (): JSX.Element => {
  const data = [
    {
      number: 1,
      title: 'Designed for productivity',
      content: 'We designed Avalanche for all your possible needs in mind.',
    },
    {
      number: 2,
      title: 'Avalanche is smart',
      content: 'Avalanche will understand your work and suggest actions to make your life easier',
    },
    {
      number: 3,
      title: 'Free, Forever',
      content: 'Avalanche basic plan is free, and will always be free. You don\'t need to enter your credit card information, or pay anything.',
    },
  ];

  const footerData = [
    {
      data: [
        {
          text: 'Help Center',
          url: '/help',
        },
        {
          text: 'Career',
          url: '/career',
        },
        {
          text: 'Docs',
          url: '/docs',
        },
        {
          text: 'Privacy',
          url: '/privacy',
        },
      ],
    },
    {
      data: [
        {
          text: 'About',
          url: '/about',
        },
        {
          text: 'API',
          url: '/api',
        },
        {
          text: 'Status',
          url: '/status',
        },
        {
          text: 'Terms',
          url: '/terms',
        },
      ],
    },
  ];

  const footerIcons = [
    {
      icon: TwitterIcon,
      url: 'https://twitter.com/capreaee',
    },
    {
      icon: GitHubIcon,
      url: 'https://github.com/mertturkmenoglu',
    },
    {
      icon: LinkedinIcon,
      url: 'https://linkedin.com/in/mert-turkmenoglu',
    },
  ];

  return (
    <div className='h-screen bg-white'>
      <header>
        <div className='w-11/12 md:w-7/12 mx-auto flex justify-between pt-4 items-center'>
          <div className='font-medium text-lg text-indigo-700'>
          Avalanche
          </div>
          <Link href='/signin'>
            <a className={`text-sm font-medium select-none cursor-pointer px-4 py-1 text-indigo-500 
            inline-flex border-b-2 border-opacity-0 hover:border-opacity-100 
            border-indigo-700 g-focus`}>
            Sign In
            </a>
          </Link>
        </div>
      </header>

      <main>
        <section>
          <div className='w-11/12 md:w-7/12 mx-auto bg-white flex justify-around items-center dark:bg-gray-800 mt-32'>
            <div className='flex items-center justify-between w-full'>
              <h2 className='flex flex-col text-3xl font-extrabold text-black dark:text-white'>
                <span className='block'>Re-designing productivity</span>
                <span className='block text-indigo-500'>with Avalanche</span>
                <div className='mt-4'>
                  <Link href="/signin">
                    <a className='py-2 px-6 bg-indigo-600 text-white rounded-md text-center text-base g-focus'>
                      Get Started
                    </a>
                  </Link>
                </div>
              </h2>
              <div>
                <Image src={'/landing_hero.svg'} width={256} height={256} />
              </div>
            </div>
          </div>
        </section>

        <section className='my-32 w-11/12 md:w-7/12 flex items-center mx-auto'>
          <div className='container bg-white dark:bg-gray-800'>
            <div className='flex flex-wrap -mx-8'>
              <div className='w-full lg:w-1/2 px-8'>
                <div className='mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0'>
                  <h2 className='mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white'>
                  Start your journey today
                  </h2>
                  <p className='mb-8 leading-loose text-gray-500 dark:text-gray-300'>
                  With Avalanche, you can maximize your productivity, double the completed tasks,
                  and relax for the rest of the day.
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-8'>
                <ul className='space-y-12'>
                  {data.map((item) => (
                    <li className='flex -mx-4' key={item.number}>
                      <div className='px-4'>
                        <span className={`flex w-16 h-16 mx-auto items-center 
                        justify-center text-2xl font-bold 
                        font-heading rounded-full bg-blue-50 text-indigo-700`
                        }>
                          {item.number}
                        </span>
                      </div>
                      <div className='px-4'>
                        <h3 className='my-4 text-xl font-semibold dark:text-white'>
                          {item.title}
                        </h3>
                        <p className='text-gray-500 dark:text-gray-300 leading-loose'>
                          {item.content}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <hr className="w-11/12 md:w-7/12 mx-auto border border-indigo-200" />

      <footer className="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
        <div
          className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
          <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
            {footerData.map((section, index) => (
              <li className="w-1/2 md:w-1/3 lg:w-1/3" key={index}>
                <div className="text-center">
                  <ul>
                    {section.data.map((action) => (
                      <li
                        key={action.url}
                        className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                        <a href={action.url} className="g-focus">
                          {action.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
            {footerIcons.map((element) => (
              <a href={element.url} key={element.url} className="g-focus">
                <element.icon className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
