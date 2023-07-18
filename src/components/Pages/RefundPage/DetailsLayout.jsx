import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const DetailsLayout = () => {
    const [loading, setLoading] = useState(false);
    const [currentRequest, setCurrentRequest] = useState([]);
    const [status,setStatus]=useState("");



    const currentPath = window.location.pathname;


    // Split the path by '/'
    const segments = currentPath.split('/');

    // Get the last segment
    const lastValue = segments[segments.length - 1];


    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/refund`; 
    navigate(path);
  }

    // const fetchSpecialData = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await axios.get('http://localhost:5000/tht/LeaderStatusSpecialRequest');
    //         const data = response.data;
    //         console.log(data); // You can process the data as needed
    //         setCurrentRequest(data[0])
    //         setLoading(false);
    //     } catch (error) {
    //         console.error('Error occurred during the request:', error);
    //         setLoading(false);
    //     }
    // };

    const fetchWarehoueManagerData = async (lastValue) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5000/tht/refundRequest/${lastValue}`);
            const data = response.data;
            console.log(data); // You can process the data as needed
            setCurrentRequest(data);
            console.log(currentRequest)
            if(data?.warehouseManagerStatus==="true"){
               setStatus("Finance") 
            }
            else{
                setStatus("warehouseManager") 
            }
            
            setLoading(false);
        } catch (error) {
            console.error('Error occurred during the request:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        // fetchSpecialData();
        fetchWarehoueManagerData(lastValue);
    }, []);


    const [selectedImage, setSelectedImage] = useState(null);
    console.log(currentRequest)

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const handleToUpdateWarehouseManagerStatus=async (orderNumber)=>{
        console.log(status)
        if(status==="warehouseManager"){
            console.log(status,"enter")
            try {
                const response = await axios.put(
                    `http://localhost:5000/tht/updateWarehouseManagerStatus/${orderNumber}`
                );
    
                if (response.status === 200) {
                    routeChange();
                    toast.success('Warehouse Manager status updated successfully');
                } else {
                    toast.error('Failed to update Warehouse Manager status');
                }
            } catch (error) {
                console.error('Error updating Warehouse Manager status:', error);
                toast.error('Failed to update Warehouse Manager status');
            }
        }
        else{
          try {
            console.log(status,"enter")
            const response = await axios.put(
                `http://localhost:5000/tht/updateFinanceStatus/${orderNumber}`
            );

            if (response.status === 200) {
                routeChange();
                toast.success('Finance status updated successfully');
            } else {
                toast.error('Failed to update Finance status');
            }
        } catch (error) {
            console.error('Error updating Finance status:', error);
            toast.error('Failed to update Finance status');
        }  
        }
        
    }

    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <div className=" mb-5">
                <h1><span className="bg-gradient-to-r from-blue-800 to-red-800 text-transparent bg-clip-text">{currentRequest?.customerUserName}</span> Refund Request Need To Check And Approved By Warehouse Manager</h1>
           
                <hr className='border-2 border-gray-800 my-5'></hr> </div>

            <div className="grid grid-cols-2 gap-10 text-left mx-10">

                <p><span className="font-semibold">Applicant Name:</span> {currentRequest?.applicantName}</p>
                <p><span className="font-semibold">Application Date:</span> {currentRequest?.applicationDate}</p>
                <p><span className="font-semibold">Customer Order Number:</span> {currentRequest?.customerOrderNumber}</p>
                <p><span className="font-semibold">Customer Return Tracking Number:</span> {currentRequest?.customerReturnTrackingNumber}</p>
                <p><span className="font-semibold">Order Time:</span> {currentRequest?.orderTime}</p>
                <p><span className="font-semibold">Shop Name:</span> {currentRequest?.shopName}</p>
                <p><span className="font-semibold">Customer User Name:</span> {currentRequest?.customerUserName}</p>
                <p><span className="font-semibold">Order Number:</span> {currentRequest?.orderNumber}</p>
                <p><span className="font-semibold">Order Amount:</span> {currentRequest?.orderAmount}</p>
                <p><span className="font-semibold">Order Date:</span> {currentRequest?.orderDate}</p>
                <p><span className="font-semibold">Refund Amount:</span> {currentRequest?.refundAmount}</p>
                <p><span className="font-semibold">Customer Bank Name:</span> {currentRequest?.customerBankName}</p>
                <p><span className="font-semibold">Customer Bank Account Name:</span> {currentRequest?.customerBankAccountName}</p>
                <p><span className="font-semibold">Customer Bank Swift:</span> {currentRequest?.customerBankSwift}</p>
                <p><span className="font-semibold">Customer Receiving Account:</span> {currentRequest?.customerReceivingAccount}</p>
                <p><span className="font-semibold">Customer Receiving Amount:</span> {currentRequest?.customerReceivingAmount}</p>
                <p><span className="font-semibold">Refund Reason:</span> {currentRequest?.refundReason}</p>
                <p><span className="font-semibold">Other Reason:</span> {currentRequest?.otherReason}</p>
                <p><span className="font-semibold">Remarks:</span> {currentRequest?.remarks}</p>
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
            <div className="flex justify-end items-center">
               <div className=" flex justify-end ">
                <Link to="/refund"> 
                <btn className="font-semibold mr-5 hover:cursor-pointer bg-red-300 px-5 py-2 rounded-tl-lg rounded-br-lg">Cancel</btn>
                    </Link>
            </div>

            <div className=" flex justify-end ">   
                <btn onClick={()=>handleToUpdateWarehouseManagerStatus(currentRequest?.orderNumber)} className="font-semibold hover:cursor-pointer bg-yellow-200 px-5 py-2 rounded-tl-lg rounded-br-lg">Approve</btn>
            </div> 
            </div>
            
        </div>

    );
};

export default DetailsLayout;

