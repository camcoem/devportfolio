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
          <div className="baristaDevImg" alt="picture of thebarista dev"></div>
          <div className="aboutMeText">
            <h3 className="whoIsTitel">Who is the barista.dev?</h3>
            <p className="aboutMeP">
              My name is Camila, I am a highly passionate and motivated
              individual with a background in molecular biology and ofc in
              coffee making. I have always been fascinated by the intersection
              of technology and science, and have recently made a career change
              to pursue my passion for coding and web development.
            </p>
            <p className="aboutMeP">
              Throughout my journey, I have gained experience in a variety of
              frontend technologies including HTML, CSS, JavaScript, and React.
              I am constantly seeking to improve my skills and stay up-to-date
              with the latest developments in the field. I am a quick learner
              and am always eager to take on new challenges. For example I am
              currently learning: TypeScript, Redux and Nextjs.
            </p>
            <p className="aboutMeP">
              In my previous role as a molecular biologist, I developed strong
              analytical and problem-solving skills, which I now apply to my
              work as a frontend developer. I am dedicated to producing
              high-quality, user-friendly websites and web applications that are
              both visually pleasing and easy to navigate.
            </p>
            <p className="aboutMeP">
              I am excited to continue my journey in the field of web
              development and am eager to take on new projects and
              collaborations. I look forward to the opportunity to work with a
              team of talented developers to create innovative and impactful
              projects.
            </p>
          </div>
        </div>
        <div className="aboutMeStack">
          <h3 className="whatIdoTitel">What I can do:</h3>
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
              data-hover="Python"
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
      </div>
    </>
  );
}
