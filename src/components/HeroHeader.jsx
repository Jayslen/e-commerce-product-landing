import logo from '../assets/logo.svg'
import {
  IconShoppingCart,
  IconUserCircle,
  IconMenu2
} from '@tabler/icons-react'
import { LiElm } from './HeaderLiElm'
import { useState } from 'react'
import { Cart } from './Cart'
import { MobileMenu } from './MobileAsideMenu'

export function Header () {
  const [showCart, setShowCart] = useState(false)
  const [showMobileMenu, setshowMobileMenu] = useState(false)
  // const handleClick = () => {
  //   setShowCart(!showCart)
  // }
  const hideMobileMenu = () => {
    setshowMobileMenu(!showMobileMenu)
  }
  return (
    <header className='h-20 w-full flex justify-center'>
      {showMobileMenu ? <MobileMenu translate='0' event={hideMobileMenu} /> : ''}
      <nav className=' flex justify-between h-full w-screen px-4 relative md:w-[70vw] md:p-0'>
        <div className='absolute bg-[#b6bcc8] w-full h-[1px] top-[79px] hidden md:block' />
        <ul className='flex items-center gap-4 md:hidden'>
          <li>
            <IconMenu2
              className='z-40' onClick={() => {
                setshowMobileMenu(!showMobileMenu)
              }}
            />
          </li>

          <li>
            <img src={logo} alt='' />
          </li>
        </ul>
        <ul className=' gap-4 h-full hidden md:flex'>
          <LiElm>
            <img src={logo} alt='' />
          </LiElm>
          <LiElm text='Collection' />
          <LiElm text='Men' />
          <LiElm text='Women' />
          <LiElm text='About' />
        </ul>
        <ul className='flex items-center gap-1 md:gap-3'>
          <li>
            <div
              className='cursor-pointer'
              onClick={() => {
                setShowCart(!showCart)
              }}
            >
              <IconShoppingCart />
            </div>
            {/* {showCart ? <Cart handleClick={handleClick} /> : null} */}
          </li>
          <li>
            <IconUserCircle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
