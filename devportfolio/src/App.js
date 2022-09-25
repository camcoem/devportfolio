//Stylesheet
import "./App.css";

//Fonts
import "./fonts/YouDense-Glass-BlowBold.ttf";
import "./fonts/YouDense-Glass-BlowRegular.ttf";

//Components
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="gradient-background">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
