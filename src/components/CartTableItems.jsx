import { useState } from 'react'
import { TrashIcon } from './icons/TrashIcon'

export function CartTableItems () {
  const [value, setValue] = useState(2)

  const increment = () => setValue(prevValue => prevValue + 1)

  const decrement = () => {
    if (value > 1) {
      setValue(prevValue => prevValue - 1)
    }
  }

  return (
    <div>
      <div className='px-6 pt-4 pb-2'>
        <h2 className='text-xl font-semibold'>Descripcion de tu pedido:</h2>
      </div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full text-left text-sm font-light'>
                <thead className='border-b font-medium dark:border-neutral-500'>
                  <tr className='text-xl font-medium bg-cyan-950'>
                    <th scope='col' className='px-6 py-2'>Producto</th>
                    <th scope='col' className='py-2 text-center'>Cantidad</th>
                    <th scope='col' className='px-6 py-2'>Precio</th>
                    <th scope='col' className='px-6 py-2' />
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b dark:border-neutral-500 text-lg font-medium'>
                    <td className='px-6 py-4'>Notebook Lenovo ThinkPad Ryzen 5 3440 16GB 500GB 15"</td>
                    <td className='py-4'>
                      <div className='relative w-24 flex justify-center h-10'>
                        <input
                          id='cantidad'
                          type='text'
                          className='w-24 py-1 rounded-lg text-center text-black'
                          value={value}
                          readOnly
                        />
                        <div className='w-24 absolute top-0 flex justify-between'>
                          <button
                            className='w-8 py-1 bg-cardDarkCyan text-xl h-10 rounded-l-lg'
                            onClick={increment}
                          >
                            +
                          </button>
                          <button
                            className='w-8 py-1 bg-cardDarkCyan text-xl h-10 rounded-r-lg'
                            onClick={decrement}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>$34000</td>
                    <td>
                      <button>
                        <TrashIcon />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
