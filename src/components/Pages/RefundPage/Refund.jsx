import React, { useState } from 'react';
import RefundRequestForm from './RefundRequestForm';
import RefundRequestList from './RefundRequestList';
import Hero from '../../SharePage/Hero';

const Refund = () => {

    return (
    
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <div>
                <h1>Please Complete the Refund Request Form</h1>
                <p className='py-4'>Please fill all of the information carefully and submit to start the next step to get the approval from warehouse manager. </p>
            </div>
            <RefundRequestForm></RefundRequestForm>
            

            <div className="mt-16 mb-5">
            <h1>Show The List Available Refund Request</h1>
                <p className='py-4'>These are all the list of refund request at these moment. Here you can check and update the refund request information. </p>
            </div>
            <RefundRequestList></RefundRequestList>

        </div>
    );
};

export default Refund;