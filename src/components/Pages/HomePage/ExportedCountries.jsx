import React from 'react'

import Singapore from '../../../assets/singapore.jpg';
import Malaysia from '../../../assets/malaysia.jpg';
import Thailand from '../../../assets/thailand.jpg';
import Vietnam from '../../../assets/vietnam.jpeg';
import Indonesia from '../../../assets/indonesia.jpg';
import Philippines from '../../../assets/philippines.jpg';

import SelectsCard from './SelectsCard';

const ExportedCountries = () => {
  return (
    <div className="mt-20">
      <div className="w-full text-center">
      <h1 className="">Show the List of Countries where we exported our Products </h1>
        <p className='py-4'>These are the list and show some historical place of these Countries where we export our product. </p>
      </div>
      <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={Singapore} text='Singapore' />
    <SelectsCard bg={Malaysia} text='Malaysia' />
    <SelectsCard bg={Thailand} text='Thailand' />
    <SelectsCard bg={Vietnam} text='Vietnam' />
    <SelectsCard bg={Indonesia} text='Indonesia' />
    <SelectsCard bg={Philippines} text='Philippines' />
    
        
    </div>
    </div>
    
  )
}

export default ExportedCountries;