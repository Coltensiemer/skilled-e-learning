import React from 'react'
import CoursesType from './CoursesType'
import Data from '../Data'


export default function Courses() { 

// Taking all the data from the 'data.js, looping over and producing the courses with an id. 
   const courses = Data.map(e => { 
    return(
        <CoursesType 
        key={e.id}
        {...e}
        /> 
    )
   })


    return ( 
        <div className='bg-gradient-to-b from-white to-[#f0f1ff] sm:pb-10 md:ml-10 md:gap-8 md:grid md:grid-cols-2 lg:grid  lg:grid-cols-3 lg:px-40 lg:mx-0 '>
            <h1 className='bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] text-2xl text-left mx-4 text-white rounded-xl px-6 py-8 md:h-80 md:w-96 lg:h-80 lg:w-96 lg:mx-0 lg:text-3xl lg:pt-16 lg:px-8' >Check out our most <br /> popular courses!</h1>
            {courses}
        </div>
    )
}