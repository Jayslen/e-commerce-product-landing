import { IconX } from '@tabler/icons-react'
import { LiElmMobile } from './MobileMenuLi'

export function MobileMenu ({ event }) {
  return (
    <div className='w-screen h-screen bg-black z-20 fixed bg-opacity-80'>
      <aside className='fixed left-0 w-[65vw] h-screen bg-white z-20  transition-all delay-500 animate'>
        <nav className='px-4 flex flex-col gap-6'>
          <IconX className='mt-5' color='gray' stroke={3} onClick={event} />
          <ul>
            <LiElmMobile text='Collections' />
            <LiElmMobile text='Men' />
            <LiElmMobile text='Women' />
            <LiElmMobile text='About' />
            <LiElmMobile text='Contact' />
          </ul>
        </nav>
      </aside>
    </div>
  )
}
