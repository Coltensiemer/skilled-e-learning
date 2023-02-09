import React from 'react'
import CoursesType from './CoursesType'


export default function Courses() { 
    return ( 
        <div className='bg-gradient-to-b from-white to-[#f0f1ff] mb-10'>
            <h1 className='bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] text-2xl text-white rounded-xl px-6 py-8 m-4'>Check out our most <br /> popular courses!</h1>
            <CoursesType
            img="icon-animation.svg"
            type="animation"
            para="Learn the latest animation techniques to create stunning motion 
  design and captivate your audience."
             />

            <CoursesType 
                img="icon-design.svg"
                type="Design"
                para="Create beautiful, usable interfaces to help shape the future of 
  how the web looks."
            />
            <CoursesType 
                img="icon-photography.svg"
                type="Photography"
                para="Explore critical fundamentals like lighting, composition, and focus 
  to capture exceptional photos."
            />
                <CoursesType 
                 img="icon-Crypto.svg"
                type="Crypto"
                para="All you need to know to get started investing in crypto. Go from beginner 
  to advanced with this 54 hour course." 
            />
            <CoursesType 
                 img="icon-business.svg"
                type="Business"
                para="A step-by-step playbook to help you start, scale, and sustain your business 
  without outside investment." 
            />

        </div>
    )
}