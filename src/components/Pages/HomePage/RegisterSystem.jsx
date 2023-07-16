

import React, { useCallback, useContext, useRef, useState } from 'react';
import { IoMdLogIn } from 'react-icons/io';
import { BiReset } from 'react-icons/bi';
import { BsEyeFill} from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';

const RegisterSystem = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [language, setLanguage] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false)
  const [lengthError, setLengthError] = useState(null);
  const [matchError, setMatchError] = useState(null);
  
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


const {user, setUser}=useContext(AuthContext);


  const registerRef = useRef(null);


  //use this function to navigate the route after registration
  const navigate = useNavigate();


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);

};

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

  // const handleRegister = (e) => {
  //     e.preventDefault();

  //     const formData = {
  //       email,
  //       password,
  //       confirmPassword,
  //       name,
  //       phoneNumber,
  //       role,
  //       country,
  //       image,
  //     };

  //     console.log(formData);





  //   };

  const handleRegister = (event) => {
    event.preventDefault();

    if (name === "" || image === "" || phoneNumber === "" || language === "" || country === "" || email === "" || role === "") {
      toast.error("Please provide all the information");
      return;
    }
    setLoading(true);
    const user = {
      email,
      name,
      phoneNumber,
      role,
      country,
      language,
      image
    };

    const form = event.target;

    fetch('http://localhost:5000/tht/check-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        const userExists = data.exists;
        console.log(userExists);

        if (!userExists) {
          // Validate password length
          if (password.length < 6) {
            setLengthError("Your password must be at least 6 characters long");
            toast.error(lengthError);
            setLoading(false);
            return;
          }

          // Validate password match
          if (password !== confirmPassword) {
            setMatchError("Your passwords do not match");
            toast.error(matchError);
            setLoading(false);
            return;
          }

          fetch('http://localhost:5000/tht/RFusers/add', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
              confirmPassword,
              name,
              phoneNumber,
              role,
              language,
              country,
              image,
              isAdmin: "false"
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              if (data) {
                localStorage.setItem('RFuser', JSON.stringify(user));
                setUser(user);
                setLoading(false);
                toast.success("Registration complete Successfully");

                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setName("");
                setPhoneNumber("");
                setRole("");
                setLanguage("");
                setCountry("");
                setImage(null);


                navigate("/");
              } else {
                toast.error(data.message);
                setLoading(false);
              }
            })
            .catch((error) => {
              console.error('Error:', error);
              toast.error("An error occurred during registration");
              setLoading(false);
            });
        } else {
          toast.error("This email already has an account");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error("An error occurred while checking user existence");
        setLoading(false);
      });
  };
//create this function to show the password toggle
const handleToShowPassword = (event) => {
  event.preventDefault();
  setShowPassword(!showPassword)
};
const handleToShowConfirmPassword = (event) => {
  event.preventDefault();
  setShowConfirmPassword(!showConfirmPassword)
};



  return (
    <div id="register" ref={registerRef} className='max-w-[1240px] mx-auto grid lg:grid-cols-4 gap-4 px-4 py-16'>
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
            <Link to="/login">
            <button>
              <IoMdLogIn className="text-green-300" size={50} />
            </button>
            </Link>
            
            <div>
            <Link to="/login"> <h3 className='py-2'>Log In</h3> </Link>
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
          <div className='flex justify-between items-center my-2 relative'>
            <label className='mr-2'>Password</label>
            <input
              className='border rounded-md p-1 w-9/12'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          {/* <button className="absolute right-0 pr-2" type={showConfirmPassword ? "text" : "password"} onClick={handleToShowPassword}>
                                    {
                                        showPassword ? <BsEyeFill className="text-slate-500"></BsEyeFill> : <RiEyeCloseLine className="text-slate-500"></RiEyeCloseLine>
                                    }

                                </button> */}
          </div>
          <div className='flex justify-between items-center my-2 relative'>
            <label className='text-sm'>Confirm Password</label>
            <input
              className='border rounded-md p-1 w-9/12'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* <button className="absolute right-0 pr-2" onClick={handleToShowConfirmPassword}>
                                    {
                                        showConfirmPassword ? <BsEyeFill className="text-slate-500"></BsEyeFill> : <RiEyeCloseLine className="text-slate-500"></RiEyeCloseLine>
                                    }

                                </button> */}
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
            <label className='mr-2'>Language</label>
            <input
              className='border rounded-md p-1 w-9/12'
              type='text'
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
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