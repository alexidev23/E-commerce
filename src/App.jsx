import { Category } from './components/Category'
import { CategoryProduct } from './components/CategoryProduct'
import { Header } from './components/Header'
import { SliderAds } from './components/SliderAds'

function App () {
  const slides = [
    '/ads-1.jpeg',
    '/ads-2.jpeg',
    '/ads-3.png',
    '/ads-4.jpeg'
  ]

  return (
    <>
      <Header />
      <SliderAds
        slides={slides}
      />
      <Category />
      <CategoryProduct />
    </>
  )
}

export default App
