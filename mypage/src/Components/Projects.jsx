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
        <div className="flex flex-col w-screen h-screen place-content-center" ref={refprop}>
            <div className="w-full h-[15%] justify-items-center content-end text-center">
                <p className={`text-[32px] font-semibold font-mono`}>My Projects</p>
            </div>

            <div className="flex w-full h-[80%] items-center">
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
                    className="flex flex-row h-[85%] w-[80%] items-center pt-4"
                    nested={true}
                    //cssMode={true}
                    onSlideChange={(swiper) => {
                        setFlippedIndex(swiper.realIndex); // aggiorni quando cambia slide
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

                                const flipClass = flippedIndex === i ? 'flip-animation' : '';
                                return (
                                    <>
                                    <div className={`block h-full rounded-xl ${bgClass} items-center justify-center text-black overflow-hidden pb-4`}>
                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 ${overlay_gradient}`}></div>
                                        <div className='flex flex-col h-full w-full justify-around'>
                                            <div className='flex h-[40%] justify-center rounded-xl overflow-hidden m-3'>
                                                <img className={`w-fit object-cover transition-all delay-300`} src={projects_images[i+1]}></img>
                                            </div>

                                            { flippedIndex === i &&
                                            <div className='flex flex-col h-[30%] mx-4 mb-3 rounded-xl max-md:m-2'>
                                                <p className='font-mono font-semibold'>Description</p>
                                                <p className={`text-wrap font-mono text-justify max-md:text-[12px]`}>
                                                    {projects_desc[i+1]}
                                                </p>
                                            </div>}
                                            { flippedIndex === i &&
                                            <div className='flex flex-col h-[30%] mx-4 mb-4'>
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
                                                            <SwiperSlide><img key={i} className="h-14 object-cover overflow-hidden max-md:h-10" src={getLogo(e)} /></SwiperSlide>
                                                        )}
                                                    </Swiper>
                                                </div>
                                            </div>}
                                            {flippedIndex === i &&
                                            <div className={`absolute inset-x-0 bottom-0 h-[100%] z-[1000] translate-y-[90%] transition-all ease-in-out duration-300 hover:translate-y-0`}>
                                                
                                                <div className="flex absolute inset-x-0 top-0 h-[10%] bg-my_gradient_reversed rounded-t-xl drop-shadow-xl justify-center">
                                                    <button><i className='bi bi-arrow-bar-up fs-2'></i></button>
                                                </div>
                                                
                                                <div className='flex absolute inset-x-0 bottom-0 h-[90%] bg-[#c0bfbf] opacity-90'>
                                                    <a target='blank' href='https://github.com/' className={`flex flex-col my-auto w-full no-underline cursor-pointer text-black place-items-center place-content-center hover:text-white`}
                                                     onMouseEnter={()=>setAriplaneAnimation(true)}
                                                     onMouseLeave={()=>setAriplaneAnimation(false)}>
                                                        <p className='text-wrap text-[24px] font-mono font-bold w-[60%] text-center'>Dive into the project!</p> 

                                                        <i className="bi bi-airplane-engines-fill fs-1 rotate-45"></i>

                                                        
                                                    </a>
                                                </div>
                                                
                                            </div>}

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
    );
}

export {Projects};
