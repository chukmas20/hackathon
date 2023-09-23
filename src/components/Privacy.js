import React from 'react';
import Sata from  "../assets/sata.png";
import List from  "../assets/list.png";
import Vector from  "../assets/Vector1.png";
import Lock from  "../assets/lock.png";
import "./imstyles.css";





const Privacy = () => {
  return (
    <div className='sm:grid sm:grid-cols-2 
    lg:grid-cols-2 xl:grid-cols-2 '
    >
        <div style={{color:"white", fontWeight:"bold", padding:"10px"}}>
             <div style={{marginLeft:"90px"}}>
             <div style={{display:"flex",  }}>
                <p > Privacy Policy and <br/><span style={{color:"#D434FE",}}>Terms </span> </p> 
                <img src={Sata}  alt='start'  style={{ height:"20px",marginLeft:"20px"}} />   
            </div>
            <p className='mt-6 text-sm '>Last updated on september 12, 2023</p>
            <p className='mt-6 text-sm'>
                Below are our privacy and policy which outline a lot of goodies,
                it is our aim to always take care of participants
            </p>
             </div>
            <div  style={{marginTop:"100px", border:"2px purple solid", padding:"10px"}}>
                  <p className='text-sm'>
                    At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, 
                    and safeguard your data when you participate in our tech 
                    hackathon event. By participating in our event, you consent 
                    to the practices described in this policy.
                  </p><br />
                  <p>
                  <span style={{color:"#D434FE",fontWeight:"bold",marginTop:"150px"}}>
                       Licensing Policy  
                   </span>
                  </p>
                  <p>
                     Here are terms of our Standard License:
                  </p>
                  <p className='mt-7'>
                      <div style={{display:"flex", alignItems:"center", }}>
                        <img src={List}  alt='list'   />
                        <span className='ml-7 text-sm mt-3'> The Standard License grants you a non-exclusive right to <br />
                        navigate and register for our event</span>
                      </div>
                      <div style={{display:"flex", alignItems:"center",marginTop:"25px" }}>
                        <img src={List}  alt='list'   />
                        <span className='ml-7 text-sm mt-3'> You are licensed to use the item available at any free source
                           sites, for your project development
                         </span>
                      </div>
                      <button 
                        style={{backgroundColor:"#D434FE", marginLeft:"50px", marginTop:"20px", }}
                         className="rounded-sm ml-5 text-xs pr-10 pl-10 pt-3 pb-2 text-white font-bold">
                           Read More
                      </button>  
                  </p>
            </div>
          </div>
        <div>
             <div style={{display:"", padding:"50px"}} className="topmost">
                  <img  src={Vector} alt='vector' className='vec1' style={{width:"200px"}} />
                  <img  src={Lock}  alt='lock'  className='vec2' style={{width:"300px"}}/>
             </div>
        </div>
    </div>
  )
}

export default Privacy