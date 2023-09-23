import React, { useState } from 'react'
import Star1 from "../assets/sata.png";
import Touch from "../assets/touch.png";
import { FaInstagram,  } from "react-icons/fa";
import {  FaXTwitter,FaFacebookF,FaLinkedinIn,FaLocationDot,FaRegCopyright  } from "react-icons/fa6";
import axios from "axios";
import { toast } from 'react-toastify';




const ContactPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
       [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://backend.getlinked.ai/hackathon/contact-form", formData);
      // console.log('Response from API:', response.data);
      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      toast.success("Your Message has been received");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='sm:grid sm:grid-cols-2 
    lg:grid-cols-2 xl:grid-cols-2 mt-20'
    >
         <div>
             <div className='p-10'>
                <img src={Star1}    alt='logo' className=''  /><br /><br />
                <img src={Touch}  alt='touch'  className=''/> <br/>
                <p className='text-white'>Contact <br /> Information</p><br />
                <p className='text-white'>27,Alara Street <br /> Yaba 100012<br />
                   Lagos State
                  </p><br />
                  <p className='text-white'>Call Us : 07067981819</p><br />
                  <p className='text-white'>
                  we are open from Monday-Friday<br />
                  08:00am - 05:00pm
                  </p><br />
                  <p className='text-purple-600 font-semibold'>Share on</p>
                  <div className='flex mt-4' >
                    <p className='text-purple-700 font-semibold text-sm mr-6 '>Follow us</p>
                    <FaInstagram  color='white' className='mr-2'/>
                    <FaXTwitter color='white' className='mr-2'  />
                    <FaFacebookF color="white" className='mr-2'  />
                    <FaLinkedinIn color='white' className='mr-2'/>      
              </div>              
             </div>
        </div>  
        <div className='p-20'>
          <div className='bg-gray-700 p-5'>
          <div >
                 <p style={{color:"#D434FE",marginTop:"20px"}}>
                  Questions or need assistance?<br />
                  Let us know about it
                 </p>
             </div>
             <form className="mt-10" onSubmit={handleSubmit}>
            <div className="mb-4"> 
              <input className="shadow bg-gray-700
               appearance-none border rounded w-full py-2 px-3
                text-white leading-tight focus:outline-none focus:shadow-outline"
                 required
                 id="first_name" 
                 type="text" 
                 name="first_name"
                 value={formData.name}
                 onChange={handleChange}
                 placeholder="First Name"/>
            </div>
            <div className="mb-6">
              <input className="shadow bg-gray-700 
                 appearance-none border rounded w-full py-2 px-3
                  text-white leading-tight focus:outline-none 
                  focus:shadow-outline"
                  required
                  type="email" 
                  placeholder="Mail"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  />
            </div>    
        <textarea id="message" rows="4"  className="block 
           bg-gray-700 p-2.5 w-full text-sm
            text-white bg-gray-50 rounded-lg border
             border-gray-300 focus:ring-blue-500 focus:border-blue-500
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
               dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message"
               required
               name="message"
              value={formData.message}
              onChange={handleChange}
               >
          
               </textarea>
            <div className="flex items-center justify-between mt-5 ml-12">
              <button className="bg-purple-600 hover:bg-purple-700
               text-white font-bold py-2 px-4 rounded focus:outline-none
                focus:shadow-outline"
                 type="submit">
                Submit
              </button>
            </div>
      </form>
     </div>      
 </div> 
</div>

  )
}

export default ContactPage

