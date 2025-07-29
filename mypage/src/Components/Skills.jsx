import { animate, motion } from "framer-motion";
import ProblemSolving from "../assets/problem-solving.png"
import TeamWork from "../assets/team-work.png"
import CriticalThink from "../assets/critical-thinking.png"
import ActiveLearning from "../assets/active-learning.png"
import Proactive from "../assets/proactive.png"
import Positive from "../assets/positive.png"
import getLogo from "./Utilities/utilities"

function Skills({refprop}){
    const hardskill1 = ["html5","css3","js","sql"]
    const hardskill2 = ["ts","python"]
    const hardskill3 = ["c","java","office"]
    const hardskill4 = ["rust"]
    const hardskill5 = ["asm"]

    const hardskills = {
        0: hardskill1,
        1: hardskill2,
        2: hardskill3,
        3: hardskill4,
        4: hardskill5
    }

    return(
        <div className="flex w-full h-screen items-end max-md:items-center" ref={refprop}>
            <div className="flex flex-col w-full h-[calc(100%-64px)] max-md:h-[calc(100%-128px)]">
                <div className="flex w-full h-[15%] justify-center items-center">
                    <p className={`text-[32px] font-semibold font-mono`}>My Skills</p>
                </div>
                <div className="flex flex-row w-[100%] h-[85%] justify-center gap-4 justify-items-center content-center">
                    <div className="flex w-[40%] h-[90%] justify-center">
                        <div className="flex flex-col h-full w-full p-2 rounded-lg bg-my_gradient_reversed content-center justify-items-center backdrop-blur-md">
                            
                            <p className={`text-[18px] font-semibold font-mono mx-auto`}>Hard Skill</p>

                            {[90,70,50,30,10].map((num,i)=> 
                            <div className="flex flex-row h-1/6 items-center">
                                <div className="grid place-content-around justify-items-center w-[40%] h-full p-1" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(17px, 1fr))", gap: "4px"}}>
                                        {
                                            hardskills[i].map((skill,index)=>{
                                                return <img key={index} className={`max-h-14`} src={getLogo(skill)}></img>
                                            })
                                        }
                                </div>
                                
                                <div className="w-[60%] h-[40%] p-1 mx-3 bg-my_gray rounded-full justify-items-start content-center">
                                    <motion.div 
                                    initial={{ width: "20%"}}
                                    whileInView={{
                                        width: `${num}%`,
                                        transition: { duration: 1.2, ease: "easeInOut" }
                                    }}
                                    className=" h-[90%] bg-white rounded-full">
                                    
                                    </motion.div>
                                </div>   
                            </div>)}
                            
                        </div>
                    </div>
                    <div className="flex w-[40%] h-[90%] justify-center">
                        <div className="flex flex-col h-full w-full p-2 rounded-lg bg-my_gradient_reversed justify-items-center backdrop-blur-md text-[16px] max-md:text-[10px]">
                            
                            <p className={`text-[18px] font-semibold font-mono mx-auto`}>Soft Skill</p>
                            
                            <div className="flex h-1/4 items-center max-md:h-1/3">
                                <div 
                                    className="grid grid-cols-4 h-full w-full place-items-center max-md:grid-cols-2 max-md:grid-rows-2" 
                                    style={{ gap: "2px" }}
                                >   
                                    <img className="max-h-20 object-contain max-md:max-h-14" src={ProblemSolving} alt="Problem Solving" />
                                    <p className="font-semibold font-mono justify-self-start max-md">Problem <br/> Solving</p>
                                    
                                    <img className="max-h-20 object-contain max-md:max-h-14" src={TeamWork} alt="Team Work" />
                                    <p className="font-semibold font-mono justify-self-start">Team <br/> Work</p>
                                </div>
                            </div>

                            <div className="flex h-1/4 items-center max-md:h-1/3">
                                <div 
                                    className="grid grid-cols-4 h-full w-full place-items-center max-md:grid-cols-2 max-md:grid-rows-2" 
                                    style={{ gap: "2px" }}
                                >
                                    <img className="max-h-20 object-contain max-md:max-h-14" src={CriticalThink} alt="Problem Solving" />
                                    <p className="font-semibold font-mono justify-self-start">Critical <br/> Thinking</p>  

                                    <img className="max-h-20 object-contain max-md:max-h-14" src={Positive} alt="Problem Solving" />
                                    <p className="font-semibold font-mono justify-self-start">Positive <br/> Mindset</p>
                                </div>
                            </div>

                            <div className="flex h-1/4 items-center max-md:h-1/3">
                                <div 
                                    className="grid grid-cols-4 h-full w-full place-items-center max-md:grid-cols-2 max-md:grid-rows-2" 
                                    style={{ gap: "2px" }}
                                >
                                    <img className="max-h-20 object-contain max-md:max-h-14" src={ActiveLearning} alt="Problem Solving" />
                                    <p className="font-semibold font-mono justify-self-start">Active <br/> Learning</p>

                                    <img className="max-h-20 object-contain max-md:max-h-14" src={Proactive} alt="Team Work" />
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