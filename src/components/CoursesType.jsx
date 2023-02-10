import React from 'react'



// This loads into Courses.JSX 
export default function CoursesType({img, type, para}) { 
    return ( 
        <div className="flex flex-col m-4 my-10 round-xl  bg-white last:CustomShadow lg:m-0 lg:h-80 lg:w-96 lg:justify-self-center">
            <img src={`./src/assets/${img}`} alt='img' className="w-14 h-14 relative left-7 -top-6" />
            <h1 className='px-8 pt-6 font-bold text-xl lg:text-2xl'>{type}</h1>
            <p className='px-8 pt-6 pb-6 text-LightGray lg:text-lg '>{para}</p>
            <h2 className='px-8 pb-8 text-lg text-[#f74768] lg-text-lg'>Get Started</h2> 
        </div>
    )
}