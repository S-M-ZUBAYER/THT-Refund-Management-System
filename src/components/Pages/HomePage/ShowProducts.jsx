import React from 'react'


import Thermal from '../../../assets/Thermal.png';
import Thermal1 from '../../../assets/Thermal-1.png';
import dot from '../../../assets/dot.png';
import dot1 from '../../../assets/dot-1.png';
import attendance from '../../../assets/attendance.png';


const ShowProducts = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Show some products of our Company </h1>
        <p className='py-4'>These are some of the printer of our company. These are the some of model in specific printer. </p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 transition-transform duration-300 ease-out transform hover:scale-105' src={Thermal} alt="/" />
            <img className='w-full h-full object-cover transition-transform duration-300 ease-out transform hover:scale-105' src={ dot} alt="/" />
            <img className='w-full h-full object-cover transition-transform duration-300 ease-out transform hover:scale-105' src={dot1} alt="/" />
            <img className='w-full h-full object-cover transition-transform duration-300 ease-out transform hover:scale-105' src={Thermal1} alt="/" />
            <img className='w-full h-full object-cover transition-transform duration-300 ease-out transform hover:scale-105' src={attendance} alt="/" />
        </div>
    </div>
  )
} 

export default ShowProducts;