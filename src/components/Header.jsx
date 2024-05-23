import { MenuIcon } from './icons/MenuIcon'
import { SearchIcon } from './icons/SearchIcon'
import { ShopCardIcon } from './icons/ShopCartIcon'

export function Header () {
  return (
    <header className='bg-headerDarkCyan text-white h-14 flex items-center justify-between'>
      <a className='flex items-center gap-2 pl-6'>
        <img src='/logo.svg' alt='Logo del E-commerce' />
        <h1>ShopDev</h1>
      </a>
      <div className='flex gap-4 pr-6'>
        <SearchIcon />
        <ShopCardIcon />
        <MenuIcon />
      </div>
    </header>
  )
}
