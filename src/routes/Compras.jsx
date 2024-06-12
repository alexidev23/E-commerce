import { CartTableItems } from '../components/CartTableItems'
import { Footer } from '../components/Footer'
import { Whatsapp } from '../components/Whatsapp'
import { ShopCartEmptyIcon } from '../components/icons/ShopCartEmptyIcon'
import { ShopCardIcon } from '../components/icons/ShopCartIcon'

export function Compras () {
  const cartEmpty = true

  return (
    <div className='text-white'>
      <div className='py-10'>
        <div className='bg-seconCardDarkCyan flex gap-1 h-14 items-center justify-start px-6'>
          <ShopCardIcon />
          <h1 className='uppercase font-semibold'>Carrito de Compras</h1>
        </div>
        {cartEmpty
          ? (
            <CartTableItems />
            )
          : (
            <div className='text-white p-4 flex gap-2 justify-center'>
              <span className='font-bold'>El carrito esta vacio</span>
              <ShopCartEmptyIcon />
            </div>
            )}
      </div>
      <Whatsapp />
      <Footer />
    </div>
  )
}
