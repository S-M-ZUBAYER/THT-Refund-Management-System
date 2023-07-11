import React, { useState } from 'react';
import RefundRequestForm from './RefundRequestForm';
import RefundRequestList from './RefundRequestList';
import Hero from '../../SharePage/Hero';

const Refund = () => {
    const [refundProducts, setRefundProducts] = useState([{ orderNumber: "09", orderTime: "3:26:11 PM", shopName: "Shop 1", customerUsername: "Jarin", customerOrderNumber: "232323s2323", orderDate: "3-3-2022", orderAmount: "3434", customerReturnTrackingNumber: "34234234234ewr", refundReason: "Reason 2", otherReason: "", applicantName: "jannat", applicationDate: "7/9/2023", customerBankAccountName: "Jarinere jaman", customerBankName: " islamia bank", customerBankSwift: "4324323424", customerOrderNumber: "232323s2323", customerReceivingAccount: "dsfas3432434", customerReceivingAmount: "2323232", customerReturnTrackingNumber: "34234234234ewr", customerUsername: "Jarin", orderAmount: "3434", orderDate: "3-3-2022", orderTime: "3:26:11 PM", otherReason: "", refundAmount: "42342323", refundReason: "Reason 2", remarks: "dsaffdsaew4r23w4", shopName: "Shop 1" }, { orderNumber: "121", orderTime: "3:26:11 PM", shopName: "Shop 1", customerUsername: "Jarin", customerOrderNumber: "232323s2323", orderDate: "3-3-2022", orderAmount: "3434", customerReturnTrackingNumber: "34234234234ewr", refundReason: "Reason 2", otherReason: "", applicantName: "jannat", applicationDate: "7/9/2023", customerBankAccountName: "Jarinere jaman", customerBankName: " islamia bank", customerBankSwift: "4324323424", customerOrderNumber: "232323s2323", customerReceivingAccount: "dsfas3432434", customerReceivingAmount: "2323232", customerReturnTrackingNumber: "34234234234ewr", customerUsername: "Jarin", orderAmount: "3434", orderDate: "3-3-2022", orderTime: "3:26:11 PM", otherReason: "", refundAmount: "42342323", refundReason: "Reason 2", remarks: "dsaffdsaew4r23w4", shopName: "Shop 1" }])

    return (
    
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <div>
                <h1>Please Complete the Refund Request Form</h1>
                <p className='py-4'>Please fill all of the information carefully and submit to start the next step to get the approval from warehouse manager. </p>
            </div>
            <RefundRequestForm></RefundRequestForm>
            <RefundRequestList
                refundProducts={refundProducts}
            ></RefundRequestList>
        </div>
    );
};

export default Refund;