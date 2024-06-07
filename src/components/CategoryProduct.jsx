import React from 'react'

export function CategoryProduct () {
  return (
    <div className='bg-cardDarkCyan py-4 px-6 text-white'>
      <div className='flex items-center gap-4 mb-4'>
        <div className='bg-white w-16 h-16 rounded-full flex items-center justify-center'>
          img
        </div>
        <h3 className='font-semibold text-xl'>Category Name</h3>
      </div>
      <div className='flex items-center gap-4 overflow-x-auto no-scrollbar px-4'>
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className='h-[180px] w-[150px] bg-white text-black rounded-xl overflow-hidden flex-shrink-0 flex flex-col items-center'
          >
            <div>
              <img src='/Adds/ads-1.jpeg' className='aspect-video' />
            </div>
            <div className='text-center py-2'>
              <h4 className='text-lg font-semibold'>Producto</h4>
              <h5 className='mt-4 text-lg'>$50000</h5>
            </div>
          </div>
        ))}
      </div>
      <div className='pt-4'>
        <button className='bg-buttonsLightGreen w-full h-14 rounded-full'>Ver mas Productos</button>
      </div>
    </div>
  )
}
