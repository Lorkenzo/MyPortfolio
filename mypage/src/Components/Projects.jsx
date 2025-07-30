import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { Navigation, Pagination, FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.webp"
import Project3 from "../assets/project3.png"
import Project4 from "../assets/project4.png"
import Project5 from "../assets/project5.png"
import getLogo from './Utilities/utilities';

function Projects({isMobile, refprop }) {
    const [flippedIndex, setFlippedIndex] = useState(null);
    const [swipeDirection, setSwipeDirection] = useState(null);
    const [ariplaneAnimation, setAriplaneAnimation] = useState(false)

    const projects = [1, 2, 3, 4, 5];
    const projects_images = {
        1: Project1,
        2: Project2,
        3: Project3,
        4: Project4,
        5: Project5,
    }

    const projects_desc = {
        1: "A responsive web application to play 'What do you meme?' game.",
        2: "A single/multi player game developed for ARM based System-on-Chip boards.",
        3: "A web application developed for the municipality of kiruna - team project",
        4: "A greedy algorithm to solve the N-Puzzle problem based on a layer solver",
        5: "A user-friendly local multiplatform screensharing application - team project",
    }

    const projects_url = {
        1: 'https://github.com/Lorkenzo/MemeGame',
        2: "https://github.com/Lorkenzo/ARM-Quoridor",
        3: "https://github.com/pettykanon/02-Kiruna-Explorer",
        4: "https://github.com/Lorkenzo/N-Puzzle_LayerSolver",
        5: "https://github.com/marioleonardo/rust-screenshare",
    }

    const Features1 = ["html5","css3","js","react","bootstrap","sqlite"]
    const Features2 = ["c"]
    const Features3 = ["html5","css3","js","react","tailwind","sqlite"]
    const Features4 =  ["python"]
    const Features5 = ["rust"]

    const projects_feature_logos = {
        1: Features1,
        2: Features2,
        3: Features3,
        4: Features4,
        5: Features5,
    }

    return (
        <div className="flex w-full h-screen items-end max-md:items-center" ref={refprop}>
            <div className="flex flex-col w-full h-[calc(100%-64px)] max-md:h-[calc(100%-128px)]">
                <div className="flex w-full h-[15%] justify-center items-center">
                    <p className={`text-[32px] font-semibold font-mono`}>My Projects</p>
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
                        className="flex flex-row h-[90%] w-[90%] items-center pt-4"
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
                        {projects.map((e, i) => (
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
                                        <>
                                        <div className={`flex h-full rounded-xl ${!isActive? "scale-75": "drop-shadow-lg"} items-center justify-center text-black overflow-hidden`}>
                                            {/* Gradient Overlay */}
                                            <div className={`slide ${flipClass} flex-col h-full w-full justify-around`}>

                                                <div className={`flex ${bgClass} h-full w-full justify-center items-center front-slide`}>
                                                <div className={`absolute inset-0 ${overlay_gradient}`}></div>

                                                    <div className='flex h-[40%] justify-center rounded-xl overflow-hidden m-3'>
                                                        <img className={`w-fit object-contain transition-all delay-300`} src={projects_images[i+1]}></img>
                                                    </div>
                                                </div>

                                                <div className={`flex ${bgClass} h-full w-full flex-col back-slide`}>
                                                <div className={`absolute inset-0 ${overlay_gradient}`}></div>

                                                    <div className='flex h-[30%] justify-center rounded-xl overflow-hidden m-3'>
                                                        <img className={`object-contain transition-all delay-300`} src={projects_images[i+1]}></img>
                                                    </div>
                                                    
                                                    <div className='flex flex-col h-[30%] mx-4 mb-3 rounded-xl max-md:m-2'>
                                                        <p className='font-mono font-semibold'>Description</p>
                                                        <p className={`text-wrap font-mono text-justify max-md:text-[12px]`}>
                                                            {projects_desc[i+1]}
                                                        </p>
                                                    </div>
                                                    
                                                    <div className='flex flex-col h-[30%] mx-4 mb-5'>
                                                        <p className='font-mono font-semibold'>Features</p>
                                                        <div className='mt-2 pb-2'>
                                                            <Swiper
                                                                direction={'horizontal'}
                                                                slidesPerView={4}
                                                                freeMode={true}
                                                                mousewheel={true}
                                                                scrollbar= {true}
                                                                modules={[FreeMode, Scrollbar, Mousewheel]}
                                                                //className='overflow-y-visible scrollbar-track-black scrollbar-thumb-white'
                                                                >
                                                                {projects_feature_logos[i+1].map((e,i)=>
                                                                    <SwiperSlide key={i}><img className="h-14 object-cover overflow-hidden max-md:h-10" src={getLogo(e)} /></SwiperSlide>
                                                                )}
                                                            </Swiper>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className={`absolute inset-x-0 bottom-0 h-[100%] z-[1000] translate-y-[90%] transition-all ease-in-out duration-500 hover:translate-y-0`}>
                                                        
                                                        <div className="flex absolute inset-x-0 top-0 h-[10%] bg-my_gradient_reversed rounded-t-xl drop-shadow-xl justify-center">
                                                            <button><i className='bi bi-arrow-bar-up fs-2'></i></button>
                                                        </div>
                                                        
                                                        <div className='flex absolute inset-x-0 bottom-0 h-[90%] bg-[#c0bfbf] opacity-90' 
                                                            onMouseEnter={()=>setAriplaneAnimation(true)}
                                                            onMouseLeave={()=>setAriplaneAnimation(false)}>
                                                            <a target='blank' href={`${projects_url[i+1]}`} className={`flex flex-col my-auto w-full no-underline cursor-pointer text-black place-items-center place-content-center hover:text-white`}
                                                            >
                                                                <p className='text-wrap text-[24px] font-mono font-bold w-[60%] text-center transition-all duration-500'>Dive into the project!</p> 

                                                                <i className={`bi bi-airplane-engines-fill fs-1 rotate-45 -translate-x-[${ariplaneAnimation?"0":"100"}%] translate-y-[${ariplaneAnimation?"0":"20"}%] transition-all duration-500`}></i>
                                                            </a>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        </>
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
