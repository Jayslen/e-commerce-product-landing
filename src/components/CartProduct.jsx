import product from '../assets/image-product-1.jpg'
export function CartProduct ({ price, amount }) {
  const totalPrice = price * amount
  return (
    <div className='flex gap-4 text-[#b6bcc8]'>
      <img src={product} alt='' className='w-14 rounded-md' />
      <div>
        <h3 className='text-sm'>Fall Limeted Edition Sneakers</h3>
        <p>${price} x {amount} <span className='font-bold'>${totalPrice}</span></p>
      </div>

    </div>
  )
}
