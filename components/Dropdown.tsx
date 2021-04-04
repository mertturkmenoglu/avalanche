import { useState, useEffect, useRef } from 'react'

interface Props {
  className?: string
  title: string
  children: React.ReactNode
}

const Dropdown = (props: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const r = useRef<HTMLDivElement>(null)
  let C

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (r.current && !r.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [r])

  if (isOpen) {
    C = (
      <div
        className="z-50 origin-top-right right-0 mt-2 mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
        role="menu"
      >
        {props.children}
      </div>
    )
  }

  return (
    <div className={props.className} ref={r}>
      <div
        className="text-right cursor-pointer select-none"
        onClick={() => setIsOpen((v) => !v)}
      >
        {props.title}
      </div>
      {C}
    </div>
  )
}

export default Dropdown
