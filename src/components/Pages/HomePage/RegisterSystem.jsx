// import React, { useCallback, useState } from 'react';
// import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
// import { IoMdLogIn } from 'react-icons/io';
// import { BiReset } from 'react-icons/bi';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';


// const RegisterSystem = () => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [role, setRole] = useState('');
//   const [country, setCountry] = useState('');
//   const [image, setImage] = useState(null);

// // create this function to upload image
// const handleFileUpload = useCallback(async (acceptedFiles) => {
//   const apiKey = process.env.REACT_APP_IMG_BB_API_KEY;
//   const formData = new FormData();
//   formData.append('image', acceptedFiles[0]);
//   try {
//       const response = await axios.post(
//           `https://api.imgbb.com/1/upload?key=${apiKey}`,
//           formData
//       );
//       setImage(response.data.data.display_url)
//       toast.success("Image prepare for use successfully")
//   } catch (error) {
//       console.log(error);
//       toast.error(error)
//   }
// }, []);


// const handleRegister = (e) => {
//   e.preventDefault();

//   const formData = {
//     email,
//     password,
//     confirmPassword,
//     name,
//     phoneNumber,
//     role,
//     country,
//     image,
//   };

//   console.log(formData);
// };


//   return (
//     <div className='max-w-[1240px] mx-auto grid lg:grid-cols-4 gap-4 px-4 py-16'>
//       <div className='lg:col-span-2 flex flex-col justify-evenly'>
//         <div>
//           <h2>Purpose And How We Can Use This Site</h2>
//           <p className='py-4'>
//             This is the system for THT-Space Electrical Company Ltd. This site will help all kind of employee
//             of THT-Space Electrical Company Ltd who are working with the sectors of replacement, refund and repair
//             the products. This site make the working process dynamically. Each sectors employee has their specific
//             responsibilities to complete. Processing for every product will completed in different steps. Every 
//             step depend on the previous step. If anyone didn't complete the any step.This product process will 
//             not be continue for the next step. 
//           </p>
//         </div>
//         <div className='grid sm:grid-cols-2 gap-8 py-4'>
//           <div className='flex flex-col lg:flex-row items-center text-center'>
//             <button>
//               <IoMdLogIn className="text-green-300" size={50} />
//             </button>
//             <div>
//             <h3 className='py-2'>Log In</h3>
//                 <p className='py-1'>If You Already Have An Account Please Log In</p>
//             </div>
//           </div>
//           <div className='flex flex-col lg:flex-row items-center text-center'>
//             <button>
//               <BiReset className="text-yellow-400" size={50} />
//             </button>
//             <div>
//                 <h3 className='py-2'>Reset Password</h3>
//                 <p className='py-1'>If You Forget Your Password Please Reset Your password</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="lg:col-span-2 ml-5 border-2 px-3 pt-3">
//           <div className='border text-center bg-amber-200 font-semibold rounded-lg'>
//               <p className='pt-2'>If You Don't Have Any Account</p>
//               <p className='py-2'>Please Register</p>
//           </div>


