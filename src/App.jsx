import { Header } from './components/HeroHeader'
import { Product } from './components/Product'
import { Description } from './components/ProductDescription'
function App () {
  return (
    <>
      <Header />
      <main className='flex sm:justify-center font-kumbh'>
        <section className='flex flex-col justify-center items-center gap-5 sm:mt-3 sm:gap-5  sm:w-[80vw] sm:justify-evenly md:gap-10 2xl:gap-0 md:flex-row md:mt-24'>
          <Product />
          <Description />
        </section>
      </main>
    </>
  )
}

export default App
