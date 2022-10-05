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
        <div className="rightSide">
          <i
            class="devicon-javascript-plain hovertext"
            data-hover="JavaScript"
          ></i>
          <i class="devicon-html5-plain hovertext" data-hover="HTML5"></i>
          <i class="devicon-css3-plain hovertext" data-hover="CSS"></i>
          <i class="devicon-react-original hovertext" data-hover="React"></i>

          <i class="devicon-python-plain hovertext" data-hover="Pythob"></i>
          <i
            class="devicon-npm-original-wordmark hovertext"
            data-hover="npm"
          ></i>
          <i
            class="devicon-nodejs-plain-wordmark hovertext"
            data-hover="NodeJS"
          ></i>
          <i
            class="devicon-express-original-wordmark hovertext"
            data-hover="express"
          ></i>

          <i
            class="devicon-github-original-wordmark hovertext"
            data-hover="GitHub"
          ></i>
          <i class="devicon-git-plain hovertext" data-hover="git"></i>
          <i
            class="devicon-vscode-plain hovertext"
            data-hover="Visual Studio Code"
          ></i>
          <i class="devicon-sass-original hovertext" data-hover="SASS"></i>

          <i class="devicon-figma-plain hovertext" data-hover="Figma"></i>
          <i
            class="devicon-tailwindcss-original-wordmark hovertext"
            data-hover="Tailwind CSS"
          ></i>
          <i
            class="devicon-bootstrap-plain hovertext"
            data-hover="Bootstrap"
          ></i>
          <i class="devicon-firebase-plain hovertext" data-hover="Firebase"></i>
        </div>
      </div>
    </>
  );
}
