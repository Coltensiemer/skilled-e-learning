import React from 'react'


// This loads into Courses.JSX 
export default function CoursesType({img, type, para}) { 
    return ( 
        <>
            <img src={`./src/assets/${img}`} />
            <h1>{type}</h1>
            <p>{para}</p>
            <h2>Get Started</h2> 
        </>
    )
}