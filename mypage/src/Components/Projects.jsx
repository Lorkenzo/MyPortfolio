import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { Navigation, Pagination, FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MemeGame from "../assets/project1.png"
import Quoridor from "../assets/project2.webp"
import KirunaExplorer from "../assets/project3.png"
import NPuzzle from "../assets/project4.png"
import RustScreenshare from "../assets/project5.png"
import MyPortfolio from "../assets/my-name-logo.png"
import CatAI from "../assets/project6.png"
import getLogo from './Utilities/utilities';

function Projects({isMobile, refprop }) {
    const [flippedIndex, setFlippedIndex] = useState(null);
    const [swipeDirection, setSwipeDirection] = useState(null);
    const [ariplaneAnimation, setAriplaneAnimation] = useState(false)
    const [filterOpen, setFilterOpen] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState([])

    const projects = [
        {
            id: 0,
            img: MemeGame,
            desc: "A responsive web application to play 'What do you meme?' game.",
            keywords: ["webapp"],
            languages: ["html5","css3","js","react","bootstrap","sqlite"],
            url:'https://github.com/Lorkenzo/MemeGame',
        },
        {
            id: 1,
            img: Quoridor,
            desc: "A single/multi player game developed for ARM based System-on-Chip boards.",
            keywords: ["embedded system"],
            languages: ["c"],
            url:"https://github.com/Lorkenzo/ARM-Quoridor",
        },
        {
            id: 2,
            img: KirunaExplorer,
            desc: "A web application developed for the municipality of kiruna",
            keywords: ["webapp", "team project"],
            languages: ["html5","css3","js","react","tailwind","sqlite"],
            url:"https://github.com/pettykanon/02-Kiruna-Explorer",
        },
        {
            id: 3,
            img: NPuzzle,
            desc: "A greedy algorithm to solve the N-Puzzle problem based on a layer solver",
            keywords: ["optimization algorithm"],
            languages: ["python"],
            url:"https://github.com/Lorkenzo/N-Puzzle_LayerSolver",
        },
        {
            id: 4,
            img: RustScreenshare,
            desc: "A user-friendly local multiplatform screensharing application",
            keywords: ["team project"],
            languages: ["rust"],
            url: "https://github.com/marioleonardo/rust-screenshare",
        },
        {
            id: 5,
            img: MyPortfolio,
            desc:  "The code of my Portfolio",
            keywords: ["webapp"],
            languages: ["html5","css3","js","react","tailwind"],
            url:"https://github.com/Lorkenzo/MyPortfolio",
        },
        {
            id: 6,
            img: CatAI,
            desc: "An intelligent tutoring system based on OpenAI API to create and design custom exercise for educators",
            keywords: ["webapp","AI"],
            languages: ["openai","html5","css3","js","react","tailwind"],
            url: "https://github.com/Lorkenzo/CAT-AI"
        },
    ];

    const keywords = {
        "webapp": {
            bg:"bg-sky-500",
            text:"text-sky-500",
            border: "border-sky-500",
            hover: "hover:bg-sky-300",
            selected: "bg-sky-500"
        },
        "team project": {
            bg:"bg-purple-500",
            text:"text-purple-500",
            border: "border-purple-500",
            hover: "hover:bg-purple-300",
            selected: "bg-purple-500"
        },
        "optimization algorithm": {
            bg:"bg-emerald-500",
            text:"text-emerald-500",
            border: "border-emerald-500",
            hover: "hover:bg-emerald-300",
            selected: "bg-emerald-500"
        },
        "embedded system":{
            bg:"bg-orange-500",
            text:"text-orange-500",
            border: "border-orange-500",
            hover: "hover:bg-orange-300",
            selected: "bg-orange-500"
        },
        "AI":{
            bg:"bg-pink-500",
            text:"text-pink-500",
            border: "border-pink-500",
            hover: "hover:bg-pink-300",
            selected: "bg-pink-500"
        },
        }

    const handleFilterSelection = (filter) =>{
        setSelectedFilters(prev => {
            const present = prev.find(e => e === filter)
            if (present) {
                return prev.filter(e => e!==filter)
            }
            else {
                return [...prev, filter]
            }
        })
    }

    useEffect(()=>{

    },[selectedFilters])

    const filteredProjects = projects.filter(project => {
    // Se non ci sono filtri attivi, mostra tutto
    if (selectedFilters.length === 0) return true;

    // Almeno una keyword del progetto è tra i filtri selezionati
    return project.keywords.some(keyword => selectedFilters.includes(keyword));
    });

    return (
        <div className="flex w-full h-screen items-end max-md:items-center" ref={refprop}>
            <div className="flex flex-col w-full h-[calc(100%-64px)] max-md:h-[calc(100%-128px)]">
                <div className="flex w-full h-[15%] justify-center items-center">
                    <p className={`text-[32px] font-semibold font-mono`}>My Projects</p>
                </div>
                <div className='flex w-full justify-end'>
                    <div className='flex flex-row gap-2 w-4/5'>
                        <button onClick={()=>setFilterOpen(prev=>!prev)}><i className={`bi ${filterOpen?"bi-filter-left":"bi-filter"} fs-3 align-middle mr-2`}></i></button>
                        <div className='flex flex-row gap-2 overflow-hidden transition-all duration-500'
                        style={{width:filterOpen?"100%":0}}>
                            {Object.keys(keywords).map((e,i)=>{
                            const isSelected = Boolean(selectedFilters.find(f => f === e))
                            
                            return (<div onClick={()=>handleFilterSelection(e)} key={i} className={`flex cursor-pointer items-center ${isSelected? "text-white":keywords[e].text} text-nowrap font-bold rounded-full border-2 ${keywords[e].border} ${isSelected && keywords[e].selected} px-2 py-1 max-md:text-[12px] max-md:p-1 ${!isSelected && keywords[e].hover} hover:text-white`}>
                                {e}
                            </div>)
                            }
                        )}
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-[85%] items-center">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={isMobile?2:3}
                        loop={true}
                        centeredSlides={true}
                        navigation={true}
                        
                        mousewheel={true}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Navigation, Pagination]}
                        className="flex flex-row h-[90%] w-[90%] items-center pt-4 max-md:w-[100%]"
                        nested={true}
                        //cssMode={true}
                        onSlideChange={(swiper) => {
                            const newIndex = swiper.realIndex;
                            const direction = newIndex > flippedIndex || (newIndex === 0 && flippedIndex === projects.length - 1)
                                ? 'left'
                                : 'right';
                            setSwipeDirection(direction);
                            setFlippedIndex(newIndex);
                        }}
                    >
                        {filteredProjects && filteredProjects.map((e, i) => (
                            <SwiperSlide key={i}>
                                {({ isPrev, isActive, isNext }) => {
                                    let bgClass = "";
                                    let overlay_gradient = ""
                                    if (isPrev) {
                                        bgClass = "bg-my_gradient"
                                        overlay_gradient = "bg-gradient-to-l from-transparent to-white"
                                    }
                                    else if (isActive) bgClass = "bg-my_gray drop-shadow-xl";
                                    else if (isNext) {
                                        bgClass = "bg-my_gradient_opp"
                                        overlay_gradient = "bg-gradient-to-r from-transparent to-white"
                                    }
                                    else bgClass = "bg-white";

                                    const flipClass = 
                                    flippedIndex === i && swipeDirection ==="left" ? "left-flip" 
                                    : flippedIndex === i && swipeDirection ==="right" ? "right-flip"
                                    :""

                                    return (
                                        <div className={`flex h-full rounded-xl border-black ${!isActive? "scale-75": "drop-shadow-md"} items-center justify-center text-black overflow-hidden`}>
                                            {/* Gradient Overlay */}
                                            <div className={`slide ${flipClass} flex-col h-full w-full justify-around`}>

                                                <div className={`flex ${bgClass} h-full w-full justify-center items-center front-slide`}>
                                                <div className={`absolute inset-0 ${overlay_gradient}`}></div>

                                                    <div className='flex h-[40%] justify-center rounded-xl overflow-hidden m-3'>
                                                        <img className={`w-fit object-contain transition-all delay-300`} src={e.img}></img>
                                                    </div>
                                                </div>

                                                <div className={`flex ${bgClass} h-full w-full flex-col gap-1 back-slide overflow-auto`}>
                                                <div className={`absolute inset-0 ${overlay_gradient}`}></div>

                                                    <div className='flex justify-center rounded-xl pt-3'>
                                                        <img className={`object-contain max-h-32 max-w-36 max-md:max-h-28`} src={e.img}></img>
                                                    </div>

                                                <div className='overflow-auto scrollbar-thin p-3'>
                                                    <div className='flex flex-wrap items-center w-full gap-2 py-3'>
                                                        {e.keywords.map((e,i)=><div key={i} className={`flex items-center text-white text-nowrap font-bold rounded-full ${keywords[e].bg} px-2 py-1 max-md:text-[12px] max-md:p-1`}>{e}</div>)}
                                                    </div>
                                                    
                                                    <div className='flex flex-col rounded-xl max-md:m-2'>
                                                        
                                                        <p className={`text-wrap font-mono max-md:text-[12px]`}>
                                                            {e.desc}
                                                        </p>
                                                    </div>
                                                    
                                                    <div>   
                                                        <Swiper
                                                            direction={'horizontal'}
                                                            slidesPerView={4}
                                                            freeMode={true}
                                                            mousewheel={true}
                                                            scrollbar= {true}
                                                            modules={[FreeMode, Scrollbar, Mousewheel]}
                                                            >
                                                            {projects[i].languages.map((e,i)=>
                                                                <SwiperSlide key={i}><img className="h-14 object-cover overflow-hidden max-md:h-10" src={getLogo(e)} /></SwiperSlide>
                                                            )}
                                                        </Swiper>  
                                                    </div>

                                                    <div className={`flex absolute inset-x-0 top-0 h-0 w-full z-10 transition-all duration-500 ease-in-out hover:h-3/4`}
                                                            onMouseEnter={() => setAriplaneAnimation(true)}
                                                            onMouseLeave={() => setAriplaneAnimation(false)}>
                                                        {/* Bookmark */}
                                                        <div className="flex absolute bottom-0 right-5 z-20 translate-y-10 max-md:translate-y-7">
                                                            <div className={`cursor-pointer animate-wiggle`}>
                                                            <i className="bi bi-bookmark-fill fs-1"></i>
                                                            </div>
                                                        </div>

                                                        <div className="absolute overflow-hidden border-b-4 border-black rounded-b-xl flex h-full w-full bg-[#c0bfbf] opacity-90">
                                                        <a
                                                            target="blank"
                                                            href={projects[i].url}
                                                            className="flex flex-col my-auto w-full no-underline cursor-pointer text-black place-items-center place-content-center hover:text-white"
                                                        >
                                                            <p className={`text-wrap text-[24px] font-mono font-bold w-[60%] text-center transition-all duration-500 
                                                            ${ariplaneAnimation
                                                                ? "opacity-100"
                                                                : "opacity-0"}`}>
                                                            Dive into the project!
                                                            </p>

                                                            <i
                                                            className={`bi bi-airplane-engines-fill fs-1 rotate-45 transition-all duration-500 animate-rotate-x ${
                                                                ariplaneAnimation
                                                                ? ""
                                                                : ""
                                                            }`}
                                                            ></i>
                                                        </a>
                                                        </div>
                                                    </div>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                    );
                                }}
                            </SwiperSlide>
                            
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export {Projects};
