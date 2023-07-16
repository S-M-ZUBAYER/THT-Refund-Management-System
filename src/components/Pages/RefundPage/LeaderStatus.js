
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin7Line } from 'react-icons/ri';
// Import the correct DisplaySpinner component based on its actual location
import DisplaySpinner from '../../Loading/DisplaySpinner';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/UserContext';

const LeaderStatus = ({ refundProducts }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [editingRequest, setEditingRequest] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [allLeaderRequest, setAllLeaderRequest] = useState([]);
    const [allSpecialRequest, setAllSpecialRequest] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchAllQuery, setSearchAllQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handleSearchAllChange = (event) => {
        setSearchAllQuery(event.target.value);
    };

    const filteredSpecialRequests = allSpecialRequest.filter((request) =>
     request.customerUserName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredAllRequests = allLeaderRequest.filter((request) =>
    request.customerUserName.toLowerCase().includes(searchAllQuery.toLowerCase())
   );
   

    const handleOptionChange = (special) => {
        console.log(special)
        setEditingRequest({ ...editingRequest, special: !special })
    };

    const { allRefundRequest, setAllRefundRequest } = useContext(AuthContext);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:5000/tht/LeaderStatusRequest');
            const data = response.data;
            console.log(data); // You can process the data as needed
            setAllLeaderRequest(data.filter(item => !item.special));
            setAllSpecialRequest(data.filter(item => item.special));
            setLoading(false);
        } catch (error) {
            console.error('Error occurred during the request:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteRequest = async (orderNumber) => {
        try {
            await axios.delete(`http://localhost:5000/tht/refundRequest/delete/${orderNumber}`);
            toast.success('User deleted successfully');
            setAllLeaderRequest((prevRequests) => prevRequests.filter((request) => request?.orderNumber !== orderNumber));
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Failed to delete user');
        }
    };

    const openEditModal = (refundRequest) => {
        setEditingRequest(refundRequest);
        setIsModalOpen(true);
    };

    const updateRequest = async (orderNumber, editingRequest) => {
        try {
            const response = await axios.put(`http://localhost:5000/tht/refundRequest/update/${orderNumber}`, editingRequest);
            toast.success('User information updated successfully');
        } catch (error) {
            console.error('Error updating user:', error);
            toast.error('Failed to update user');
        }
    };

    const updateLeaderStatus = async (orderNumber) => {
        try {
            const response = await axios.put(
                `http://localhost:5000/tht/updateLeaderStatus/${orderNumber}`
            );

            if (response.status === 200) {
                setAllLeaderRequest((prevRequests) =>
                    prevRequests.map((request) => {
                        if (request.orderNumber === orderNumber) {
                            return { ...request, warehouseStatus: true };
                        }
                        return request;
                    })
                );
                // Update the button's className and innerText
                const warehouseStatusBtn = document.getElementById(`warehouseStatusBtn${orderNumber}`);
                if (warehouseStatusBtn) {
                    warehouseStatusBtn.className = "bg-lime-200 px-5 rounded-tl-lg rounded-br-lg py-1";
                    warehouseStatusBtn.innerText = "Done";
                }
                toast.success('Customer service Leader status updated successfully');
            } else {
                toast.error('Failed to update warehouse status');
            }
        } catch (error) {
            console.error('Error updating service Leader status:', error);
            toast.error('Failed to update service Leader status');
        }
    };


    const saveRequest = (orderNumber, updatedRequest) => {
        updateRequest(orderNumber, updatedRequest);
        setAllLeaderRequest((prevRequests) =>
            prevRequests.map((request) => (request.orderNumber === orderNumber ? updatedRequest : request))
        );
        setEditingRequest(null);
    };

  

    return (
        <div className="text-gray-800 w-full">
             <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                    <input
                        type="text"
                        placeholder="Search by Customer Name"
                        className="border border-gray-300 rounded-lg py-1 px-4 mb-2 md:mr-1 md:mb-0 bg-white"
                        value={searchAllQuery}
                        onChange={handleSearchAllChange}
                    />
                    <btn
                        
                        className="bg-[#004368] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-md"
                        onClick={() => setSearchAllQuery('')}
                    >
                        Clear
                    </btn>
                </div>
            </div>

            <table className="w-full mb-10">
                <thead className="bg-gradient-to-r from-green-300 to-yellow-300">
                    <tr className="py-2">
                        <th className="text-start pl-2 py-2">No</th>
                        <th className="text-start pl-2 py-2">Order Number</th>
                        <th className="text-start pl-2 py-2">Customer Name</th>
                        <th className="text-start py-2">Tracking Number</th>
                        <th className="text-start hidden md:block py-2">Order Date</th>
                        <th className="text-start py-2">Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <div>
                            <DisplaySpinner></DisplaySpinner>
                        </div>
                    ) : (
                        filteredAllRequests.length !== 0 &&
                        filteredAllRequests?.map((request, index) => (
                            <tr key={request.orderNumber} className="my-5">
                                <td className="text-start pl-2 py-2 font-semibold">{index + 1}</td>
                                <td className="text-start pl-2 py-2 font-semibold">{request?.orderNumber}</td>
                                <td className="text-start py-2">{request?.customerUserName}</td>
                                <td className="text-start py-2">{request?.customerReturnTrackingNumber}</td>
                                <td className="text-start hidden md:block py-2">{request?.orderDate}</td>
                                <td className="text-start py-2">
                                    {request?.customerServiceLeaderStatus === true ? (
                                        <btn className="bg-lime-200 rounded-tl-lg rounded-br-lg px-5 py-1">Done</btn>
                                    ) : (
                                        <btn
                                            onClick={() => updateLeaderStatus(request?.orderNumber)}
                                            id={`warehouseStatusBtn${request?.orderNumber}`}
                                            className="bg-red-300 rounded-tl-lg rounded-br-lg px-2 py-1 hover:cursor-pointer"
                                        >
                                            Approve
                                        </btn>
                                    )}
                                </td>
                                <td>
                                    <btn className="text-blue-500 flex justify-center hover:cursor-pointer" onClick={() => openEditModal(request)}>
                                        <FiEdit></FiEdit>
                                    </btn>
                                </td>
                                <td>
                                    <btn className="text-red-500 flex justify-center hover:cursor-pointer" onClick={() => deleteRequest(request?.orderNumber)}>
                                        <RiDeleteBin7Line></RiDeleteBin7Line>
                                    </btn>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>



            <div className="mt-32 mb-5">
                <hr className='border-2 border-gray-800 my-5'></hr>
                <h1><span className="bg-gradient-to-r from-blue-800 to-red-800 text-transparent bg-clip-text">Special Requests</span>  Need To Approved By Customer Service Leader</h1>
                <p className='py-4'>These are all the list of special refund request at these moment. Here you can check and update the special refund request information.And then please approved their refund request as soon as possible.  </p>
            </div>
            
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                    <input
                        type="text"
                        placeholder="Search by Customer Name"
                        className="border border-gray-300 rounded-lg py-1 px-4 mb-2 md:mr-1 md:mb-0 bg-white"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <btn
                        
                        className="bg-[#004368] hover:bg-blue-700 text-white font-bold py-1 px-8 rounded-md"
                        onClick={() => setSearchQuery('')}
                    >
                        Clear
                    </btn>
                </div>
            </div>


            <table className="w-full mb-10">
                <thead className="bg-gradient-to-r from-green-300 to-yellow-300">
                    <tr className="py-2">
                        <th className="text-start pl-2 py-2">No</th>
                        <th className="text-start pl-2 py-2">Order Number</th>
                        <th className="text-start pl-2 py-2">Customer Name</th>
                        <th className="text-start py-2">Tracking Number</th>
                        <th className="text-start hidden md:block py-2">Order Date</th>
                        <th className="text-start py-2">Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <div>
                            <DisplaySpinner></DisplaySpinner>
                        </div>
                    ) : (
                        filteredSpecialRequests.length !== 0 &&
                        filteredSpecialRequests?.map((request, index) => (
                            <tr key={request.orderNumber} className="my-5">
                                <td className="text-start pl-2 py-2 font-semibold">{index + 1}</td>
                                <td className="text-start pl-2 py-2 font-semibold">{request?.orderNumber}</td>
                                <td className="text-start py-2">{request?.customerUserName}</td>
                                <td className="text-start py-2">{request?.customerReturnTrackingNumber}</td>
                                <td className="text-start hidden md:block py-2">{request?.orderDate}</td>
                                <td className="text-start py-2">
                                    {request?.customerServiceLeaderStatus === true ? (
                                        <btn className="bg-lime-200 rounded-tl-lg rounded-br-lg px-5 py-1">Done</btn>
                                    ) : (
                                        <btn
                                            onClick={() => updateLeaderStatus(request?.orderNumber)}
                                            id={`warehouseStatusBtn${request?.orderNumber}`}
                                            className="bg-red-300 rounded-tl-lg rounded-br-lg px-2 py-1 hover:cursor-pointer"
                                        >
                                            Approve
                                        </btn>
                                    )}
                                </td>
                                <td>
                                    <btn className="text-blue-500 flex justify-center hover:cursor-pointer" onClick={() => openEditModal(request)}>
                                        <FiEdit></FiEdit>
                                    </btn>
                                </td>
                                <td>
                                    <btn className="text-red-500 flex justify-center hover:cursor-pointer" onClick={() => deleteRequest(request?.orderNumber)}>
                                        <RiDeleteBin7Line></RiDeleteBin7Line>
                                    </btn>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* modal part start from here to update a user information */}
            {editingRequest && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-8 w-7/12 mx-auto">
                        <h2 className="text-lg font-bold mb-1bg-gradient-to-r from-green-300 to-yellow-300">Edit Refund Request Information</h2>


                        <div className="border-2 p-5  border-cyan-400">

                            <div className="mb-1 flex justify-between items-center">
                                <label htmlFor="customerOrderNumber">Customer User Name:</label> <input
                                    type="text"
                                    placeholder="customer User Name"
                                    value={editingRequest.customerUserName}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, customerUserName: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                /> </div>


                            <div className="mb-1 flex justify-between items-center">
                                <label htmlFor="customerOrderNumber">Shope Name:</label> <input
                                    type="text"
                                    placeholder="Shop Name"
                                    value={editingRequest.shopName}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, shopName: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                />
                            </div>


                            <div className="mb-1 flex justify-between items-center">
                                <label htmlFor="customerOrderNumber">Customer Bank Name:</label> <input
                                    type="text"
                                    placeholder="customer Bank Name"
                                    value={editingRequest.customerBankName}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, customerBankName: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                /> </div>

                            <div className="mb-1 flex justify-between items-center">
                                <label htmlFor="customerOrderNumber">Bank Account Name:</label>
                                <input
                                    type="text"
                                    placeholder="Customer Bank Account Name"
                                    value={editingRequest.customerBankAccountName}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, customerBankAccountName: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                />
                            </div>


                            <div className="mb-1 flex justify-between items-center">
                                <label htmlFor="customerOrderNumber">Customer Bank Swift:</label> <input
                                    type="text"
                                    placeholder="customer Bank Swift"
                                    value={editingRequest.customerBankSwift}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, customerBankSwift: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                /> </div>

                            <div className="mb-1 flex justify-between items-center">
                                <label htmlFor="customerOrderNumber">Customer Order Number:</label>
                                <input
                                    type="text"
                                    placeholder="Customer Order Number"
                                    value={editingRequest.customerOrderNumber}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, customerOrderNumber: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                />
                            </div>

                            <div className="mb-1 flex justify-between items-center">
                                <label htmlFor="customerOrderNumber">Customer Receiving Account:</label> <input
                                    type="text"
                                    placeholder="customer Receiving Account"
                                    value={editingRequest.customerReceivingAccount}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, customerReceivingAccount: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                /> </div>
                            <div className="mb-1 flex justify-between items-center">
                                <label htmlFor="customerOrderNumber">Customer Receiving Amount:</label>
                                <input
                                    type="text"
                                    placeholder="customer Receiving Amount"
                                    value={editingRequest.customerReceivingAmount}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, customerReceivingAmount: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                /> </div>


                            <div className="mb-1 flex justify-between items-center">
                                <label htmlFor="customerOrderNumber">Return Tracking Number:</label>
                                <input
                                    type="text"
                                    placeholder="Customer Return Tracking Number"
                                    value={editingRequest.customerReturnTrackingNumber}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, customerReturnTrackingNumber: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                />
                            </div>


                            <div className="mb-1 flex justify-between items-center">
                                <label htmlFor="customerOrderNumber">Order Amount:</label> <input
                                    type="text"
                                    placeholder="Order Amount"
                                    value={editingRequest.orderAmount}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, orderAmount: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                /> </div>


                            <div className="mb-1 flex justify-between items-center">
                                <label htmlFor="customerOrderNumber">Refund Amount:</label> <input
                                    type="text"
                                    placeholder="Refund Amount"
                                    value={editingRequest.refundAmount}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, refundAmount: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                /> </div>


                            <div className="mb-1 flex justify-between items-center">
                                <label htmlFor="customerOrderNumber">Refund Reason:</label> <input
                                    type="text"
                                    placeholder="Refund Reason"
                                    value={editingRequest.refundReason}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, refundReason: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                /> </div>

                            {/* Add other input fields for the remaining form data */}
                            <div className="flex justify-between items-center mb-5">
                                <label htmlFor="customerOrderNumber">Other Reason:</label> <input
                                    type="text"
                                    placeholder="Other Reason"
                                    value={editingRequest.otherReason}
                                    onChange={(e) => setEditingRequest({ ...editingRequest, otherReason: e.target.value })}
                                    className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-9/12"
                                /> </div>

                            <div className="flex items-center justify-end space-x-2 my-3 hover:cursor-pointer">
                                <input
                                    type="radio"
                                    id="specialOption"
                                    checked={editingRequest?.special}
                                    onClick={() => handleOptionChange(editingRequest?.special)}
                                    className={`appearance-none hover:cursor-pointer h-4 w-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${editingRequest?.special ? 'bg-black' : ''
                                        }`}
                                />
                                <label
                                    htmlFor="specialOption"
                                    className={`px-2 py-1 rounded-md hover:cursor-pointer `}
                                >
                                    Special
                                </label>
                            </div>

                            {/* Add other input fields for the remaining form data */}
                            {/* <input ... /> */}

                            <btn
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:cursor-pointer"
                                onClick={() => saveRequest(editingRequest.orderNumber, editingRequest)}
                            >
                                Update
                            </btn>
                            <btn
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md ml-2 hover:cursor-pointer"
                                onClick={() => setEditingRequest(null)}
                            >
                                Cancel
                            </btn>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeaderStatus;

