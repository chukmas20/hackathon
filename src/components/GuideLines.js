import React from 'react'
import Rules from "../assets/rules.png";
import Sata from "../assets/sata.png";
import Lady from "../assets/lady.png";
import Star from "../assets/star.png";



const GuideLines = () => {
  return (
    <div className='sm:grid sm:grid-cols-2 
       lg:grid-cols-2 xl:grid-cols-2 p-5 text-white '
    >
        <div>
             <img src={Star} alt="star" style={{width:"20px", marginBottom:"20px",marginLeft:"250px",opacity:"0.3"}} />
             <img src={Rules} alt="rules"  />
             <p className='text-white text-sm mt-6'>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!
           </p>
           <img src={Star}  alt='star' style={{marginLeft:"250px", width:"20px"}} />
        </div>
        <div >
           <img src={Lady}  alt='lady' style={{width:"500px",}} />
        </div>
     </div>
  )
}

export default GuideLines