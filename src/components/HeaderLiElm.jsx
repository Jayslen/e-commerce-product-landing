export function LiElm ({ text, children }) {
  return (
    <li className='text-[#68707d] h-full grid place-content-center border-b border-transparent z-20 hover:border-b-[#ff7d1a]'>
      <a href='#' className='block'>{text || children}</a>
    </li>
  )
}
