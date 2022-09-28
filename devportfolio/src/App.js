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
import ContextProvider from "./components/Hero";

//React Spring for parallax
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="app">
      <Parallax pages={4}>
        <ParallaxLayer>
          <Header />
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <AboutMe />
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <Projects />
        </ParallaxLayer>

        <ParallaxLayer offset={3}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
