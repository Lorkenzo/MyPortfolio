import { useEffect, useState, useRef } from "react";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { AboutMe } from "./Components/AboutMe";
import { Navbar } from "./Components/NavBar";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Contacts } from "./Components/Contacts";
import "./App.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
  
    const scrollToSection = (section) => {
      if (section === "Home") window.scrollTo({top:0, behavior: "smooth" });
      else if (section === "About Me") {section1Ref.current.scrollIntoView({ behavior: "smooth" });}
      else if (section === "Skills") section2Ref.current.scrollIntoView({ behavior: "smooth" });
      else if (section === "Projects") section3Ref.current.scrollIntoView({ behavior: "smooth" });
      else if (section === "Contacts") section4Ref.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [window.innerWidth]);

    return (
      <div className="flex w-full justify-end">
        <Header></Header>
        <div className="flex flex-col w-[calc(100%-64px)]">
          <Navbar isMobile={isMobile} scrollToSection={scrollToSection}></Navbar>
          <Home isMobile={isMobile}></Home>
          <AboutMe isMobile={isMobile} refprop={section1Ref}></AboutMe>
          <Skills refprop={section2Ref}></Skills>
          <Projects isMobile={isMobile} refprop={section3Ref}></Projects>
          <Contacts refprop={section4Ref}></Contacts>
        </div> 
      </div>
    );
}

export default App;
