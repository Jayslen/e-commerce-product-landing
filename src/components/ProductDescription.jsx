import { IconPlus, IconMinus, IconShoppingCart } from '@tabler/icons-react'
import { useState } from 'react'

export function Description () {
  const [amount, setAmount] = useState(0)

  const increse = () => {
    setAmount(amount + 1)
  }

  const decrese = () => {
    setAmount(amount === 0 ? 0 : amount - 1)
  }

  return (
    <article className='flex flex-col gap-5 px-3 sm:w-[450px] sm-p-0 mb-5 md:mb-0'>
      <h3 className='font-bold text-[#ff7d1a]'>SNEAKER COMPANY</h3>
      <h2 className='text-xl sm:text-5xl font-bold'>Fall Limited Edition Sneakers</h2>
      <p className='text-[#68707d] text-lg'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse impedit
        distinctio magni expedita vero repudiandae totam maiores
      </p>
      <article>
        <div className='flex gap-4 items-center'>
          <span className='font-bold text-3xl'>$150.00</span>
          <span className='font-bold text-md bg-[#ff7d1a] px-4 py-1 rounded-md bg-opacity-20 text-[#ff7d1a]'>
            50%
          </span>
        </div>
        <span className='text-[#68707d] text-sm line-through'>$250.00</span>
      </article>
      <div className='flex flex-col gap-2 md:flex-row'>
        <div className='flex md:gap-1'>
          <div className=' rounded-l-md p-2 bg-[#e6e6e6] md:rounded-md cursor-pointer transition-colors grid place-content-center hover:bg-[#b2b2b2] w-[25%]' onClick={decrese}><IconMinus color='#ff7d1a' /></div>
          <input type='number' disabled value={amount} className='md:rounded-md w-[75%] bg-[#e6e6e6] text-center text-sm font-light md:w-14' />
          <div className='p-2 bg-[#e6e6e6] md:rounded-md cursor-pointer transition-colors grid place-content-center hover:bg-[#b2b2b2] w-[25%] rounded-r-md' onClick={increse}><IconPlus color='#ff7d1a' /></div>
        </div>
        <button className='md:grow-[4] bg-[#ff7d1a] flex items-center gap-4 justify-center rounded-lg p-3 text-white select-none transition-colors hover:bg-[#de6000]'>
          <IconShoppingCart />
          Add to car
        </button>
      </div>
    </article>
  )
}
