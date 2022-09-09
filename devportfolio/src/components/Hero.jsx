import React from 'react'
import Header from "./Header";

export default function Hero() {
  return (
    <div className="custom-shape-divider-top-1662718655">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      <Header />
       <h1>Coding web<span className="titleExperience"> experiences</span></h1>
       {/* <p>I'm Camila, Front-End Developer and coffee lover </p> */}
       <button className='btn-primary'>Let's create</button>
    </div>
  )
}
