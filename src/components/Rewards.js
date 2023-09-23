import React from 'react';
import Cup from  "../assets/cup.png";
import Sata from  "../assets/sata.png";
import Star from  "../assets/star.png";
import Gift from  "../assets/rewards.png";





const Rewards = () => {
  return (
    <div className='sm:grid sm:grid-cols-2 
       lg:grid-cols-2 xl:grid-cols-2 p-10 '
       >
        <div>
            <div className='p-10'>
                <img src={Sata}  alt='start'  style={{marginLeft:"205px", marginBottom:"100px"}} />
                <img src={Cup} alt='trophy' style={{width:"400px", marginLeft:"50px"}} />
                <img src={Star}  alt='start'  style={{marginLeft:"195px",marginTop:"80px", width:"10px"}} />
            </div>   
        </div>
        <div> 
            <div style={{color:"white", fontWeight:"bold"}}>
                <div style={{marginLeft:"90px"}}>
                <p > Prices and <br/><span style={{color:"#D434FE"}}>Rewards </span>  </p>  
                 <p className='mt-5'>
                   <span style={{fontWeight:"300"}}>Highlight of the prizes or rewards for winners and <br /> for participants</span>
                 </p>
                </div>
                <img src={Star}  alt='start'  style={{ width:"10px"}} />   
           </div>
            <div>
               <img src={Gift}  alt='start'  style={{width:"400px", marginTop:"30px"}} />
               <img src={Sata}  alt='start'  style={{ width:"10px", marginTop:"10px",marginLeft:"250px"}} />   

            </div>     
       </div>

    </div>
  )
}

export default Rewards