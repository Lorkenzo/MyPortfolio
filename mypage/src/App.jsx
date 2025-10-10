import { useEffect, useState } from "react";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { AboutMe } from "./Components/AboutMe";
import { Navbar } from "./Components/NavBar";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Contacts } from "./Components/Contacts";
import { useTheme } from "./contexts/ThemeContext";
import { Route, Routes } from "react-router-dom"
import { Greatings } from "./Components/Greatings";
import "./App.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const baseUrl = "/MyPortfolio";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <Routes>
      <Route path={baseUrl} element={
        <div className={`flex w-full justify-end bg-my_bg text-my_bg_reversed ${isDarkMode ? "dark" : ""} transition-colors duration-500`}>
          <Header></Header>
          <div className="flex flex-col w-[calc(100%-64px)] max-md:w-full">
            <Navbar></Navbar>
            <Home isMobile={isMobile}></Home>
            <AboutMe isMobile={isMobile}></AboutMe>
            <Skills></Skills>
            <Projects isMobile={isMobile}></Projects>
            <Contacts></Contacts>
          </div>
        </div>
      } />
      <Route path={`/${baseUrl}/greatings`} element={
        <Greatings></Greatings>
      }/>

    </Routes>
  );
}

export default App;
