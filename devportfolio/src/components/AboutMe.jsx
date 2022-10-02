import React from "react";
import { useSpring, animated } from "react-spring";

export default function AboutMe() {
  const aboutMeStyle = useSpring({
    config: { delay: 20000, duration: 3000 },
    from: { opacity: 0, marginRight: "-500" },
    to: {
      opacity: 1,
      marginRight: "300",
    },
  });

  return (
    <>
      <animated.h1 className="aboutMeTitel" style={aboutMeStyle}>
        about me
      </animated.h1>
      <div className="aboutMeDiv">
        <div className="leftSide">
          <h3 className="title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quod, sequi obcaecati ab, praesentium facilis illo minima nihil
            veritatis voluptate temporibus exercitationem corporis distinctio
            laboriosam earum voluptas animi pariatur vero quam voluptatem
            delectus est quas vel mollitia? Molestiae error accusantium sint
            mollitia quisquam debitis minus deserunt, laboriosam sit! Ullam
            perspiciatis suscipit optio sapiente, incidunt ad a non, reiciendis
            autem maxime dolorem similique eius atque ratione et consectetur,
            officia error eaque rerum in ut. Dolorem aspernatur consequatur, hic
            quis nam, maxime amet harum, esse facere blanditiis recusandae odit
            doloribus voluptatem beatae quaerat sit corporis provident iure
            totam minus fuga laborum neque?
          </h3>
        </div>
        <div className="rightSide"></div>
      </div>
    </>
  );
}
