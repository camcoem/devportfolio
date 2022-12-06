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
      <animated.h1 className="contactMe" style={aboutMeStyle}>
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
            className="devicon-javascript-plain"
            id="aboutMeIcon"
            data-hover="JavaScript"
          ></i>
          <i
            className="devicon-html5-plain"
            id="aboutMeIcon"
            data-hover="HTML5"
          ></i>
          <i
            className="devicon-css3-plain"
            id="aboutMeIcon"
            data-hover="CSS"
          ></i>
          <i
            className="devicon-react-original"
            id="aboutMeIcon"
            data-hover="React"
          ></i>

          <i
            className="devicon-python-plain"
            id="aboutMeIcon"
            data-hover="Pythob"
          ></i>
          <i
            className="devicon-npm-original-wordmark"
            id="aboutMeIcon"
            data-hover="npm"
          ></i>
          <i
            className="devicon-nodejs-plain-wordmark"
            id="aboutMeIcon"
            data-hover="NodeJS"
          ></i>
          <i
            className="devicon-express-original-wordmark"
            id="aboutMeIcon"
            data-hover="express"
          ></i>

          <i
            className="devicon-github-original-wordmark"
            id="aboutMeIcon"
            data-hover="GitHub"
          ></i>
          <i
            className="devicon-git-plain"
            id="aboutMeIcon"
            data-hover="git"
          ></i>
          <i
            className="devicon-vscode-plain"
            id="aboutMeIcon"
            data-hover="Visual Studio Code"
          ></i>
          <i
            className="devicon-sass-original"
            id="aboutMeIcon"
            data-hover="SASS"
          ></i>

          <i
            className="devicon-figma-plain"
            id="aboutMeIcon"
            data-hover="Figma"
          ></i>
          <i
            className="devicon-tailwindcss-original-wordmark"
            id="aboutMeIcon"
            data-hover="Tailwind CSS"
          ></i>
          <i
            className="devicon-bootstrap-plain"
            id="aboutMeIcon"
            data-hover="Bootstrap"
          ></i>
          <i
            className="devicon-firebase-plain"
            id="aboutMeIcon"
            data-hover="Firebase"
          ></i>
        </div>
      </div>
    </>
  );
}
