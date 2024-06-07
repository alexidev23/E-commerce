/* eslint-disable react/prop-types */
import '../index.css'

export function Sponsors ({ sponsors }) {
  return (
    <section className='flex items-center h-60 py-2'>
      <div className='overflow-hidden w-full'>
        <div className='flex whitespace-nowrap animate-scroll'>
          {sponsors.map((src, index) => (
            <div className='h-full w-[300px] m-2 flex-shrink-0 cursor-pointer flex items-center justify-center' key={index}>
              <div className='rounded-3xl overflow-hidden mb-4 relative h-[140px] flex items-center justify-center px-4 bg-white'>
                <img src={src} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
