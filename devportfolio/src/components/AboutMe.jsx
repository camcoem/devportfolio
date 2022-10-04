import React from "react";
import { useSpring, animated } from "react-spring";

export default function AboutMe() {
  const aboutMeStyle = useSpring({
    config: { delay: 20000, duration: 5000 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <>
      <animated.h1 className="aboutMeTitel" style={aboutMeStyle}>
        about me
      </animated.h1>
      <div className="aboutMeDiv">
        <div className="leftSide">
          <h3 className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo esse
            neque totam labore quasi ipsam, modi explicabo similique vel nobis
            tempore reprehenderit quam odio veritatis numquam deserunt eum sit
            inventore, accusantium, error tempora magni dolore quis! Quos
            nesciunt quam impedit architecto blanditiis libero modi vero, autem
            recusandae tempora veritatis eaque excepturi, voluptatibus illo
            saepe. Debitis fugiat porro velit. Commodi voluptatibus fugit
            reiciendis voluptatum at. Harum maxime quibusdam inventore, ducimus
            saepe soluta ex velit eveniet eaque nostrum laborum architecto
            quaerat tempora. Asperiores voluptates impedit, unde esse deleniti a
            eaque laborum velit, odio repellendus consequuntur incidunt qui eos
            temporibus recusandae perspiciatis veritatis.
          </h3>
        </div>
        <div className="rightSide"></div>
      </div>
    </>
  );
}
