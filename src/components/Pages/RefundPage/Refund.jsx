import React, { useContext, useState } from 'react';
import RefundRequestForm from './RefundRequestForm';
import RefundRequestList from './RefundRequestList';
import Hero from '../../SharePage/Hero';
import Warehouse from './Warehouse';
import { AuthContext } from '../../../context/UserContext';
import LeaderStatus from './LeaderStatus';
import WarehouseManager from './WarehouseManager';

const Refund = () => {

    const { user } = useContext(AuthContext)


    return (

        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
           {user?.role==="Customer Service" && <>
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
            </>}

            {
                user?.role === "Warehouse" && <> <div className="mt-16 mb-5">
                    <h1>Requests Need To Approved By Warehouse Man</h1>
                    <p className='py-4'>These are all the list of refund request at these moment. Here you can check and update the refund request information.And then please approved their refund request.  </p>
                </div>

                    <Warehouse></Warehouse></>
            }

            {
                user?.role === "Customer Service Leader" && <> <div className="mt-16 mb-5">
                    <h1>Requests Need To Approved By Customer Service Leader</h1>
                    <p className='py-4'>These are all the list of refund request at these moment. Here you can check and update the refund request information.And then please approved their refund request.  </p>
                </div>

                    <LeaderStatus></LeaderStatus> </>
            }

            {
                user?.role === "Warehouse Manager" && <> <div className="mt-16 mb-5">
                    <h1>Requests Need To Approved By Warehouse Manager</h1>
                    <p className='py-4'>These are all the list of refund request at these moment. Here you can check and update the refund request information.And then please approved their refund request.  </p>
                </div>

                    <WarehouseManager></WarehouseManager> </>
            }



        </div>
    );
};

export default Refund;