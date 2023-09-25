import React from 'react';
import Logo from "../assets/logo.png";
import { FaInstagram,  } from "react-icons/fa";
import {  FaXTwitter,FaFacebookF,FaLinkedinIn,FaLocationDot,FaRegCopyright  } from "react-icons/fa6";
import {  LuPhoneCall  } from "react-icons/lu";





const Footer = () => {
  return (
    <div style={{marginTop:"200px"}}>
    <div className='sm:grid sm:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-3 p-5 '
    >
        <div>
             <div>
                 <img src={Logo}    alt='logo'  />
                 <p className='text-white mt-3 text-sm'>
                    Getlinked tech hackathon is a technology innovation program established by a group of organizations
                     with the aim of showcasing young and talented individuals in the field of technology
                 </p>
                 <p className='text-white mt-20 text-sm'>Terms of Use <span className='text-purple-700'>|</span> Privacy Policy </p>
             </div>
        </div>
        <div className=''>
              <p className='text-purple-700 font-semibold '>Useful Links</p>
              <p className='text-white font-semibold text-sm mt-4'>Overview</p>
              <p className='text-white font-semibold text-sm mt-4'>Timeline</p>
              <p className='text-white font-semibold text-sm mt-4'>FAQS</p>
              <p className='text-white font-semibold text-sm mt-4'>Register</p>
              <div className='flex mt-4' >
                    <p className='text-purple-700 font-semibold text-sm mr-6 '>Follow us</p>
                    <FaInstagram  color='white' className='mr-2'/>
                    <FaXTwitter color='white' className='mr-2'  />
                    <FaFacebookF color="white" className='mr-2'  />
                    <FaLinkedinIn color='white' className='mr-2'/>      
              </div> 
        </div>
        <div >
             <div className=''>
                 <p className='text-purple-700 font-semibold '>Contact Us</p>
                 <div className='flex mt-6 items-center flex  '>
                     <LuPhoneCall  color='white'/>
                     <p className='text-white ml-3'>+234 879 8885</p>
                 </div>
                 <div className='flex '>  
                     <FaLocationDot color='white' />
                     <p className='text-white text-sm ml-3'>27 Alara street <br /> Yaba 1000012, <br /> Lagos state</p>
                 </div>        
             </div>
        </div> 
    </div>
    <p className='flex items-center text-white text-sm p-10' >
       All rights reserved
      <FaRegCopyright className='ml-2' />
      <span className='ml-2'> getlinked  limited</span>                  
     </p> 
 </div>
  )
}

export default Footer