// <form className='w-full'>
//   <div className='flex justify-between items-center my-2'>
//     <label className="mr-2 text-base">Email:</label>
//     <input className='border rounded-md p-1 w-9/12' type='email' />
//   </div>
//   <div className='flex justify-between items-center my-2'>
//     <label className="mr-2">Password</label>
//     <input className='border rounded-md p-1 w-9/12' type='password' />
//   </div>
//   <div className='flex justify-between items-center my-2'>
//     <label className=" text-sm">Confirm Password</label>
//     <input className='border rounded-md p-1 w-9/12' type='password' />
//   </div>
//   <div className='flex justify-between items-center my-2'>
//     <label className="mr-2">Name</label>
//     <input className='border rounded-md p-1 w-9/12' type='text' />
//   </div>
//   <div className='flex justify-between items-center my-2'>
//     <label className="mr-2">Phone Number</label>
//     <input className='border rounded-md p-1 w-9/12' type='tel' />
//   </div>
//   <div className='flex justify-between items-center my-2'>
//     <label className="mr-2">Role</label>
//     {/* <input className='border rounded-md p-1 w-full' type='text' /> */}
//     <select className='border rounded-md p-1 w-9/12'>
//                       <option>Select</option>
//                       <option>Customer Service</option>
//                       <option>Customer Service Leader</option>
//                       <option>Warehouse</option>
//                       <option>Finance</option>
//                       <option>Supplier</option>
//                   </select>
//   </div>
//   <div className='flex justify-between items-center my-2'>
//     <label className="mr-2">Country</label>
//     <input className='border rounded-md p-1 w-9/12' type='text' />
//   </div>
//   <div className='flex justify-between items-center my-2'>
//     <label className="mr-2">Image</label>
//     <input className='border rounded-md p-1 w-9/12' type='file' accept='image/*' />
//   </div>
//   <button className='w-full my-4' onClick={handleRegister}>Register</button>
// </form>

//       </div>
//     </div>
//   );
// };

// export default RegisterSystem;


import React, { useCallback, useState } from 'react';
import { IoMdLogIn } from 'react-icons/io';
import { BiReset } from 'react-icons/bi';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const RegisterSystem = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState(null);

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
      setImage(response.data.data.display_url);
      toast.success('Image prepared for use successfully');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = {
      email,
      password,
      confirmPassword,
      name,
      phoneNumber,
      role,
      country,
      image,
    };

    console.log(formData);

setEmail("");
setPassword("");
setConfirmPassword("");
setName("");
setPhoneNumber("");
setRole("");
setCountry("");
setImage(null);



  };

  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-4 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>Purpose And How We Can Use This Site</h2>
          <p className='py-4'>
            This is the system for THT-Space Electrical Company Ltd. This site will help all kind of employee
            of THT-Space Electrical Company Ltd who are working with the sectors of replacement, refund and repair
            the products. This site make the working process dynamically. Each sectors employee has their specific
            responsibilities to complete. Processing for every product will completed in different steps. Every
            step depend on the previous step. If anyone didn't complete the any step.This product process will
            not be continue for the next step.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <IoMdLogIn className="text-green-300" size={50} />
            </button>
            <div>
              <h3 className='py-2'>Log In</h3>
              <p className='py-1'>If You Already Have An Account Please Log In</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <BiReset className="text-yellow-400" size={50} />
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
        </div>
        <form className='w-full'>
          <div className='flex justify-between items-center my-2'>
            <label className='mr-2 text-base'>Email:</label>
            <input
              className='border rounded-md p-1 w-9/12'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center my-2'>
            <label className='mr-2'>Password</label>
            <input
              className='border rounded-md p-1 w-9/12'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center my-2'>
            <label className='text-sm'>Confirm Password</label>
            <input
              className='border rounded-md p-1 w-9/12'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center my-2'>
            <label className='mr-2'>Name</label>
            <input
              className='border rounded-md p-1 w-9/12'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center my-2'>
            <label className='mr-2'>Phone Number</label>
            <input
              className='border rounded-md p-1 w-9/12'
              type='tel'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center my-2'>
            <label className='mr-2'>Role</label>
            <select
              className='border rounded-md p-1 w-9/12'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Select</option>
              <option>Customer Service</option>
              <option>Customer Service Leader</option>
              <option>Warehouse</option>
              <option>Finance</option>
              <option>Supplier</option>
            </select>
          </div>
          <div className='flex justify-between items-center my-2'>
            <label className='mr-2'>Country</label>
            <input
              className='border rounded-md p-1 w-9/12'
              type='text'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className='flex justify-between items-center my-2'>
            <label className='mr-2'>Image</label>
            <input
              className='border rounded-md p-1 w-9/12'
              type='file'
              accept='image/*'
              onChange={(e) => handleFileUpload(e.target.files)}
            />
          </div>
          <button className='w-full my-4' onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterSystem;