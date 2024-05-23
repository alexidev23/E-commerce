import React from 'react'

export function Category () {
  const category = [
    {
      id: 1,
      name: 'Technical'
    },
    {
      id: 2,
      name: 'Oferta'
    },
    {
      id: 3,
      name: 'Hot SALE'
    },
    {
      id: 4,
      name: 'Phones'
    },
    {
      id: 5,
      name: 'Computer'
    },
    {
      id: 6,
      name: 'Fix'
    }
  ]

  return (
    <div className='h-24 flex items-center px-4 overflow-x-scroll gap-4 no-scrollbar mb-4'>
      {category.map(category => (
        <div className='flex flex-col justify-center items-center gap-1' key={category.id}>
          <div className='bg-white w-16 h-16 rounded-full flex items-center justify-center border-cardDarkCyan border-2'>
            img
          </div>
          <h2 className='text-white text-sm'>{category.name}</h2>
        </div>
      ))}
    </div>
  )
}
