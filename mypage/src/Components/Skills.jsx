import { motion } from "framer-motion";
import ProblemSolving from "../assets/problem-solving.png"
import TeamWork from "../assets/team-work.png"
import CriticalThink from "../assets/critical-thinking.png"
import ActiveLearning from "../assets/active-learning.png"
import Proactive from "../assets/proactive.png"
import Positive from "../assets/positive.png"
import getLogo from "./Utilities/utilities"
import { useState } from "react";
import { hardskills } from "./Utilities/utilities";

function Skills(){
    const [selectedSkill, setSelectedSkill] = useState(null)
    const [open, setOpen] = useState(false)

    const handleDescOpen = (i) =>{
        if (selectedSkill === null){
            setSelectedSkill(prev => (prev === i ? null : i)) 
            setTimeout(()=>{setOpen(prev=>!prev)},[500])
        }
        else{
            setOpen(prev=>!prev)
            setTimeout(()=>{setSelectedSkill(prev => (prev === i ? null : i)) },[500])
        }
    }

    return(
        <div className="flex w-full items-end max-md:items-center py-20" id="Skills">
            <div className="flex flex-col w-full">
                <div className="flex w-full justify-center items-center">
                    <p className={`text-[32px] font-semibold font-mono`}>My Skills</p>
                </div>
                <div className="flex flex-row w-full h-[550px] justify-center gap-4 justify-items-center content-center">
                    <div className="flex w-1/2 h-[90%] justify-center">
                        <div className="flex flex-col h-full w-full p-3 rounded-lg bg-my_gradient_reversed backdrop-blur-md">
                            <div className="flex h-1/6 w-full items-center">
                                <p className="text-[18px] font-semibold font-mono mx-auto">Hard Skill</p>
                            </div>
                            {hardskills.map((e, i) => (
                                <div
                                    key={e.id}
                                    className={`flex flex-row w-full items-center overflow-hidden`}
                                    style={{
                                    opacity: selectedSkill === null || selectedSkill === i ? 1 : 0.3, 
                                    height: selectedSkill === null || selectedSkill === i? "16.666667%" : 0, 
                                    pointerEvents: selectedSkill === null || selectedSkill === i ? "auto" : "none", 
                                    transition: "opacity 0.3s ease, height 0.5s ease"
                                    }}>
                                    <div
                                    className="grid place-content-around justify-items-center w-[40%] h-full p-1"
                                    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(17px, 1fr))", gap: "4px" }}
                                    >
                                    {e.skills.map((skill, index) => (
                                        <img key={index} className="max-h-12" src={getLogo(skill)} />
                                    ))}
                                    </div>

                                    <div className="flex w-[50%] h-[40%] p-1 mx-3 bg-my_gray rounded-full">
                                    <motion.div
                                        initial={{ width: "20%" }}
                                        whileInView={{
                                        width: `${e.quantity}%`,
                                        transition: { duration: 1.2, ease: "easeInOut" }
                                        }}
                                        className="h-[90%] bg-white rounded-full"
                                    />
                                    </div>

                                    <div className={`cursor-pointer ${selectedSkill===i || open!==false?"rotate-45":"rotate-0"} transition-all duration-100`} onClick={() => handleDescOpen(i)}>
                                    <i className={`bi bi-plus-circle-fill fs-4 text-my_bg_reversed hover:text-my_gray transition-colors`}></i>
                                    </div>
                                </div>
                            ))}
                            {selectedSkill !==null &&
                            <div
                                key={`skillDetail-${selectedSkill}`}
                                className="w-full overflow-hidden"
                                style={{
                                    opacity: open === false ? 0.3: 1, 
                                    height: open === false ? 0 : "66.666667%", 
                                    pointerEvents: open === false ? "none" : "auto", 
                                    transition: "opacity 0.5s ease, height 0.8s ease"
                                    }}>
                                <div className="flex flex-col gap-2 h-full bg-my_gray p-4 rounded-md shadow overflow-auto scrollbar-thin">
                                    <div className="font-bold text-lg">{hardskills[0].title}</div>
                                    <div>{hardskills[0].description}</div>
                                </div>
                            </div>
                            }
                        </div>

                    </div>
                    <div className="flex w-[30%] h-[90%] justify-center">
                        <div className="flex flex-col h-full w-full p-2 rounded-lg bg-my_gradient_reversed justify-center backdrop-blur-md text-[16px] max-lg:text-[10px]">
                            
                            <p className={`text-[18px] font-semibold font-mono mx-auto`}>Soft Skill</p>
                            
                            <div className="flex h-1/4 items-center max-md:h-1/3">
                                <div className="grid grid-cols-4 h-full w-full place-items-center max-md:grid-cols-2 max-md:grid-rows-2" style={{ gap: "2px" }}>   
                                    <img className="max-h-20 object-contain max-md:max-h-10" src={ProblemSolving} alt="Problem Solving" />
                                    <p className="font-semibold font-mono justify-self-start max-md">Problem <br/> Solving</p>
                                    
                                    <img className="max-h-20 object-contain max-md:max-h-10" src={TeamWork} alt="Team Work" />
                                    <p className="font-semibold font-mono justify-self-start">Team <br/> Work</p>
                                </div>
                            </div>

                            <div className="flex h-1/4 items-center max-md:h-1/3">
                                <div className="grid grid-cols-4 h-full w-full place-items-center max-md:grid-cols-2 max-md:grid-rows-2" style={{ gap: "2px" }}>
                                    <img className="max-h-20 object-contain max-md:max-h-10" src={CriticalThink} alt="Problem Solving" />
                                    <p className="font-semibold font-mono justify-self-start">Critical <br/> Thinking</p>  

                                    <img className="max-h-20 object-contain max-md:max-h-10" src={Positive} alt="Problem Solving" />
                                    <p className="font-semibold font-mono justify-self-start">Positive <br/> Mindset</p>
                                </div>
                            </div>

                            <div className="flex h-1/4 items-center max-md:h-1/3">
                                <div className="grid grid-cols-4 h-full w-full place-items-center max-md:grid-cols-2 max-md:grid-rows-2" style={{ gap: "2px" }}>
                                    <img className="max-h-20 object-contain max-md:max-h-10" src={ActiveLearning} alt="Problem Solving" />
                                    <p className="font-semibold font-mono justify-self-start">Active <br/> Learning</p>

                                    <img className="max-h-20 object-contain max-md:max-h-10" src={Proactive} alt="Team Work" />
                                    <p className="font-semibold font-mono justify-self-start">Proactive <br/> Appoach</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Skills}