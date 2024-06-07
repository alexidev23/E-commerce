import { Category } from './components/Category'
import { CategoryProduct } from './components/CategoryProduct'
import { Header } from './components/Header'
import { SliderAds } from './components/SliderAds'
import { Sponsors } from './components/Sponsors'
import { Whatsapp } from './components/Whatsapp'

function App () {
  const slides = [
    '/Adds/ads-1.jpeg',
    '/Adds/ads-2.jpeg',
    '/Adds/ads-3.png',
    '/Adds/ads-4.jpeg'
  ]

  const sponsors = [
    '/Sponsors/logitech.svg',
    '/Sponsors/logitech.svg',
    '/Sponsors/logitech.svg',
    '/Sponsors/logitech.svg',
    '/Sponsors/logitech.svg',
    '/Sponsors/logitech.svg'
  ]

  return (
    <>
      <Header />
      <SliderAds
        slides={slides}
      />
      <Category />
      <CategoryProduct />
      <Sponsors
        sponsors={sponsors}
      />
      <CategoryProduct />
      <Whatsapp />
    </>
  )
}

export default App
