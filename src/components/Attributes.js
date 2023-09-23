import React from 'react';
import Patners from "../assets/patners.png";
import Elipse from "../assets/elipse.png";
import Star from "../assets/sata.png";
import Sata from "../assets/star.png";
import Jk from "../assets/jk.png";

import "./imstyles.css";


const Attributes = () => {
  return (
    <div className='sm:grid sm:grid-cols-2 
      lg:grid-cols-2 xl:grid-cols-2'
      >
        <div className='p-20'>
            <img src={Star} alt='star' style={{marginBottom:"40px", marginLeft:"40px"}} />
            <div className='parent'>
                <img src={Elipse} alt='elipse'  className='pic1' style={{width:"130px"}}/>
                <img src={Patners}  alt='patners' className='pic2' />
                <img src={Sata} alt='star' style={{marginTop:"100px",marginLeft:"250px",opacity:"0.3"}} />
            </div>
            <img src={Sata} alt='star' style={{marginTop:"150px", marginLeft:"400px"}} />
        </div>
        <div className='pt-20 pr-10 pl-10 pb-5'>
           <img src={Jk} alt="jk"   />
           <p className='text-white'>
           <span style={{color:"#FF26B9"}}>Innovation and Creativity</span>: Evaluate the uniqueness and creativity of the
            solution. Consider whether it addresses a real-world problem in a novel 
            way or introduces innovative features.
           </p>
           <br />
           <p  className='text-white'>
           <span style={{color:"#FF26B9"}}>Functionality</span>:
           Assess how well the solution works. Does it perform its 
            intended functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
           </p>
           <br />

           <p className='text-white'>
           <span style={{color:"#FF26B9"}}>Impact and Relevance:</span> Determine the potential impact of the solution 
            in the real world. Does it address a significant problem, and is it relevant 
            to the target audience? Judges would assess the potential social, 
            economic, or environmental benefits.
           </p>
           <br />

           <p className='text-white'>
           <span style={{color:"#FF26B9"}}>Technical Complexity</span>: DEvaluate the technical sophistication of the solution. 
                Judges would consider the complexity of the code, the use of advanced 
                technologies or algorithms, and the scalability of the solution.
           </p>
           <br />
           <p className='text-white'>
           <span style={{color:"#FF26B9"}}>Adherence to Hackathon Rules</span>: Judges will Ensure that the team adhered 
                to the rules and guidelines of the hackathon, including deadlines, use of 
                specific technologies or APIs, and any other competition-specific requirements.
           </p>
           <br />
           <button 
              style={{backgroundColor:"#D434FE"}}
              className="rounded-sm mt-4 text-xs  font-bold p-2 text-white"
             >
                Read More
            </button>
      </div>
    </div>
  )
}

export default Attributes