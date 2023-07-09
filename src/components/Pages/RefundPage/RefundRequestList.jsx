import React, { useState } from 'react';

const RefundProductList = ({ refundProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
