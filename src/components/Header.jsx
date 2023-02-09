import React from 'react'



export default function Header(){ 
    return (
        <div className='flex justify-between z-0 bg-transparent'>
        <h1 className="font-bold text-2xl m-2 lg:ml-40">skilled</h1>
        <button className='bg-PrimaryBlue text-white rounded-3xl px-4 p-2 m-2 z-0 lg:mr-40 hover:bg-HoverBlue'>Get Started</button>
    </div> 
    )
}