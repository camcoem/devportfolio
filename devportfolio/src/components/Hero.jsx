import React from "react";
import { useSpring, animated } from "react-spring";
// import { useState, useEffect, setTimeout, onRest } from "react";

export default function Hero() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 10000, duration: 3000 },
    loop: { reverse: true },
  });

  return (
    <div className="hero-div">
      <h1>
        Coding web
        <animated.span className="titleExperience" style={props}>
          {" "}
          experiences
        </animated.span>
      </h1>
      <button className="btn-primary">Let's create</button>
    </div>
  );
}
