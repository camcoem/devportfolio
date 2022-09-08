import React from 'react'
import Header from "./Header";

export default function Hero() {
  return (
    <>
    <Header />

       <h1>Coding web<span className="titleExperience"> experiences</span></h1>
       {/* <p>I'm Camila, Front-End Developer and coffee lover </p> */}
       <button className='btn-primary'>Let's create</button>
    </>
  )
}
