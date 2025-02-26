import { BrowserRouter } from "react-router-dom";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import StarsCanvas from "./Components/Stars";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Project from "./Components/Project";
import CanvasCursor from "./Components/CanvasCursor";
import Downloadcv from "./Components/Downloadcv";

const App = () => {
  return (
    <BrowserRouter>
      <div   className="relative z-0 bg-black text-white min-h-screen ">
        {/* Navbar is rendered on top */}
        <Navbar />
<Downloadcv/>
        {/* Home and other sections */}
        <Home />
        <Skills />
        <Education />
        <Experience />
        <Project />
        <Contact />

        {/* Stars background canvas */}

        <StarsCanvas />
      </div>
      <CanvasCursor />
    </BrowserRouter>
  );
};

export default App;
