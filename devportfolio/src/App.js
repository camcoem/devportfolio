//Stylesheet
import "./App.css";

//Fonts
import "./fonts/YouDense-Glass-BlowBold.ttf";
import "./fonts/YouDense-Glass-BlowRegular.ttf";

//Components
import Hero from "./components/Hero";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";

// Context
import Context from "./context/Context";

//React Spring for animations
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { config } from "react-spring";

//React
import { useRef } from "react";

function App() {
  const ref = useRef();

  return (
    <div className="app">
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          speed={2.5}
          style={config.wobbly}
          factor={0.5}
          onClick={() => ref.current.scrollTo(4)}
        >
          <Header />
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={config.wobbly}>
          <AboutMe />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={2.5} style={config.wobbly}>
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={4}>
          <Contact />
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
