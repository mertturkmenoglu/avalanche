import React, { FormEvent, useState } from 'react'
import Link from 'next/link'

const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFormSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="h-screen bg-gradient-to-br from-pink-900 via-indigo-900 to-gray-900 flex">
      <form
        onSubmit={onFormSubmitHandler}
        className="w-full max-w-md m-auto bg-gray-50 rounded-md shadow-lg py-10 px-16"
      >
        <h1 className="text-5xl font-light mt-4 text-center text-indigo-700">
          Avalanche
        </h1>
        <h2 className="text-2xl font-extralight mt-12 mb-8 text-center text-indigo-900">
          Login
        </h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="w-full p-2 text-primary border rounded-md outline-none test-sm transition duration-150 ease-in-out mb-4"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
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

        <div className="font-thin text-gray-500 mt-4 text-center">
          <Link href="/forget-password">Forgot password?</Link>
        </div>
        <div className="font-thin text-gray-500 mt-4 text-center">
          <Link href="/register">Need an account?</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
