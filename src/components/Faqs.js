import React, { useState } from 'react';
import Faq from "../assets/faqs.png";
import Sata from  "../assets/sata.png";
import Casual from  "../assets/casual.png";
import Star from  "../assets/star1.png";


import "./imstyles.css";

const data = [
    {
        question:"Can I work on a project I started before the hackathon?",
        answer: "Yes"
    },
    {
        question:"What happens if I need help during the hackathon?",
        answer: "You can get help"
    },
    {
        question:"What happens if I don't have an idea for a project?",
        answer: "You need to have a project idea"
    },
    {
        question:"Can I join a team or do I have to come with one?",
        answer: "You can join a team"
    },
    {
        question:"What happens after the hackathon ends",
        answer: "The Winners will be rewarded"
    },
    {
        question:"Can I work on a project I started before the hackathon?",
        answer: "Yes you can"
    },
];

const Faqs = () => {
    const [selected, setSelected] = useState(null);
    const toggle =(i)=>{
        if(selected === i){
           return setSelected(null)
        }
        setSelected(i);
    }
  return (
    <div className='sm:grid sm:grid-cols-2 
    lg:grid-cols-2 xl:grid-cols-2'
    >
     <div className='p-20' id='faqs'>
         <img src={Sata} alt='stars' className='pb-10'   />
           <img src={Faq} alt='faqs'    />
           <p className='text-white mt-8'>
             We got answers to the questions that you might
             want to ask about getlinked Hackathon 1.0
           </p>
           <p>
               {data.map((item, i) =>(
                  <div className='item mt-10' >
                      <div key={item.id} className='title' onClick={()=> toggle(i)}>
                          <h2>{item.question}</h2>
                          <span selected>{selected === i ? "-" :"+"}</span>
                      </div>
                      <div className={selected === i ? "content show" :"content"}>
                          <p>{item.answer}</p>
                      </div>
                      <div style={{border:"1px purple solid",marginTop:"20px"}}></div>
                  </div>
               ))}
           </p>
        </div>
        <div >
            <img src={Sata}  alt='star'  style={{marginLeft:"350px"}}/>
            <img src={Sata}  alt='star' style={{marginLeft:"150px", marginBottom:"140px"}} />
            <img src={Casual}  alt='casual' style={{width:"800px", padding:"50px"}}  />
            <img src={Star}  alt='star'  />

        </div>

   </div>
  )
}

export default Faqs