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
              I am constantly seeking to improve my skills and stay up-to-date
              with the latest developments in the field. I am a quick learner
              and am always eager to take on new challenges. For example I am
              currently learning: TypeScript, Redux and Nextjs.
            </p>
            <p className="aboutMeP">
              I am dedicated to producing high-quality, user-friendly websites
              and web applications that are both visually pleasing and easy to
              navigate.
            </p>
            <p className="aboutMeP">
              I am excited to continue my journey in the field of web
              development and am eager to take on new projects and
              collaborations. I look forward to the opportunity to work with a
              team of talented developers to create innovative and impactful
              projects.
            </p>
            <div className="footer">
              <a href="https://github.com/camcoem" target="_blank">
                <i className="devicon-github-original" id="iconFooter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/camila-coello-merino/"
                target="_blank"
              >
                <i className="devicon-linkedin-plain" id="iconFooter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="aboutMeStack">
          <h3 className="whatIdoTitel">
            What I can do:
            <span className="flatWhite"> (besides a mean flat white)</span>
          </h3>
          <div className="rightSide">
            <i
              className="devicon-javascript-plain"
              id="aboutMeIcon"
              title="JavaScript"
            ></i>
            <i
              className="devicon-html5-plain"
              id="aboutMeIcon"
              title="HTML5"
            ></i>
            <i className="devicon-css3-plain" id="aboutMeIcon" title="CSS"></i>
            <i
              className="devicon-react-original"
              id="aboutMeIcon"
              title="React"
            ></i>

            <i
              className="devicon-python-plain"
              id="aboutMeIcon"
              title="Python"
            ></i>
            <i
              className="devicon-npm-original-wordmark"
              id="aboutMeIcon"
              title="npm"
            ></i>
            <i
              className="devicon-nodejs-plain"
              id="aboutMeIcon"
              title="NodeJS"
            ></i>
            <i
              className="devicon-express-original"
              id="aboutMeIcon"
              title="express"
            ></i>

            <i
              className="devicon-github-original-wordmark"
              id="aboutMeIcon"
              title="GitHub"
            ></i>
            <i className="devicon-git-plain" id="aboutMeIcon" title="git"></i>
            <i
              className="devicon-vscode-plain"
              id="aboutMeIcon"
              title="Visual Studio Code"
            ></i>
            <i
              className="devicon-sass-original"
              id="aboutMeIcon"
              title="SASS"
            ></i>

            <i
              className="devicon-figma-plain"
              id="aboutMeIcon"
              title="Figma"
            ></i>
            <i
              className="devicon-tailwindcss-plain"
              id="aboutMeIcon"
              title="Tailwind CSS"
            ></i>
            <i
              className="devicon-bootstrap-plain"
              id="aboutMeIcon"
              title="Bootstrap"
            ></i>
            <i
              className="devicon-firebase-plain"
              id="aboutMeIcon"
              title="Firebase"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

// Junior Frontend Developer with a background in molecular biology
// Highly passionate and motivated individual
// Experience with HTML, CSS, JavaScript, and React
// Strong analytical and problem-solving skills developed through previous role as molecular biologist
// Dedicated to producing high-quality, user-friendly websites and web applications
// Quick learner and eager to take on new challenges
// Excited to continue journey in web development and work with a team of talented developers to create innovative and impactful projects.
