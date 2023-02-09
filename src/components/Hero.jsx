import React from 'react'
import MoblieImage from '/src/assets/image-hero-mobile.png'; 


export default function Hero() {
    return(     
                <div> 
        <h1 className='text-4xl font-extrabold text-left mx-4 my-8'> Maximize skill, <br /> minimize budget</h1>
        <p className='text-left text-LightGray leading-6 mx-4 mb-2'>  Our modern courses across a range of in-demand skills will give you the 
  knowledge you need to live the life you want.</p>
        <button className='bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] text-white rounded-3xl m-2 mt-4 px-8 py-4'>Get Started</button>
        <img src={MoblieImage} alt="hero-img" /> 
            </div> 

    )
  
}