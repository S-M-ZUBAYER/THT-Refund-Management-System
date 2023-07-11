import React, { useState } from 'react';

const RefundRequestForm = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderTime, setOrderTime] = useState(new Date().toLocaleTimeString());
  const [shopName, setShopName] = useState('');
  const [customerUsername, setCustomerUsername] = useState('');
  const [customerOrderNumber, setCustomerOrderNumber] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [orderAmount, setOrderAmount] = useState('');
  const [customerReturnTrackingNumber, setCustomerReturnTrackingNumber] = useState('');
  const [refundReason, setRefundReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [refundAmount, setRefundAmount] = useState('');
  const [customerReceivingAmount, setCustomerReceivingAmount] = useState('');
  const [customerReceivingAccount, setCustomerReceivingAccount] = useState('');
  const [customerBankName, setCustomerBankName] = useState('');
  const [customerBankAccountName, setCustomerBankAccountName] = useState('');
  const [customerBankSwift, setCustomerBankSwift] = useState('');
  const [remarks, setRemarks] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [applicationDate, setApplicationDate] = useState(new Date().toLocaleDateString());

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Form data object
    const formData = {
      orderNumber,
      orderTime,
      shopName,
      customerUsername,
      customerOrderNumber,
      orderDate,
      orderAmount,
      customerReturnTrackingNumber,
      refundReason,
      otherReason,
      refundAmount,
      customerReceivingAmount,
      customerReceivingAccount,
      customerBankName,
      customerBankAccountName,
      customerBankSwift,
      remarks,
      applicantName,
      applicationDate,
    };

    console.log(formData);
    // Add your logic for form submission here
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full px-5 py-5 border-2">
      <h2 className="text-xl font-semibold mb-8 py-2 bg-cyan-200">Refund Request Form</h2>

      <div className="grid grid-cols-1">
        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="orderNumber">Order Number:</label>
          <input
            type="text"
            id="orderNumber"
            className="border rounded-md p-2 w-9/12"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
        </div>

        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="orderTime">Order Time:</label>
          <input
            type="text"
            id="orderTime"
            className="border rounded-md p-2 w-9/12"
            value={orderTime}
            onChange={(e) => setOrderTime(e.target.value)}
            readOnly
          />
        </div>

        <div className="mb-4 flex justify-between items-center">
  <label htmlFor="shopName">Shop Name:</label>
  <select
    id="shopName"
    className="border rounded-md p-2 w-9/12"
    value={shopName}
    onChange={(e) => setShopName(e.target.value)}
  >
    <option value="">Select Shop Name</option>
    <option value="Shop 1">Shop 1</option>
    <option value="Shop 2">Shop 2</option>
    <option value="Shop 3">Shop 3</option>
    {/* Add more options as needed */}
  </select>
</div>


        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="customerUsername">Customer User Name:</label>
          <input
            type="text"
            id="customerUsername"
            className="border rounded-md p-2 w-9/12"
            value={customerUsername}
            onChange={(e) => setCustomerUsername(e.target.value)}
          />
        </div>

        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="customerOrderNumber">Customer Order Number:</label>
          <input
            type="text"
            id="customerOrderNumber"
            className="border rounded-md p-2 w-9/12"
            value={customerOrderNumber}
            onChange={(e) => setCustomerOrderNumber(e.target.value)}
          />
        </div>

        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="orderDate">Order Date:</label>
          <input
            type="text"
            id="orderDate"
            className="border rounded-md p-2 w-9/12"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
          />
        </div>

        <div className="mb-4 flex justify-between items-center">
          <label htmlFor="orderAmount">Order Amount:</label>
          <input
            type="text"
            id="orderAmount"
            className="border rounded-md p-2 w-9/12"
            value={orderAmount}
            onChange={(e) => setOrderAmount(e.target.value)}
          />
        </div>

        <div className="mb-4 flex justify-between items-center">
  <label htmlFor="customerReturnTrackingNumber">Shipping Tracking Number:</label>
  <input
    type="text"
    id="customerReturnTrackingNumber"
    className="border rounded-md p-2 w-9/12"
    value={customerReturnTrackingNumber}
    onChange={(e) => setCustomerReturnTrackingNumber(e.target.value)}
  />
</div>

<div className="mb-4 flex justify-between items-center">
  <label htmlFor="refundReason">Refund Reason:</label>
  <select
    id="refundReason"
    className="border rounded-md p-2 w-9/12"
    value={refundReason}
    onChange={(e) => setRefundReason(e.target.value)}
  >
    <option value="">Select a reason</option>
    <option value="Reason 1">Reason 1</option>
    <option value="Reason 2">Reason 2</option>
    <option value="Reason 3">Reason 3</option>
    <option value="Others">Others</option>
  </select>
  {refundReason === 'Others' && (
    <div className="mt-2 flex justify-between items-center">
      <label htmlFor="otherReason">Other Reason:</label>
      <textarea
        type="text"
        id="otherReason"
        className="border rounded-md p-2 w-9/12"
        value={otherReason}
        onChange={(e) => setOtherReason(e.target.value)}
      />
    </div>
  )}
</div>


<div className="mb-4 flex justify-between items-center">
  <label htmlFor="refundAmount">Refund Amount:</label>
  <input
    type="text"
    id="refundAmount"
    className="border rounded-md p-2 w-9/12"
    value={refundAmount}
    onChange={(e) => setRefundAmount(e.target.value)}
  />
</div>

<div className="mb-4 flex justify-between items-center">
  <label htmlFor="customerReceivingAmount">Customer Receiving Amount:</label>
  <input
    type="text"
    id="customerReceivingAmount"
    className="border rounded-md p-2 w-9/12"
    value={customerReceivingAmount}
    onChange={(e) => setCustomerReceivingAmount(e.target.value)}
  />
</div>

<div className="mb-4 flex justify-between items-center">
  <label htmlFor="customerReceivingAccount">Customer Receiving Account:</label>
  <input
    type="text"
    id="customerReceivingAccount"
    className="border rounded-md p-2 w-9/12"
    value={customerReceivingAccount}
    onChange={(e) => setCustomerReceivingAccount(e.target.value)}
  />
</div>

<div className="mb-4 flex justify-between items-center">
  <label htmlFor="customerBankName">Customer Bank Name:</label>
  <input
    type="text"
    id="customerBankName"
    className="border rounded-md p-2 w-9/12"
    value={customerBankName}
    onChange={(e) => setCustomerBankName(e.target.value)}
  />
</div>

<div className="mb-4 flex justify-between items-center">
  <label htmlFor="customerBankAccountName">Customer Bank Account Name:</label>
  <input
    type="text"
    id="customerBankAccountName"
    className="border rounded-md p-2 w-9/12"
    value={customerBankAccountName}
    onChange={(e) => setCustomerBankAccountName(e.target.value)}
  />
</div>

<div className="mb-4 flex justify-between items-center">
  <label htmlFor="customerBankSwift">Customer Bank Swift:</label>
  <input
    type="text"
    id="customerBankSwift"
    className="border rounded-md p-2 w-9/12"
    value={customerBankSwift}
    onChange={(e) => setCustomerBankSwift(e.target.value)}
  />
</div>

<div className="mb-4 flex justify-between items-center">
  <label htmlFor="remarks">Remarks:</label>
  <textarea
    id="remarks"
    className="border rounded-md p-2 w-9/12"
    value={remarks}
    onChange={(e) => setRemarks(e.target.value)}
  ></textarea>
</div>

<div className="mb-4 flex justify-between items-center">
  <label htmlFor="applicantName">Applicant Name:</label>
  <input
    type="text"
    id="applicantName"
    className="border rounded-md p-2 w-9/12"
    value={applicantName}
    onChange={(e) => setApplicantName(e.target.value)}
  />
</div>

<div className="mb-4 flex justify-between items-center">
  <label htmlFor="applicationDate">Application Date:</label>
  <input
    type="text"
    id="applicationDate"
    className="border rounded-md p-2 w-9/12"
    value={applicationDate}
    onChange={(e) => setApplicationDate(e.target.value)}
    readOnly
  />
</div>

<button type="submit"className="bg-gradient-to-r from-green-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded">
  Submit
</button>
</div>
</form>
);
};

export default RefundRequestForm;
