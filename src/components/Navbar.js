import { useState } from "react";
import Logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import close from  "../assets/close.png";
import { Link } from "react-router-dom";
import Button from "./Button";

 



const Navbar = () => {
  let Links =[
    {name:"TimeLine",link:"#timeline"},
    {name:"Overview",link:"#overview"},
    {name:"FAQS",link:"#faqs"},
    {name:"CONTACT",link:"/contact"},
  ];
  let [open,setOpen]=useState(false);
return (
  <div className='shadow-md w-full fixed top-0 left-0 '>
    <div className='md:flex items-center justify-between bg-purple py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
      <span className='text-3xl mr-1 pt-2 cursor-pointer'>
        <Link to={'/'}>
           <img src={Logo}   alt='logo'  />
        </Link>
      </span>
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute text-white right-8 top-6 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
            <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
          </li>
        ))
      }
      <Link to={'/register'}>
        <button className='bg-purple-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-purple-400 
          duration-500'>
          Register
      </button>
      </Link>
      
    </ul>
    </div>
  </div>
)
  
};

export default Navbar;