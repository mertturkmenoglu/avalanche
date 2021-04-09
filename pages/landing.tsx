import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FingerPrintIcon,
  ChevronDoubleDownIcon,
  CloudIcon,
  ServerIcon,
  CalendarIcon,
  ChartPieIcon,
  CollectionIcon,
  CubeIcon,
  DatabaseIcon,
} from '@heroicons/react/outline'

const LandingPage = (): JSX.Element => {
  return (
    <div className="h-screen bg-white">
      <div className="w-full flex justify-around mt-4 items-center border-gray-50">
        <Image src="/mountainsIndigo.svg" height={32} width={32} />

        <div className="flex space-x-8 text-sm font-medium text-gray-700">
          <Link href="/">
            <div className="border-b-2 border-indigo-900 select-none cursor-pointer">
              Home
            </div>
          </Link>
          <Link href="/login">
            <div className="select-none cursor-pointer border-b-2 border-white hover:border-indigo-900 transition-all ease-in-out delay-150 duration-100">
              Login
            </div>
          </Link>
          <Link href="/register">
            <div className="select-none cursor-pointer border-b-2 border-white hover:border-indigo-900 transition-all ease-in-out delay-150 duration-100">
              Register
            </div>
          </Link>
        </div>
      </div>

      <div className="block md:flex md:items-center mt-8 md:mt-24 md:w-full">
        <div className="w-11/12 sm:w-64 h-64 lg:w-96 bg-blue-700 flex ml-auto mr-auto md:ml-12 md:mr-2 rounded-lg ">
          {/* Photo by ian dooley on Unsplash */}
          <Image
            className="object-cover rounded-lg opacity-50 bg-blue-500"
            src="/hero.jpg"
            width={640}
            height={256}
          />
        </div>

        <div className="w-11/12 sm:w-64 md:w-64 bg-gradient-to-tr from-blue-500 to-blue-900 h-64 rounded-lg flex flex-1 mt-4 md:mt-0 mx-auto md:mx-0 md:mr-12">
          <div className="block md:flex md:justify-between pt-16 md:pt-0 mx-auto md:mx-0 items-center md:ml-8 w-full">
            <div className="text-center md:text-left">
              <div className="text-3xl text-white font-semibold uppercase tracking-wide leading-8  hover:bg-yellow-300 hover:text-white ease-in-out delay-200 transform transition duration-1000 hover:scale-105 hover:-skew-x-12">
                Avalanche
              </div>
              <div className="text-base text-white">
                Productivity, <span className="underline">re-designed</span>
              </div>
            </div>
            <div className="text-center mt-6 md:mt-0 md:ml-8 md:mr-8 lg:ml-auto lg:mr-24">
              <button className="bg-yellow-300 px-6 py-2 rounded-full text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300">
                <Link href="/register">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <ChevronDoubleDownIcon className="h-8 w-8 mx-auto mt-24 mb-12 text-indigo-900 animate-bounce" />
      </div>

      <div
        id="hero"
        className="mx-24 mt-24 grid grid-cols-10 gap-20 bg-indigo-50"
      >
        <div className="space-y-4 col-span-3 col-start-3 mt-36">
          <div className="text-gray-600 text-7xl font-semibold tracking-wide hover:bg-yellow-300 hover:text-white ease-in-out delay-200 transform transition duration-1000 hover:scale-105 hover:-skew-x-12">
            Avalanche
          </div>
          <div>Productivity, re-designed</div>
          <hr className="border-2 border-yellow-300" />
        </div>
        <div className="col-span-3">
          <div className="grid grid-rows-4 grid-flow-col gap-2">
            <CloudIcon className="h-24 w-48 text-white bg-yellow-500 row-span-1 -skew-x-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-x-12" />
            <FingerPrintIcon className="h-24 w-48 text-white bg-red-500 row-span-1 -skew-x-6 transform -translate-x-3 transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-x-12" />
            <ServerIcon className="h-24 w-48 text-white bg-green-500 row-span-1 -skew-x-6 transform -translate-x-6 transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-x-12" />
            <DatabaseIcon className="h-24 w-48 text-white bg-indigo-500 row-span-1 -skew-x-6 transform -translate-x-9 transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-x-12" />
            <CalendarIcon className="h-24 w-48 text-white bg-gray-500 row-span-1 -skew-x-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-x-12" />
            <ChartPieIcon className="h-24 w-48 text-white bg-pink-500 row-span-1 -skew-x-6 transform -translate-x-3 transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-x-12" />
            <CollectionIcon className="h-24 w-48 text-white bg-purple-500 row-span-1 -skew-x-6 transform -translate-x-6 transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-x-12" />
            <CubeIcon className="h-24 w-48 text-white bg-yellow-200 row-span-1 -skew-x-6 transform -translate-x-9 transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-x-12" />
          </div>
        </div>
      </div>

      {/* <hr className="mx-32 border border-indigo-200" /> */}
    </div>
  )
}

export default LandingPage
