import React, { useState, useEffect } from 'react';
import Title from "../assets/title.png";
import Star from "../assets/star.png";
import Ignite from "../assets/ignite.png";
import Star1 from "../assets/star.png";
import Image1 from "../assets/image1.png";
import Vector from "../assets/Vector.png";
import Man from "../assets/man.png";
import "./imstyles.css";



const Home = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date('2023-11-23T00:00:00Z'); // Set your target date and time here
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
             <p className='ml-4 font-semibold text-2xl '>{countdown.days} <span className='text-sm font-extralight'>D</span></p>
                 <p className='ml-4 font-semibold text-2xl '>{countdown.hours} <span className='text-sm font-extralight'>H</span></p>
                 <p className='ml-4 font-semibold text-2xl'>{countdown.minutes} <span className='text-sm font-extralight'>M</span></p>
                 <p className='ml-4 font-semibold text-2xl'>{countdown.seconds}<span className='text-sm font-extralight'>S</span></p>
             </div>
            </div>
         <div >
              <div >
                  <img  src={Ignite} width="400px" alt='ignite' className='pl-2 ml-20 pt-4'/>
                  <img  src={Vector}  alt='ignite' style={{marginLeft:"300px", width:"170px",}} />
                  <img src={Star1} alt="star"  style={{marginTop:"55px", width:"20px",opacity:"0.5",marginLeft:"50px"}} />
                  <div style={{display: "flex"}}>
                    <img src={Image1} alt="globe" style={{width:"400px"}} className='img1'/>
                    <img src={Man} alt="man" className='img2' style={{width:"428px",opacity:"0.5"}} />
              </div>    
              </div>
             
         </div>
   </div>
  )
}

export default Home