'use client'
import Tilt from 'react-parallax-tilt'

export default function ParallaxCard() {
  return (
    <Tilt className='p-10 overflow-visible'>
      <div className='relative bg-cover bg-me w-[300px] h-96 rounded-md from-gray-300 via-gray-100 to-gray-400 shadow-lg border border-gray-400 flex items-center justify-center'>
        <div className='bg-gradient-radial from-gray-200 via-gray-300 to-gray-400 w-[90%] h-[90%] rounded-md p-4 shadow-inner'>
          <div className='bg-dark py-1 rounded-md flex flex-col items-center'>
            <h3 className='text-sm'>Francesco Macaluso</h3>
            <h6 className='scale-75'>FrancescoMaca</h6>
          </div>
        </div>
      </div>  
    </Tilt>
  );
}