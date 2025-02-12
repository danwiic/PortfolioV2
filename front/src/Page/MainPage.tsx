import Navbar from "../Components/Navbar";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Service";
import Skills from "./Skills";

export default function MainPage() {
  return (
    <div>
      <Navbar>
        <Home />
        <Services />
        <Skills />
        <Contact />
      </Navbar>
    </div>
  );
}
