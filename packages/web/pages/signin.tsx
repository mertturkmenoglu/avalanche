import React, { useState } from 'react';
import Head from 'next/head';

import { MailIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import isValidEmail from '../utils/isValidEmail';

const SignInPage = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      await router.push('/');
    }
  };

  return (
    <>
      <Head>
        <title>Sign In | Avalanche</title>
      </Head>
      <main className="w-11/12 md:w-full mx-auto h-screen flex justify-center items-center">
        <div
          className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow-xl border border-1 border-gray-300 dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <h1
            className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Sign In
          </h1>
          <span
            className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          We will send a code to your email address
          </span>
          <div className="p-6">
            <form onSubmit={(e) => onFormSubmit(e)}>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <label htmlFor='email' className="inline-flex">
                    <MailIcon height={24} width={24} className="text-indigo-700"/>
                    <div className="ml-2">Email</div>
                  </label>
                  <input type="text"
                    id="email"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base g-focus"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                  />
                </div>
              </div>
              <div className="flex w-full my-4">
                <button type="submit"
                  className="py-2 px-4 bg-indigo-700 hover:indigo-900 g-focus text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg ">
                Send Code
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignInPage;
