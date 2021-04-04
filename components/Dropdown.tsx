import { useState } from 'react'

interface Props {
  className?: string
  title: string
  children: React.ReactNode
}

const Dropdown = (props: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  let C

  if (isOpen) {
    C = (
      <div
        className="origin-top-right right-0 mt-2 mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
        role="menu"
      >
        {props.children}
      </div>
    )
  }

  return (
    <div className={props.className}>
      <div
        className="text-right cursor-pointer"
        onClick={() => setIsOpen((v) => !v)}
      >
        {props.title}
      </div>
      {C}
    </div>
  )
}

export default Dropdown
