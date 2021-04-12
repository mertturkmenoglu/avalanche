import React, { useState } from 'react';
import Link from 'next/link';
import { MailIcon, LockClosedIcon } from '@heroicons/react/outline';

export type LoginFormData = {
  email: string;
  password: string;
};

interface Props {
  onFormSubmit: (data: LoginFormData) => void;
}

const LoginInputForm = ({ onFormSubmit }: Props): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit({ email, password });
      }}
      className="bg-gray-50 rounded-lg shadow-lg py-10 px-12"
    >
      <h2 className="text-2xl font-extralight mb-8 text-center text-indigo-900">Login</h2>
      <div>
        <label htmlFor="email" className="flex items-center mb-1">
          <MailIcon className="h-5 w-5 mr-1" />
          <div className="text-sm">Email</div>
        </label>
        <input
          type="email"
          className="w-full p-2 text-sm border rounded-md outline-none transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-1 focus:ring-indigo-900"
          id="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="flex items-center mb-1">
          <LockClosedIcon className="h-5 w-5 mr-1" />
          <div className="text-sm">Password</div>
        </label>
        <input
          type="password"
          className="w-full p-2 text-sm border rounded-md outline-none transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-1 focus:ring-indigo-900"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-center items-center mt-6">
        <button className="bg-indigo-700 py-2 px-4 text-sm text-white rounded focus:outline-none hover:bg-indigo-900">
          Login
        </button>
      </div>

      <div className="text-gray-500 mt-4 text-center">
        <Link href="/forget-password">Forgot password?</Link>
      </div>
      <div className="text-gray-500 mt-4 text-center">
        <Link href="/register">Need an account?</Link>
      </div>
    </form>
  );
};

export default LoginInputForm;
