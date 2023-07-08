import React, { useCallback, useState } from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';
import axios from 'axios';
import { toast } from 'react-hot-toast';


const RegisterSystem = () => {
  
  const [image,setImage]=useState(null);

// create this function to upload image
const handleFileUpload = useCallback(async (acceptedFiles) => {
  const apiKey = process.env.REACT_APP_IMG_BB_API_KEY;
  const formData = new FormData();
  formData.append('image', acceptedFiles[0]);
  try {
      const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${apiKey}`,
          formData
      );
      setImage(response.data.data.display_url)
      toast.success("Image prepare for use successfully")
  } catch (error) {
      console.log(error);
      toast.error(error)
  }
}, []);


const handleRegister=()=>{
  console.log("Register")
}


  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-4 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>Purpose And How We Can Use This Site</h2>
          <p className='py-4'>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
            <h3 className='py-2'>Log In</h3>
                <p className='py-1'>If You Already Have An Account Please Log In</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>Reset Password</h3>
                <p className='py-1'>If You Forget Your Password Please Reset Your password</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 ml-5 border-2 px-3 pt-3">
          <div className='border text-center bg-amber-200 font-semibold rounded-lg'>
              <p className='pt-2'>If You Don't Have Any Account</p>
              <p className='py-2'>Please Register</p>
              {/* <p className='bg-gray-800 text-gray-200 py-2'>Registration</p> */}
          </div>
          {/* <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                      <option>Customer Service</option>
                      <option>Warehouse</option>
                      <option>Finance</option>
                      <option>Supplier</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Register</button>
          </form> */}

<form className='w-full'>
  <div className='flex justify-between items-center my-2'>
    <label className="mr-2 text-base">Email:</label>
    <input className='border rounded-md p-1 w-9/12' type='email' />
  </div>
  <div className='flex justify-between items-center my-2'>
    <label className="mr-2">Password</label>
    <input className='border rounded-md p-1 w-9/12' type='password' />
  </div>
  <div className='flex justify-between items-center my-2'>
    <label className=" text-sm">Confirm Password</label>
    <input className='border rounded-md p-1 w-9/12' type='password' />
  </div>
  <div className='flex justify-between items-center my-2'>
    <label className="mr-2">Name</label>
    <input className='border rounded-md p-1 w-9/12' type='text' />
  </div>
  <div className='flex justify-between items-center my-2'>
    <label className="mr-2">Phone Number</label>
    <input className='border rounded-md p-1 w-9/12' type='tel' />
  </div>
  <div className='flex justify-between items-center my-2'>
    <label className="mr-2">Role</label>
    {/* <input className='border rounded-md p-1 w-full' type='text' /> */}
    <select className='border rounded-md p-1 w-9/12'>
                      <option>Select</option>
                      <option>Customer Service</option>
                      <option>Warehouse</option>
                      <option>Finance</option>
                      <option>Supplier</option>
                  </select>
  </div>
  <div className='flex justify-between items-center my-2'>
    <label className="mr-2">Country</label>
    <input className='border rounded-md p-1 w-9/12' type='text' />
  </div>
  <div className='flex justify-between items-center my-2'>
    <label className="mr-2">Image</label>
    <input className='border rounded-md p-1 w-9/12' type='file' accept='image/*' />
  </div>
  <button className='w-full my-4' onClick={handleRegister}>Register</button>
</form>

      </div>
    </div>
  );
};

export default RegisterSystem;
