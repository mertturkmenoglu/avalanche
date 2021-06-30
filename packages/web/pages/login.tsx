import React from 'react';
import Head from 'next/head';

import LoginInputForm from '../components/LoginInputForm';
import ApplicationMotto from '../components/ApplicationMotto';

const LoginPage = (): JSX.Element => {
  const onFormSubmitHandler = async () => {
  };

  return (
    <>
      <Head>
        <title>Login | Avalanche</title>
      </Head>
      <div className="h-screen bg-gradient-to-br from-pink-900 via-indigo-900 to-gray-900 block lg:flex">
        <div className="w-full max-w-md mx-auto py-8 lg:ml-36 lg:mr-auto lg:my-auto">
          <LoginInputForm onFormSubmit={onFormSubmitHandler} />
        </div>
        <div className="my-auto mr-auto">
          <ApplicationMotto />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
