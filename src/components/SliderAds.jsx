/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { ArrowLeftIcon } from './icons/ArrowLeftIcon'
import { ArrowRightIcon } from './icons/ArrowRightIcon'

export function SliderAds ({ slides }) {
  const [ads, setAds] = useState(0)

  const previousSlides = () => {
    if (ads === 0) {
      setAds(slides.length - 1)
    } else {
      setAds(ads - 1)
    }
  }

  const nextSlides = () => {
    if (ads === slides.length - 1) {
      setAds(0)
    } else {
      setAds(ads + 1)
    }
  }

  return (
    <div className='flex items-center justify-center my-8 relative h-44 w-[360px] rounded-xl overflow-hidden m-auto'>
      <div
        className='bg-white w-full h-full flex transition ease-out duration-300'
        style={{
          transform: `translateX(-${ads * 100}%)`
        }}
      >
        {slides.map((s, index) => (
          <img key={index} src={s} alt={`Slide ${index + 1}`} className='h-full w-full' />
        ))}
      </div>
      <div className='absolute top-1/2 bottom-1/2 w-[360px] flex justify-between items-center'>
        <button className='bg-white mx-2' onClick={previousSlides}>
          <ArrowLeftIcon />
        </button>
        <button className='bg-white mx-2' onClick={nextSlides}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  )
}
