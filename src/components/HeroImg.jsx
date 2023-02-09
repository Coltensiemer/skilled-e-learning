import React from 'react'
import MoblieImage from '/src/assets/image-hero-mobile.png';
import TabletImage from '/src/assets/image-hero-tablet.png';
import DeskImage from '/src/assets/image-hero-desktop.png'; 

export default function HeroImg() { 
    return (
        <div className='overflow-clip'>
        <img className='sm:inline md:hidden lg:hidden' src={MoblieImage} alt="hero-img" />
        <img className='hidden md:inline lg:hidden relative  max-w-none -top-40 z-50' src={TabletImage} alt="hero-img" />
        <img className='hidden lg:inline relative max-w-none -right-60 -top-64 z-50' src={DeskImage} alt="hero-img" /> 
        </div>
    )
}