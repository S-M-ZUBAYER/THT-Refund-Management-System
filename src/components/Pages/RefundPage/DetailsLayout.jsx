import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DetailsLayout = () => {
    const [loading, setLoading] = useState(false);
    const [currentRequest, setCurrentRequest] = useState([]);



    const currentPath = window.location.pathname;


    // Split the path by '/'
    const segments = currentPath.split('/');

    // Get the last segment
    const lastValue = segments[segments.length - 1];

    const fetchSpecialData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:5000/tht/LeaderStatusSpecialRequest');
            const data = response.data;
            console.log(data); // You can process the data as needed
            setCurrentRequest(data[0])
            setLoading(false);
        } catch (error) {
            console.error('Error occurred during the request:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSpecialData();
    }, []);


    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    console.log(currentRequest)

    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <div className=" mb-5">
                <h1><span className="bg-gradient-to-r from-blue-800 to-red-800 text-transparent bg-clip-text">{currentRequest?.customerUserName}</span>Refund Request Need To Check And Approved By Warehouse Manager</h1>
           
                <hr className='border-2 border-gray-800 my-5'></hr> </div>

            <div className="grid grid-cols-2 gap-10 text-left mx-10">

                <p><span className="font-semibold">Applicant Name:</span> {currentRequest.applicantName}</p>
                <p><span className="font-semibold">Application Date:</span> {currentRequest.applicationDate}</p>
                <p><span className="font-semibold">Customer Order Number:</span> {currentRequest.customerOrderNumber}</p>
                <p><span className="font-semibold">Customer Return Tracking Number:</span> {currentRequest.customerReturnTrackingNumber}</p>
                <p><span className="font-semibold">Order Time:</span> {currentRequest.orderTime}</p>
                <p><span className="font-semibold">Shop Name:</span> {currentRequest.shopName}</p>
                <p><span className="font-semibold">Customer User Name:</span> {currentRequest.customerUserName}</p>
                <p><span className="font-semibold">Order Number:</span> {currentRequest.orderNumber}</p>
                <p><span className="font-semibold">Order Amount:</span> {currentRequest.orderAmount}</p>
                <p><span className="font-semibold">Order Date:</span> {currentRequest.orderDate}</p>
                <p><span className="font-semibold">Refund Amount:</span> {currentRequest.refundAmount}</p>
                <p><span className="font-semibold">Customer Bank Name:</span> {currentRequest.customerBankName}</p>
                <p><span className="font-semibold">Customer Bank Account Name:</span> {currentRequest.customerBankAccountName}</p>
                <p><span className="font-semibold">Customer Bank Swift:</span> {currentRequest.customerBankSwift}</p>
                <p><span className="font-semibold">Customer Receiving Account:</span> {currentRequest.customerReceivingAccount}</p>
                <p><span className="font-semibold">Customer Receiving Amount:</span> {currentRequest.customerReceivingAmount}</p>
                <p><span className="font-semibold">Refund Reason:</span> {currentRequest.refundReason}</p>
                <p><span className="font-semibold">Other Reason:</span> {currentRequest.otherReason}</p>
                <p><span className="font-semibold">Remarks:</span> {currentRequest.remarks}</p>
                <p><span className="font-semibold">Warehouse Images:</span></p>
                {/* <div className="image-container">
        {currentRequest.wareHouseImg.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Warehouse Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className="image-thumbnail"
          />
        ))}
      </div> */}
                {/* <p>Finance Images:</p>
      <div className="image-container">
        {currentRequest.financeImg.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Finance Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className="image-thumbnail"
          />
        ))}
      </div> */}
                


            </div>
            {/* Modal or Lightbox */}
            {selectedImage && (
                <div className="modal-overlay">
                    <div className="modal">
                        <img src={selectedImage} alt="Selected Image" className="modal-image" />
                        <button onClick={handleCloseModal} className="modal-close-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className=" flex justify-end ">
                <btn className="font-semibold bg-yellow-200 px-5 py-2 rounded-tl-lg rounded-br-lg">Check</btn>

            </div>
        </div>

    );
};

export default DetailsLayout;