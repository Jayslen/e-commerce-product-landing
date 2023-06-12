export function ThumbnailProduct ({ src, index, handleClick, value }) {
  const update = () => {
    handleClick(index)
  }
  return (
    <img src={src} alt='thumbaild-product' className={`rounded-xl cursor-pointer transition-all hover:brightness-75 ${index === value ? 'brightness-75' : ''}`} onClick={update} />
  )
}
