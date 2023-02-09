import React from 'react'


// This loads into Courses.JSX 
export default function CoursesType({img, type, para}) { 
    return ( 
        <div className="flex flex-col m-4 my-10 round-xl  bg-white">
            <img src={`./src/assets/${img}`} alt='img' className="w-14 h-14 relative left-7 -top-6" />
            <h1 className='px-6 font-bold text-xl'>{type}</h1>
            <p className='px-6 pt-4 pb-6 text-LightGray'>{para}</p>
            <h2 className='px-6 pb-8 text-lg text-[#f74768]'>Get Started</h2> 
        </div>
    )
}