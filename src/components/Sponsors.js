import React from 'react';

import Star from  "../assets/sata.png";
import Spons from "../assets/spons.png";


const Sponsors = () => {
  return (
    <div>
         <div className='text-white ml-10 text-center p-10'> 
              <h1 className='text-sm font-bold '>Partners and Sponsors</h1> 
              <p className='text-sm mt-6'>                          
                    Getlinked Hackathon 1.0 is honored to have the following major<br />
                    companies as its partners and sponsors
            </p>
            </div>
          <div className='sm:grid sm:grid-cols-1
            lg:grid-cols-1 xl:grid-cols-1'
          >
            <div  style={{padding:"20px"}}>
               <div>
                  <img src={Star}  alt='star'  />
               </div>
                <div>
                  <img src={Spons}  alt='spons'  />
                </div>
            </div>
       </div>
    </div>
   
  )
}

export default Sponsors