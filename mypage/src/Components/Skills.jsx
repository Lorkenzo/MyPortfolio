import { AnimatePresence , motion } from "framer-motion";
import ProblemSolving from "../assets/problem-solving.png"
import TeamWork from "../assets/team-work.png"
import CriticalThink from "../assets/critical-thinking.png"
import ActiveLearning from "../assets/active-learning.png"
import Proactive from "../assets/proactive.png"
import Positive from "../assets/positive.png"
import getLogo from "./Utilities/utilities"
import { useState } from "react";

function Skills({refprop}){
    const [selectedSkill, setSelectedSkill] = useState(null)
    const [open, setOpen] = useState(false)

    const hardskill1 = ["html5","css3","js","sql"]
    const hardskill2 = ["ts","python"]
    const hardskill3 = ["c","java"]
    const hardskill4 = ["rust","office"]
    const hardskill5 = ["asm"]

    const hardskills = {
        0: hardskill1,
        1: hardskill2,
        2: hardskill3,
        3: hardskill4,
        4: hardskill5
    }

    const hardskillsTitle = {
        0: "Proficient Developer",
        1: "Advanced Developer",
        2: "Medium developer",
        3: "Base Developer",
        4: "Early Developer"
    }

    const hardskillsDesc = {
        0: <p> Experienced in building <span className="font-bold text-purple-500">complex and professional-grade applications</span> using a modern <span className="font-bold text-purple-500">full-stack JavaScript ecosystem</span>. On the frontend, I specialize in <span className="font-bold text-sky-500">React</span> and <span className="font-bold text-sky-500">Tailwind CSS</span>, having developed <span className="font-bold text-purple-500">advanced user interfaces</span> that are both scalable and responsive. I’ve worked extensively with various <span className="font-bold text-sky-500">React-based frameworks</span> to optimize performance and structure large applications effectively.
            <br/><br/>On the backend, I rely on <span className="font-bold text-orange-500">Node.js</span> and <span className="font-bold text-orange-500">Express</span> to create robust APIs and server-side logic, integrating databases with <span className="font-bold text-orange-500">SQL</span> for efficient data management. I place strong emphasis on <span className="font-bold text-emerald-500">code quality</span> and <span className="font-bold text-emerald-500">reliability</span>, with solid experience in writing both <span className="font-bold text-emerald-500">unit tests</span> and <span className="font-bold text-emerald-500">integration tests</span> across the stack.
            <br/><br/>  This skillset has been applied across a range of <span className="font-bold text-purple-500">professional</span> and <span className="font-bold text-purple-500">high-level personal projects</span>, giving me practical, production-level experience in <span className="font-bold text-purple-500">full-cycle application development</span> and <span className="font-bold text-purple-500">agile development</span>.
            <br/><br/>I'm always looking to <span className="font-bold text-pink-500">expand my knowledge</span> and stay up-to-date with the latest technologies and best practices in the development world.
        </p>,
        1: <p> I have strong proficiency with both <span className="font-bold text-indigo-500">TypeScript</span> and <span className="font-bold text-indigo-500">Python</span>, applying them in distinct yet complementary domains.
            <br/><br/>With <span className="font-bold text-indigo-500">TypeScript</span>, I specialize in <span className="font-bold text-emerald-500">unit testing</span> and <span className="font-bold text-emerald-500">integration testing</span>, and have integrated it into projects to enhance <span className="font-bold text-emerald-500">code safety</span> and <span className="font-bold text-emerald-500">structure</span>.
            <br/><br/>My experience with <span className="font-bold text-indigo-500">Python</span> includes <span className="font-bold text-orange-500">object-oriented programming</span> for clean and reusable architecture. I’ve extensively used it in <span className="font-bold text-pink-500">machine learning</span> applications with <span className="font-bold text-pink-500">PyTorch</span>, working with <span className="font-bold text-pink-500">classifiers</span>, <span className="font-bold text-pink-500">pattern recognition</span>, and <span className="font-bold text-pink-500">fine-tuning of pre-trained models</span>.
            <br/><br/>Additionally, I’ve applied <span className="font-bold text-indigo-500">Python</span> to develop custom <span className="font-bold text-blue-500">optimization algorithms</span>, including implementations of <span className="font-bold text-blue-500">greedy resolutions</span>, <span className="font-bold text-blue-500">genetic algorithms</span> and <span className="font-bold text-blue-500">path search techniques</span> for advanced problem solving.
            </p>
,
        2: <p> I have working knowledge of both <span className="font-bold text-indigo-500">C</span> and <span className="font-bold text-indigo-500">Java</span>, with hands-on experience in applying each language in specialized domains.
            <br/><br/>With <span className="font-bold text-indigo-500">C</span>, beyond understanding the <span className="font-bold text-emerald-500">foundations of design patterns</span>, I have applied the language to implement <span className="font-bold text-orange-500">algorithms on embedded system-on-chip platforms</span>, particularly using <span className="font-bold text-orange-500">Keil</span> for low-level hardware interaction and development.
            <br/><br/>In contrast, my experience with <span className="font-bold text-indigo-500">Java</span> has been primarily in the context of <span className="font-bold text-cyan-500">Big Data</span>. I have a solid grasp of tools like <span className="font-bold text-cyan-500">Hadoop</span> and <span className="font-bold text-cyan-500">Apache Spark</span>, using them for efficient <span className="font-bold text-cyan-500">data analysis and distributed processing</span>.
            </p>
,
        3: <p> I have introductory but practical experience with <span className="font-bold text-indigo-500">Rust</span> and the <span className="font-bold text-indigo-500">Open Office suite</span>.
            <br/><br/>With <span className="font-bold text-indigo-500">Rust</span>, I’ve developed a solid understanding of its syntax and its powerful capabilities for <span className="font-bold text-orange-500">concurrent programming using threads</span>. I collaborated on a team project to build a <span className="font-bold text-sky-500">screensharing application entirely in Rust</span>, where I focused on <span className="font-bold text-sky-500">UI design</span> and <span className="font-bold text-orange-500">thread management</span>.
            <br/><br/>Regarding the <span className="font-bold text-indigo-500">Open Office tools</span>, I have basic experience using <span className="font-bold text-emerald-500">Excel</span> for <span className="font-bold text-emerald-500">data collection</span>, <span className="font-bold text-emerald-500">Word</span> for <span className="font-bold text-emerald-500">document writing</span>, and <span className="font-bold text-emerald-500">PowerPoint</span> for building <span className="font-bold text-emerald-500">presentations</span>.
            </p>,
        4: <p> I have foundational experience with <span className="font-bold text-indigo-500">Assembly</span>, primarily focused on understanding <span className="font-bold text-emerald-500">basic syntax</span> and the principles of <span className="font-bold text-orange-500">low-level programming</span>.
            <br/><br/>While my practical usage of <span className="font-bold text-indigo-500">Assembly</span> has been limited, I’ve applied it in the context of <span className="font-bold text-orange-500">embedded systems development</span> alongside <span className="font-bold text-indigo-500">C</span>, particularly for implementing <span className="font-bold text-blue-500">sorting algorithms</span> and deepening my understanding of <span className="font-bold text-orange-500">machine-level operations</span>.
            </p>

    }

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
        <div className="flex w-full h-screen items-end max-md:items-center" ref={refprop}>
            <div className="flex flex-col w-full h-[calc(100%-64px)] max-md:h-[calc(100%-128px)]">
                <div className="flex w-full h-[15%] justify-center items-center">
                    <p className={`text-[32px] font-semibold font-mono`}>My Skills</p>
                </div>
                <div className="flex flex-row w-full h-[85%] justify-center gap-4 justify-items-center content-center">
                    <div className="flex w-[40%] h-[90%] justify-center">
                        <div className="flex flex-col h-full w-full p-3 rounded-lg bg-my_gradient_reversed backdrop-blur-md">
                            <div className="flex h-1/6 w-full items-center">
                                <p className="text-[18px] font-semibold font-mono mx-auto">Hard Skill</p>
                            </div>
                            {[90, 70, 50, 30, 10].map((num, i) => (
                            <div
                                key={i}
                                className={`flex flex-row w-full items-center overflow-hidden`}
                                style={{
                                opacity: selectedSkill === null || selectedSkill === i ? 1 : 0.3, 
                                height: selectedSkill === null || selectedSkill === i? "16.666667%" : 0, 
                                pointerEvents: selectedSkill === null || selectedSkill === i ? "auto" : "none", 
                                transition: "opacity 0.3s ease, height 0.5s ease"
                                }}
                            >
                                <div
                                className="grid place-content-around justify-items-center w-[40%] h-full p-1"
                                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(17px, 1fr))", gap: "4px" }}
                                >
                                {hardskills[i].map((skill, index) => (
                                    <img key={index} className="max-h-12" src={getLogo(skill)} />
                                ))}
                                </div>

                                <div className="flex w-[50%] h-[40%] p-1 mx-3 bg-my_gray rounded-full">
                                <motion.div
                                    initial={{ width: "20%" }}
                                    whileInView={{
                                    width: `${num}%`,
                                    transition: { duration: 1.2, ease: "easeInOut" }
                                    }}
                                    className="h-[90%] bg-white rounded-full"
                                />
                                </div>

                                <div className={`cursor-pointer ${selectedSkill===i || open!==false?"rotate-45":"rotate-0"} transition-all duration-100`} onClick={() => handleDescOpen(i)}>
                                <i className={`bi bi-plus-circle-fill fs-4 text-[rgba(0,0,0,0.6)] hover:text-black`}></i>
                                </div>
                            </div>
                        ))}

                          <div
                            key={`skillDetail-${selectedSkill}`}
                            className="w-full overflow-hidden"
                            style={{
                                opacity: open === false ? 0.3: 1, 
                                height: open === false ? 0 : "66.666667%", 
                                pointerEvents: open === false ? "none" : "auto", 
                                transition: "opacity 0.5s ease, height 0.8s ease"
                                }}
                        >
                            <div className="flex flex-col gap-2 h-full bg-white p-4 rounded-md shadow overflow-auto">
                                <div className="font-bold text-lg">{hardskillsTitle[selectedSkill]}</div>
                                <div>{hardskillsDesc[selectedSkill]}</div>
                            </div>
                        </div>
                        
                    </div>

                    </div>
                    <div className="flex w-[40%] h-[90%] justify-center">
                        <div className="flex flex-col h-full w-full p-2 rounded-lg bg-my_gradient_reversed justify-center backdrop-blur-md text-[16px] max-md:text-[10px]">
                            
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