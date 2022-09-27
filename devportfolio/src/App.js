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

function App() {
  return (
    <>
      <div className="gradient-background">
        <Cursor />
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
