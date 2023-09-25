import React from 'react';
import Logo from "../assets/logo.png";
import { FaInstagram,  } from "react-icons/fa";
import {  FaXTwitter,FaFacebookF,FaLinkedinIn,FaLocationDot,FaRegCopyright  } from "react-icons/fa6";
import {  LuPhoneCall  } from "react-icons/lu";
import RootedBottom from './RootedBottom';





const Footer = () => {
  return ( 
    <>
        <div className='sm:grid sm:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-3 p-5  '
     style={{marginTop:"140px", marginLeft:"50px"}}
    > 
       <div>
          <img src={Logo}    alt='logo'  />
          <p className='text-white mt-3 text-sm'>
            Getlinked tech hackathon is a technology innovation program established by a group of organizations
            with the aim of showcasing young and talented individuals in the field of technology
            </p>
            <p className='text-white mt-20 text-sm'>Terms of Use <span className='text-purple-700'>|</span> Privacy Policy </p>
       </div>
       <div className=''>
          <p className='text-purple-900 font-bold'> Useful Links</p>
          <p className='text-white font-semibold text-sm mt-4'>Overview</p>
              <p className='text-white font-semibold text-sm mt-4'>Timeline</p>
              <p className='text-white font-semibold text-sm mt-4'>FAQS</p>
              <p className='text-white font-semibold text-sm mt-4'>Register</p>
              <div className='flex mt-4'>
                   <p className='text-purple-700 font-semibold text-sm mr-6 '>Follow us</p>
                   <FaInstagram  color='white' className='mr-2'/>
                    <FaXTwitter color='white' className='mr-2'  />
                    <FaFacebookF color="white" className='mr-2'  />
                    <FaLinkedinIn color='white' className='mr-2'/>      
              </div>
       </div>
       <div className=''>
          <p className='text-purple-700 font-semibold '>Contact Us</p>
          <p className='flex items-center mt-5'>
          <LuPhoneCall  color='white'/>
           <h3 className='text-white ml-3'>+234 879 8885</h3>  
          </p>
          <p className='flex items-center  mt-5 '>
           <FaLocationDot color='white  ' />
           <h3 className='text-white  ml-3'>27 Alara street <br /> Yaba 1000012, <br /> Lagos state</h3>  
          </p>   
       </div>
    </div> 
     <RootedBottom  /> 
    </>
   
  )
}

export default Footer