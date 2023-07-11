import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin7Line } from 'react-icons/ri';
import DisplaySpinner from '../../Loading/DisplaySpinner';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/UserContext';


const RefundProductList = ({ refundProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingRequest, setEditingRequest] = useState(null);

  const{allRefundRequest, setAllRefundRequest}=useContext(AuthContext);


  useEffect(() => {
    fetch('http://localhost:5000/tht/refundRequest')
      .then((response) => response.json())
      .then((data) => {
        setAllRefundRequest(data);
      })
      .catch((error) => {
        console.error('Error occurred during the request:', error);
      });
  }, []);


  //create a function to delete a user from the frontend and database both side 
  const deleteUser = async (orderNumber) => {
    try {
      await axios.delete(`http://localhost:5000/tht/refundRequest/delete/${orderNumber}`);
      toast.success('User deleted successfully');
      setAllRefundRequest(allRefundRequest.filter((request) => request?.orderNumber !== orderNumber));
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user');
    }
  };
  

  // const fetchData = async () => {
  //   try {
  //     const url = "https://api.daraz.com.bd/category/tree/get"; // Replace <your_url_here> with the actual URL from your cURL request

  //     const requestData = {
  //       access_token: '37c66819338b4562e17675b8c5c4dbd0',
  //       sign_method: 'sha256',
  //       sign: 'D13F2A03BE94D9AAE9F933FFA7B13E0A5AD84A3DAEBC62A458A3C382EC2E91EC',
  //       app_key: '1234567',
  //       timestamp: '1688979906470'
  //     };

  //     const response = await axios.post(url, requestData, {
  //       headers: {
  //         'Content-Type': 'application/json;charset=utf-8'
  //       }
  //     });

  //     const responseData = response.data;
  //     console.log(responseData);
  //     // Process the response data as per your requirements
  //   } catch (error) {
  //     console.error('Error retrieving category tree:', error);
  //   }
  // };

  // fetchData();


  // const saveUser = (orderNumber,editingRequest) => {
  //   updateUser(orderNumber, editingRequest);
  //   setAllRefundRequest(allRefundRequest.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  //   setEditingRequest(null);
  // };


  //create a function to update a user from the frontend and database both side 
  const updateUser = async (orderNumber, editingRequest) => {
    try {
      const response = await axios.put(`https://grozziie.zjweiting.com:8033/tht/users/update/${orderNumber}`, editingRequest);
      toast.success("user information updated successfully");
      // Optionally, you can show a success message to the user using a toast or other UI notification.
    } catch (error) {
      toast.error('Error updating user:', error);
      // Optionally, you can show an error message to the user using a toast or other UI notification.
    }
  };
  const saveUser = (userId,updatedUser) => {
    updateUser(userId, updatedUser);
    setAllRefundRequest(allRefundRequest.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingRequest(null);
  };

  

  const openEditModal = (refundRequest) => {
    console.log(refundRequest)
    setSelectedProduct(refundRequest);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };



  return (
    // <div>
    //   {refundProducts.map((product) => (
    //     <div key={product.orderNumber} className="mb-4">
    //       <p>Order Number: {product.orderNumber}</p>
    //       <p>Order Time: {product.orderTime}</p>
    //       <p>Application Time: {product.applicationDate}</p>
    //       <button onClick={() => deleteRefundProduct(product)}>Delete</button>
    //       <button onClick={() => openEditModal(product)}>Edit</button>
    //     </div>
    //   ))}

    //   {isModalOpen && (
    //     <div className="modal">
    //       <div className="modal-content">
    //         <h2>Edit Refund Product</h2>
    //         <div>
    //           {/* Render input fields with default values for editing */}
    //           <label>Order Number:</label>
    //           <input
    //             type="text"
    //             value={selectedProduct.orderNumber}
    //             onChange={(e) =>
    //               setSelectedProduct((prevProduct) => ({
    //                 ...prevProduct,
    //                 orderNumber: e.target.value,
    //               }))
    //             }
    //           />
    //           {/* Render other input fields with their respective default values */}
    //         </div>
    //         <button onClick={updateRefundProduct}>Update</button>
    //         <button onClick={closeEditModal}>Cancel</button>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div className="text-gray-800">
      <table className="w-full mb-10">
        <thead className="bg-orange-200">
          <tr className="py-2">
            <th className="text-start pl-2 py-2">No</th>
            <th className="text-start pl-2 py-2">Order Number</th>
            <th className="text-start pl-2 py-2">Customer Name</th>
            <th className="text-start ">Tracking Number</th>
            <th className="text-start hidden md:block">Order Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {loading ?
            <div >
              <DisplaySpinner></DisplaySpinner>
            </div>
            :
            allRefundRequest.map((request,index) => (
              <tr key={request.orderNumber} className="my-5">
                <td className="text-start pl-2 py-2 font-semibold" >{index+1}</td>
                <td className="text-start pl-2 py-2 font-semibold" >{request?.orderNumber}</td>
                <td className="text-start">{request?.customerUserName}</td>
                <td className="text-start">{request?.customerReturnTrackingNumber}</td>
                <td className="text-start hidden md:block">{request?.orderDate}</td>

                <td>
                  <btn className="text-blue-500 flex justify-center hover:cursor-pointer " onClick={() => openEditModal(request)}>
                    <FiEdit ></FiEdit>
                  </btn>
                </td>
                <td>
                  <btn className="text-red-500 flex justify-center hover:cursor-pointer" onClick={() => deleteUser(request?.orderNumber)}>
                    <RiDeleteBin7Line></RiDeleteBin7Line>
                  </btn>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>



      {/* modal part start from here to update a user information */}
      {editingRequest && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8">
            <h2 className="text-lg font-bold mb-4">Edit User</h2>
            <input
              type="text"
              placeholder="Name"
              value={editingRequest.name}
              onChange={(e) => setEditingRequest({ ...editingRequest, name: e.target.value })}
              className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Email"
              readOnly
              value={editingRequest.email}
              onChange={(e) => setEditingRequest({ ...editingRequest, email: e.target.value })}
              className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              value={editingRequest.phone}
              onChange={(e) => setEditingRequest({ ...editingRequest, phone: e.target.value })}
              className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Designation"
              value={editingRequest.designation}
              onChange={(e) => setEditingRequest({ ...editingRequest, designation: e.target.value })}
              className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Language"
              value={editingRequest.language}
              onChange={(e) => setEditingRequest({ ...editingRequest, language: e.target.value })}
              className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Country"
              value={editingRequest.country}
              onChange={(e) => setEditingRequest({ ...editingRequest, country: e.target.value })}
              className="mb-2 px-4 py-2 border border-gray-300 bg-white rounded-md w-full"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => saveUser(editingRequest.orderNumber, editingRequest)}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RefundProductList;
