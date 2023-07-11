import React, { useEffect, useState } from 'react';
import axios from 'axios';

 
const RefundProductList = ({ refundProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



 



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
  

     



  const deleteRefundProduct = (product) => {
    // Logic to delete the refund product
    console.log('Deleting refund product:', product);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const updateRefundProduct = () => {
    // Logic to update the refund product
    console.log('Updating refund product:', selectedProduct);
    closeEditModal();
  };

  return (
    <div>
      {refundProducts.map((product) => (
        <div key={product.orderNumber} className="mb-4">
          <p>Order Number: {product.orderNumber}</p>
          <p>Order Time: {product.orderTime}</p>
          <p>Application Time: {product.applicationDate}</p>
          <button onClick={() => deleteRefundProduct(product)}>Delete</button>
          <button onClick={() => openEditModal(product)}>Edit</button>
        </div>
      ))}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Refund Product</h2>
            <div>
              {/* Render input fields with default values for editing */}
              <label>Order Number:</label>
              <input
                type="text"
                value={selectedProduct.orderNumber}
                onChange={(e) =>
                  setSelectedProduct((prevProduct) => ({
                    ...prevProduct,
                    orderNumber: e.target.value,
                  }))
                }
              />
              {/* Render other input fields with their respective default values */}
            </div>
            <button onClick={updateRefundProduct}>Update</button>
            <button onClick={closeEditModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RefundProductList;
