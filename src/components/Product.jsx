import { ThumbnailProduct } from '../assets/Thumbnail.jsx';
import { PRODUCTS_SRC, PREVIEW_SRC } from '../produts.js';
import { useState } from 'react';
import { FullProduct } from './FullProduct';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

const screen = window.screen.width;

export function Product() {
  const [showProduct, setShowProduct] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [translate, setTranslate] = useState(0);

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

  const chageCurrentImg = (index) => {
    setCurrentImg(index);
  };
  const handleClick = () => {
    setShowProduct(!showProduct);
  };

  return (
    <>
      <article className="sm:w-[450px] flex flex-col gap-3 select-none">
        <div className="overflow-hidden relative">
            <div
              className="absolute top-1/2 right-1 cursor-pointer bg-white p-2 rounded-full grid place-content-center z-30 md:hidden"
              onClick={next}
            >
              <IconChevronRight />
            </div>
            <div className="absolute top-1/2 left-1 cursor-pointer bg-white p-2 rounded-full grid place-content-center z-30 md:hidden" onClick={prev}>
              <IconChevronLeft />
            </div>
          <figure className={`flex -translate-x-[${translate}%] transition-all duration-200`}>
            <img
              src={PRODUCTS_SRC[currentImg]}
              alt="shoes-white-with-brown"
              className={`w-full sm:rounded-xl cursor-pointer ${
                screen >= 450 ? 'hover:brightness-75' : ''
              }`}
              onClick={handleClick}
            />
            <img
              src={PRODUCTS_SRC[1]}
              alt="shoes-white-with-brown"
              className={`w-full sm:rounded-xl cursor-pointer ${
                screen >= 450 ? 'hover:brightness-75' : ''
              }`}
              onClick={handleClick}
            />
            <img
              src={PRODUCTS_SRC[2]}
              alt="shoes-white-with-brown"
              className={`w-full sm:rounded-xl cursor-pointer ${
                screen >= 450 ? 'hover:brightness-75' : ''
              }`}
              onClick={handleClick}
            />
            <img
              src={PRODUCTS_SRC[3]}
              alt="shoes-white-with-brown"
              className={`w-full sm:rounded-xl cursor-pointer ${
                screen >= 450 ? 'hover:brightness-75' : ''
              }`}
              onClick={handleClick}
            />
          </figure>
        </div>
        <figure className="hidden sm:grid grid-cols-4 gap-5">
          {PREVIEW_SRC.map((content, index) => {
            return (
              <ThumbnailProduct
                src={content}
                key={index}
                index={index}
                value={currentImg}
                handleClick={chageCurrentImg}
              />
            );
          })}
        </figure>
      </article>
      {showProduct && screen >= 450 ? (
        <FullProduct event={handleClick} />
      ) : null}
    </>
  );
}
