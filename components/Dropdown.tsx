import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

class Props {
  className?: string = ''
  title = 'Dropdown'
  children: React.ReactNode
  imgSrc?: string
}

const Dropdown = (props: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const r = useRef<HTMLDivElement>(null)
  let C
  let ImgComponent

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
        className="z-50 origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
        role="menu"
      >
        {props.children}
      </div>
    )
  }

  if (props.imgSrc) {
    ImgComponent = (
      <Image
        src={props.imgSrc}
        width={32}
        height={32}
        className="cursor-pointer mr-2"
      />
    )
  }

  return (
    <div className={`${props.className}`} ref={r}>
      <div
        className="text-right cursor-pointer select-none flex flex-row-reverse items-center"
        onClick={() => setIsOpen((v) => !v)}
      >
        {ImgComponent}
        <div className="mx-2 select-none text-sm">{props.title}</div>
      </div>
      {C}
    </div>
  )
}

export default Dropdown
