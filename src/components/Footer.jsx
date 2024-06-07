export function Footer () {
  return (
    <section className='py-10 text-white w-[360px] m-auto'>
      <h3 className='uppercase text-2xl font-semibold text-center'>Atencion al Cliente</h3>
      <div className='text-white py-4 flex flex-col gap-1 px-6'>
        <p className='text-xl'>0810-555-2324</p>
        <p className='text-xl'>consultas@shopdev.com</p>
        <p className='text-xl'>Lunes a Viernes de 8 a 18hs</p>
      </div>
      <div className='border-2 w-full' />
      <div className='flex gap-4 py-6 justify-around px-10'>
        <a className='bg-buttonsLightGreen w-20 h-20 rounded-full flex items-center justify-center cursor-pointer'>
          <img src='/instagram.svg' alt='Icono de Instagram' width='50px' height='50px' />
        </a>
        <a className='bg-buttonsLightGreen w-20 h-20 rounded-full flex items-center justify-center cursor-pointer'>
          <img src='/youtube.svg' alt='Icono de Instagram' width='50px' height='50px' />
        </a>
        <a className='bg-buttonsLightGreen w-20 h-20 rounded-full flex items-center justify-center cursor-pointer'>
          <img src='/facebook.svg' alt='Icono de Instagram' width='50px' height='50px' />
        </a>
      </div>
    </section>
  )
}
