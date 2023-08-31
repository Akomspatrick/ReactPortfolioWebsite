import About from "./components/About";
import Contact from "./components/Contact";
import Growingskills from "./components/Growingskills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      {/*Special Thanks to Code Commerce for the valuable resources */}
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills> 
      <Growingskills></Growingskills>
      <Work></Work>
      <Contact></Contact>
      
    </div>
  );
}

export default App;
