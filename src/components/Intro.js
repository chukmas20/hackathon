import React from 'react';
import Idea from "../assets/idea.png";
import Introduction from "../assets/Introduction.png";
import Sata from "../assets/sata.png";
import Arrow from "../assets/arrow.png";





const Intro = () => {
  return (
    <div className='sm:grid sm:grid-cols-2 
       lg:grid-cols-2 xl:grid-cols-2 p-12'
    >
      <div >
          
          <div className='flex items-center' id='overview'>
             <img  src={Sata}  alt='sata'  />
             <img   src={Idea} alt='bulb' style={{width:"300px", marginLeft:"45px"}} />
          </div>
          <div>
          <img  src={Arrow}  alt='arrow'  style={{marginLeft:"300px"}}  />
          </div>
      </div>
      <div className='mt-5'>
        <div className='flex justify-between items-center'>
            <div>
                <img   src={Introduction} alt='bulb' style={{width:"300px"}} className='mt-8'  />
            </div>
            <div>
                 <img  src={Sata}  alt='sata' style={{width:"30px"}} />
            </div>
        </div>
        <p className='text-white mt-8 text-sm'> Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to
            shape the future. Whether you are a coding genius, a design maverick,or a concept wizard,you
            will have a chance to transform your ideas into reality. Solving real-world problems, pushing the
            boundaries of technology, and building solutions that can change the world, that's what we are all about!
        </p>
      </div>
    </div>
  )
}

export default Intro