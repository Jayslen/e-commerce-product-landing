import { CartProduct } from './CartProduct'
import { IconX } from '@tabler/icons-react'

export function Cart ({ handleClick }) {
  return (
    <div className='absolute w-full h-auto flex flex-col gap-2 bg-white top-24 rounded-md shadow-xl p-5 md:w-80 md:top-16 md:-right-0'>
      <div className='flex justify-between'>
        <h3 className='font-bold text-xl'>Cart</h3>
        <div className='cursor-pointer' onClick={handleClick}>
          <IconX />
        </div>
      </div>
      <CartProduct price={125} amount={2} />
      <button className='w-full py-3 font-bold bg-[#ff7d1a] rounded-md text-white'>Checkout</button>
    </div>
  )
}
