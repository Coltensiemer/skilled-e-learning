import React from 'react'
import MoblieImage from '/src/assets/image-hero-mobile.png'; 


export default function Hero() {
    return(     
                <div> 
        <h1> Maximize skill, minimize budget</h1>
        <p>  Our modern courses across a range of in-demand skills will give you the 
  knowledge you need to live the life you want.</p>
        <button>Get Started</button>
        <img src={MoblieImage} /> 
            </div> 

    )
  
}