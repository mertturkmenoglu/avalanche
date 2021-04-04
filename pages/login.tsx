import React, { FormEvent } from 'react'
import LoginInputForm from '../components/LoginInputForm'
import LoginMotto from '../components/LoginMotto'

const LoginPage = (): JSX.Element => {
  const onFormSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="h-screen bg-gradient-to-br from-pink-900 via-indigo-900 to-gray-900 flex">
      <LoginInputForm onFormSubmit={onFormSubmitHandler} />
      <LoginMotto />
    </div>
  )
}

export default LoginPage
