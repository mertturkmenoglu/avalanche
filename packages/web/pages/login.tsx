import React, { useState } from 'react';
import Head from 'next/head';

import { LockClosedIcon, MailIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from '../components/Card';

const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const login = async () => {
    await router.push('/');
  };

  return (
    <>
      <Head>
        <title>Login | Avalanche</title>
      </Head>
      <div className="h-screen bg-indigo-50 block lg:flex">
        <div className="w-full max-w-md mx-auto py-8 lg:my-auto">
          <Card className="flex flex-col p-10" background="bg-indigo-100">
            <h1 className="mx-auto font-semibold text-xl text-indigo-800">Login</h1>
            <label htmlFor="email" className="flex items-center mb-1 mt-8">
              <MailIcon className="h-5 w-5 mr-1 text-indigo-800" />
              <div className="text-sm text-indigo-800 font-semibold">Email</div>
            </label>
            <input
              type="email"
              className="w-full p-2 text-sm border rounded-md outline-none mb-4 focus:outline-none focus:ring-1 focus:ring-indigo-900"
              id="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            <label htmlFor="password" className="flex items-center mb-1">
              <LockClosedIcon className="h-5 w-5 mr-1 text-indigo-800" />
              <div className="text-sm text-indigo-800 font-semibold">Password</div>
            </label>
            <input
              type="password"
              className="w-full p-2 text-sm border rounded-md outline-none mb-4 focus:outline-none focus:ring-1 focus:ring-indigo-900"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-indigo-700 py-2 px-4 text-sm text-white rounded focus:outline-none hover:bg-indigo-900" onClick={login}>
              Login
            </button>

            <div className="text-indigo-800 mt-4 text-center font-semibold text-sm">
              <Link href="/forget-password">
                <a>Forgot password?</a>
              </Link>
            </div>
            <div className="text-indigo-800 mt-4 text-center font-semibold text-sm">
              <Link href="/register">
                <a>Need an account?</a>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
