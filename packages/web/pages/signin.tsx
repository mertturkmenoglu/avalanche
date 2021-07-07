import React, { useState } from 'react';
import Head from 'next/head';

import { LockClosedIcon, MailIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import isValidEmail from '../utils/isValidEmail';

const SignInPage = (): JSX.Element => {
  const [enterEmailState, setEnterEmailState] = useState(true);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const onSendCodeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      setError('');
      setEmailError(false);
      setEnterEmailState(false);
    } else {
      setError('Invalid email');
      setEmailError(true);
    }
  };

  const onCodeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (code.length !== 6) {
      setError('Invalid code');
      setCodeError(true);
    } else {
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
            { enterEmailState ? 'We will send a code to your email address' : 'Enter your code' }
          </span>
          <div className="p-6">
            { enterEmailState && <form onSubmit={(e) => onSendCodeSubmit(e)}>
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
                  { emailError && <div className="text-red-600 font-bold text-xs mt-1 ml-2">{error}</div> }
                </div>
              </div>
              <div className="flex w-full my-4">
                <button type="submit"
                  className="py-2 px-4 bg-indigo-700 hover:indigo-900 g-focus text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg ">
                Send Code
                </button>
              </div>
            </form>
            }
            { !enterEmailState && <form onSubmit={onCodeSubmit}>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <label htmlFor='code' className="inline-flex">
                    <LockClosedIcon height={24} width={24} className="text-indigo-700"/>
                    <div className="ml-2">Code</div>
                  </label>
                  <input type="text"
                    id="code"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base g-focus"
                    placeholder="Code"
                    value={code}
                    onChange={(e) => setCode(e.target.value.trim())}
                  />
                  { codeError && <div className="text-red-600 font-bold text-xs mt-1 ml-2">{error}</div> }
                </div>
              </div>
              <div className="flex w-full my-4">
                <button type="submit"
                  className="py-2 px-4 bg-indigo-700 hover:indigo-900 g-focus text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg ">
                  Sign In
                </button>
              </div>
            </form>
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default SignInPage;
