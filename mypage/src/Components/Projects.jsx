import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import getLogo from './Utilities/utilities';
import { projects,keywords } from './Utilities/utilities';

function Projects({isMobile }) {
    const [flippedIndex, setFlippedIndex] = useState(null);
    const [swipeDirection, setSwipeDirection] = useState(null);
    const [ariplaneAnimation, setAriplaneAnimation] = useState(false)
    const [filterOpen, setFilterOpen] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState([])

    const handleFilterSelection = (filter) =>{
        setFlippedIndex(0)
        setSwipeDirection("right")
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

    const filteredProjects = projects.filter(project => {
    
    if (selectedFilters.length === 0) return true;

    return project.keywords.some(keyword => selectedFilters.includes(keyword));
    });

    return (
        <div className="flex w-full items-end max-md:items-center py-20" id='Projects'>
            <div className="flex flex-col w-full">
                <div className="flex w-full justify-center items-center">
                    <p className={`text-[32px] font-semibold font-mono`}>My Projects</p>
                </div>
                <div className='flex w-full justify-end'>
                    <div className="flex flex-row gap-2 w-4/5 max-md:w-full max-md:px-4">
                        <button className="flex rounded-full" onClick={() => setFilterOpen(prev => !prev)}>
                            <i className={`bi ${filterOpen ? "bi-filter-left" : "bi-filter"} fs-3 align-middle mr-2`}></i>
                        </button>

                        {/* Filtri selezionati - sempre visibili */}
                        
                        <div className="flex flex-wrap items-center gap-2 max-md:flex-wrap">
                            {Object.keys(keywords)
                            .filter(e => selectedFilters.includes(e))
                            .map((e, i) => (
                                <div
                                onClick={() => handleFilterSelection(e)}
                                key={`selected-${i}`}
                                className={`flex h-8 cursor-pointer items-center text-white text-nowrap font-bold rounded-full border-2 ${keywords[e].border} ${keywords[e].selected} px-2 max-md:text-[12px] max-md:p-1 hover:text-white`}>
                                    {e} <i className='bi bi-x fs-4 align-middle'></i>
                                </div>
                            ))}
                    
                            {Object.keys(keywords)
                            .filter(e => !selectedFilters.includes(e))
                            .map((e, i, array) => (
                                <div
                                style={{
                                    pointerEvents: filterOpen? "auto":"none",
                                    opacity: filterOpen ? 1 : 0,
                                    height: filterOpen? "32px": "0px",
                                    transitionDelay: filterOpen?`${100*i+1}ms`:`${100*(array.length-i)}ms` 
                                 } }
                                onClick={() => handleFilterSelection(e)}
                                key={`unselected-${i}`}
                                className={`flex overflow-hidden transition-all duration-300 cursor-pointer items-center ${keywords[e].text} text-nowrap font-bold rounded-full border-2 ${keywords[e].border} ${keywords[e].hover} px-2 max-md:text-[12px] max-md:p-1 hover:text-white`}>
                                    {e}
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
                <div className="flex w-full h-[550px] items-center">
                    {filteredProjects && 
                    <Swiper
                        key={filteredProjects.map(p => p.id || p.title).join("-")}
                        spaceBetween={20}
                        slidesPerView={ isMobile ? 2 : 3}
                        loop={filteredProjects.length > (isMobile ? 2 : 3)}
                        centeredSlides={true}
                        navigation={true}
                        
                        mousewheel={true}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Navigation, Pagination]}
                        className="flex flex-row h-[90%] w-[90%] items-center pt-4 max-md:w-[100%]"
                        nested={true}
                        onSwiper={(swiper) => {
                            setFlippedIndex(swiper.realIndex); 
                        }}
                        onSlideChange={(swiper) => {
                            const index = swiper.realIndex

                            const direction =
                                index > flippedIndex ||
                                (index === 0 && flippedIndex === filteredProjects.length - 1)
                                ? "left"
                                : "right";

                            setSwipeDirection(direction);
                            setFlippedIndex(index);
                        }}>
                        {filteredProjects.map((e, i) => (
                            <SwiperSlide key={e.id}>
                                {({ isPrev, isActive, isNext }) => {
                                    let bgClass = "";
                                    let overlay_gradient = ""
                                    if (isPrev) {
                                        bgClass = "bg-my_gradient"
                                        overlay_gradient = "bg-gradient-to-l from-transparent to-my_bg"
                                    }
                                    else if (isActive) bgClass = "bg-my_gray drop-shadow-xl";
                                    else if (isNext) {
                                        bgClass = "bg-my_gradient_opp"
                                        overlay_gradient = "bg-gradient-to-r from-transparent to-my_bg"
                                    }
                                    else bgClass = "bg-my_bg";

                                    const flipClass = 
                                    flippedIndex === i && (swipeDirection === "left") ? "left-flip" 
                                    : flippedIndex === i && swipeDirection === "right" ? "right-flip"
                                    :"";
                                    return (
                                        <div className={`flex h-full rounded-xl border-black ${!isActive? "scale-75": "drop-shadow-md"} items-center text-my_bg_reversed overflow-hidden`}>
                                            
                                            <div className={`slide ${flipClass} flex-col h-full w-full justify-around`}>

                                                <div className={`flex ${bgClass} h-full w-full justify-center items-center front-slide`}>
                                                    <div className={`absolute inset-0 ${overlay_gradient}`}></div>
                                                    <div className='flex h-[40%] justify-center rounded-xl overflow-hidden m-3'>
                                                        <img className={`w-fit object-contain transition-all delay-300`} src={e.img}></img>
                                                    </div>
                                                </div>

                                                <div className={`flex ${bgClass} justify-center h-full w-full flex-col gap-1 back-slide overflow-auto py-2`}>
                                                    <div className={`absolute inset-0 ${overlay_gradient}`}></div>

                                                    <div className="relative flex justify-center items-center pt-3">    
                                                        <div className="absolute z-0 size-40 max-md:size-28 rounded-full bg-radial from-white/60 via-my_bg_reversed to-my_gray blur-2xl opacity-50" />
                                                        <img src={e.img} className="z-10 object-contain max-h-32 max-w-36 max-md:max-h-28 contrast-150 saturate-150" alt="Logo"/>
                                                    </div>

                                                    <div className='flex flex-col overflow-auto scrollbar-thin p-3 h-full'>
                                                        <div className='flex flex-wrap items-center w-full gap-2 py-3'>
                                                            {e.keywords.map((e,i)=><div key={i} className={`flex items-center text-white text-nowrap font-semibold rounded-full ${keywords[e].bg} px-2 py-1 max-md:text-[12px] max-md:p-1`}>{e}</div>)}
                                                        </div>
                                                        
                                                        <div className='flex flex-grow items-center w-full rounded-xl'>
                                                            
                                                            <p className={`text-wrap text-center font-mono max-md:text-[12px]`}>
                                                                {e.desc}
                                                            </p>
                                                        </div>
                                                        
                                                        <div className='flex flex-wrap gap-2 justify-around'>
                                                            {projects[i].languages.map((e,i)=>
                                                                    <img className="h-12 object-cover max-md:h-9" src={getLogo(e)} />
                                                                )}
                                                        </div>

                                                        <div className={`flex absolute inset-x-0 top-0 h-0 w-full z-10 transition-all duration-500 ease-in-out hover:h-5/6`}
                                                                onMouseEnter={() => setAriplaneAnimation(true)}
                                                                onMouseLeave={() => setAriplaneAnimation(false)}>
                                                            {/* Bookmark */}
                                                            <div className="flex absolute bottom-0 right-5 z-20 translate-y-10 max-md:translate-y-7">
                                                                <div className={`cursor-pointer animate-[wiggle_1s_ease-in-out_infinite]`}>
                                                                <i className="bi bi-bookmark-fill fs-1"></i>
                                                                </div>
                                                            </div>

                                                            <div className="absolute overflow-hidden border-b-4 border-my_bg_reversed rounded-b-xl flex h-full w-full bg-my_gray opacity-90">
                                                            <a
                                                                target="blank"
                                                                href={projects[i].url}
                                                                className="flex flex-col my-auto w-full no-underline cursor-pointer text-my_bg_reversed place-items-center place-content-center hover:text-my_bg"
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
                                    );}}
                            </SwiperSlide>
                            ))}
                    </Swiper>}
                </div>
            </div>
        </div>
    );
}

export {Projects};
