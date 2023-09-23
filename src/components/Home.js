import React from 'react';
import Title from "../assets/title.png";
import Star from "../assets/star.png";
import Ignite from "../assets/ignite.png";
import Star1 from "../assets/star.png";
import Image1 from "../assets/image1.png";
import Vector from "../assets/Vector.png";
import Man from "../assets/man.png";
import "./imstyles.css";



const Home = () => {
  return (
    <div className='sm:grid sm:grid-cols-2 
      lg:grid-cols-2 xl:grid-cols-2 mt-20'
      >
         <div className='p-12'>
            <img src={Star}  alt='star' width="25px" className='ml-10'/>
             <img src={Title}  alt='title' width="1500px" />
              <p className='text-white font-medium'>
                   Participate in getLinked tech hackathon 2023
                </p>
                <p className='text-white font-medium'>
                    stand a chance to win a big prize
                </p>
                <button 
                style={{backgroundColor:"#D434FE"}}
                 className="rounded-sm mt-5  text-xs p-2 text-white font-bold">
               Register
            </button> 
             <div style={{color:"white", display:"flex",}} className='mt-10'>
                 <p className='ml-4 font-semibold text-2xl '>00 <span className='text-sm font-extralight'>H</span></p>
                 <p className='ml-4 font-semibold text-2xl'>00 <span className='text-sm font-extralight'>M</span></p>
                 <p className='ml-4 font-semibold text-2xl'>00 <span className='text-sm font-extralight'>S</span></p>
             </div>
            </div>
         <div className='pr-2'>
              <img  src={Ignite} width="400px" alt='ignite' className='pl-2 pt-4'/>
              <img  src={Vector}  alt='ignite' style={{marginLeft:"220px", width:"120px",}} />
              <img src={Star1} alt="star"  style={{marginTop:"55px", width:"20px",opacity:"0.5",marginLeft:"50px"}} />
              <div style={{display: "flex"}}>
                <img src={Image1} alt="globe" style={{width:"400px"}} className='img1'/>
                <img src={Man} alt="man" className='img2' style={{width:"428px",opacity:"0.5"}} />
              </div>    
         </div>
   </div>
  )
}

export default Home