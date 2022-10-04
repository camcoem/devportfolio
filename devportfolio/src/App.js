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

// Context
import Context from "./context/Context";

//React Spring for animations
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="app">
      <Parallax pages={4}>
        <ParallaxLayer speed={2.5}>
          <Header />
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2}>
          <AboutMe />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={2.5}>
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={4}
          style={{ backgroundColor: "#A58CAE" }}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
