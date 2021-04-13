import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import LoginInputForm, { LoginFormData } from '../components/LoginInputForm';
import ApplicationMotto from '../components/ApplicationMotto';
import { useLoginMutation } from '../generated/graphql';
import { AppContext } from '../contexes/AppContext';

const LoginPage = (): JSX.Element => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  const ctx = useContext(AppContext);

  const onFormSubmitHandler = async (data: LoginFormData) => {
    const response = await login({ data });

    if (!response.data?.login.errors) {
      ctx.username = response.data?.login.user?.username || '';
      router.push('/');
    }
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
