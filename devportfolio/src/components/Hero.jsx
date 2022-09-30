import React from "react";
import { useTransition, animated } from "react-spring";

export default function Hero() {
  return (
    <div className="hero-div">
      <h1 className="hero-titel">
        Coding web<span className="titleExperience"> experiences</span>
      </h1>
      <button className="btn-primary">Let's create</button>
    </div>
  );
}
