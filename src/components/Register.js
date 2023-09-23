import React, { useEffect, useState } from 'react';
import Graph from "../assets/graphic.png";
import axios from "axios";
import SuccessPopup from './SuccessPopup';
import "./imstyles.css";






const Register = () => {
  const [showPopup, setShowPopup] = useState(false);



  const [categories, setCategories] = useState([]);
  // const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    email:"",
    phone_number:"",
    team_name: "",
    group_size: "",
    project_topic:"",
    category: 0,
    privacy_poclicy_accepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox differently
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };



  
useEffect(() => {
  // Make a GET request to the external API
  axios.get('https://backend.getlinked.ai/hackathon/categories-list')
    .then((response) => {
      // Assuming the API response is an array of items
      setCategories(response.data);
      console.log(response.data)
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);

// const handleChangeCat = (e) => {
//   setSelectedOption(e.target.value);
// };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Make a POST request to the external API
    const response = await axios.post('https://backend.getlinked.ai/hackathon/registration', formData);
    console.log('Response from API:', response.data);
     // Show the success popup on successful form submission
     setShowPopup(true);
    // Reset the form after successful submission
    setFormData({
      email:"",
      phone_number:"",
      team_name: "",
      group_size: "",
      project_topic:"",
      category: 0,
      privacy_poclicy_accepted: false
    });
  } catch (error) {
    console.error('Error:', error);
  }
};



  return (
    <div className='sm:grid sm:grid-cols-2 
    lg:grid-cols-2 xl:grid-cols-2 mt-20 p-10'
    >
        <div>
            <div>
                <img   src={Graph} alt='graphic'   />
            </div>
        </div>
        <div className='bg-gray-700 p-10'>
             <p className='text-purple-800 font-semibold text-xl '> Register</p>
             <p className='text-white text-sm mt-10 '>Be part of the movement!</p>
             <p className='text-white mt-5'>CREATE YOUR ACCOUNT</p>
       
    <form className="w-full max-w-lg pic3" onSubmit={handleSubmit}>
  <div className="flex flex-wrap -mx-3 mt-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
        Teams Name
      </label>
      <input className="appearance-none 
      block w-full bg-gray-200 text-gray-700 border 
       rounded py-3 px-4 mb-3 leading-tight focus:outline-none
        focus:bg-white"  type="text"
        id="team_name"
        name="team_name"
        value={formData.name}
        onChange={handleChange}
        required
         placeholder="Enter the name of your group"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
         Phone
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 leading-tight
        focus:outline-none focus:bg-white
       focus:border-gray-500" 
        min="0"
        type="text" placeholder="Enter your phone number"
        id="phone_number"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        required
        />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
          Email
      </label>
      <input className="appearance-none block w-full
       bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3
        leading-tight focus:outline-none focus:bg-white" 
         type="email"
          placeholder="Enter your email address"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
         />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
         Project Topic
      </label>
      <input className="appearance-none block w-full bg-gray-200
       text-gray-700 border border-gray-200 rounded 
       py-3 px-4 leading-tight focus:outline-none focus:bg-white
        focus:border-gray-500" 
         type="text" placeholder="Enter your group project topic"
         id="project_topic"
         name="project_topic"
         value={formData.project_topic}
         onChange={handleChange}
         required
         />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
        Category
      </label>
      <div className="relative">
        <select className="block appearance-none w-full
         bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4
          pr-8 rounded leading-tight focus:outline-none focus:bg-white
           focus:border-gray-500"
           id="category"
           name="category"
           value={formData.category}
           onChange={handleChange}
            >
          <option value="">Select Your Category</option>
          {
            categories.map((category)=>(
              <option key={category.id} value={category.id}>
                 {category.name}
              </option>
            ))
          }

        </select>
        
      </div>
    </div>
    <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-white text-xs
        font-bold mb-2" for="grid-state"
        >
        Group Size
      </label>
      <div className="relative">
        <select className="block appearance-none w-full
         bg-gray-200 border border-gray-200 text-gray-700 py-3
          px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white
           focus:border-gray-500"
           id="group_size"
            name="group_size"
            value={formData.group_size}
            onChange={handleChange}
           >
          <option>Select</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div >
    <p className='text-purple-700 text-sm'>Please Review your registration details before submitting</p>
  </div>
  <div className='flex'>
   <input type="checkbox" class="rounded text-pink-500"
       name="privacy_poclicy_accepted"
       checked={formData.privacy_poclicy_accepted}
       onChange={handleChange}
       required
  />
    <p className='text-white text-sm ml-3'>I agree with the event terms and conditions  and privacy policy</p>
  </div>
   <div className="w-full mt-4 px-3">
      <button className="appearance-none block w-full bg-pink-500  text-white border  rounded py-3 px-4 leading-tight focus:outline-none  " id="grid-last-name" type="submit" placeholder="Doe">
            Register Now
      </button>
    </div>
    {console.log(formData)}
</form>
  <div style={{position:"fixed", top:"0",left:"0", 
          display:"flex",
           justifyContent: "center",
            width:"70%",
            height:"70%",
           zIndex: 9999,
           /* Semi-transparent background overlay */

            alignItems:"center"}}
            >
     {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
  </div>

  </div>
 </div>
  )
}

export default Register