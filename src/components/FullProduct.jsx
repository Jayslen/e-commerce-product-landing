import { useState } from 'react'
import { ThumbnailProduct } from '../assets/Thumbnail'
import { PRODUCTS_SRC, PREVIEW_SRC } from '../produts'
import {
  IconArrowBadgeLeftFilled,
  IconArrowBadgeRightFilled,
  IconX
} from '@tabler/icons-react'

export function FullProduct ({ event }) {
  const [translate, setTranslate] = useState(0)

  // translate function
  const next = () => {
    const newTranslate =
      translate === (PRODUCTS_SRC.length - 1) * 100 ? 0 : translate + 100
    setTranslate(newTranslate)
  }
  const prev = () => {
    const newTranslate = translate === 0 ? 300 : translate - 100
    setTranslate(newTranslate)
  }
  const change = (index) => {
    setTranslate(index * 100)
  }

  // open menu function
  const handleClick = () => {
    event()
  }

  return (
    <section className='h-[100vh] w-screen absolute top-0 z-30 bg-black bg-opacity-30 grid place-content-center'>
      <article className='w-[400px] flex flex-col gap-4 relative'>
        <IconX
          className='absolute -top-12 right-0 cursor-pointer'
          width={25}
          height={25}
          onClick={handleClick}
        />
        <IconArrowBadgeLeftFilled
          className='absolute z-30 top-[40%] cursor-pointer'
          width={40}
          height={40}
          onClick={prev}
        />
        <IconArrowBadgeRightFilled
          className='absolute z-30 top-[40%] right-0 cursor-pointer'
          width={40}
          height={40}
          onClick={next}
        />
        <div className='flex overflow-hidden rounded-md relative'>
          <figure
            className='flex transition-all'
            style={{ transform: `translateX(${-translate}%)` }}
          >
            {PRODUCTS_SRC.map((content, index) => {
              return (
                <img
                  src={content}
                  alt='product-img'
                  key={index}
                  className='select-none'
                />
              )
            })}
          </figure>
        </div>
        <figure className='grid grid-cols-4 gap-2 select-none'>
          {PREVIEW_SRC.map((content, index) => {
            return (
              <ThumbnailProduct
                src={content}
                key={index}
                index={index}
                handleClick={change}
              />
            )
          })}
        </figure>
      </article>
    </section>
  )
}
