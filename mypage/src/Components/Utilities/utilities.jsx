import HtmlLogo from "../../assets/html5.png"
import CssLogo from "../../assets/css3.png"
import JsLogo from "../../assets/js.png"
import TsLogo from "../../assets/ts.png"
import ReactLogo from "../../assets/react.png"
import PythonLogo from "../../assets/python.png"
import SqlLogo from "../../assets/sql.png"
import CLogo from "../../assets/c.png"
import JavaLogo from "../../assets/java.png"
import OfficeLogo from "../../assets/office.png"
import RustLogo from "../../assets/rust.png"
import AsmLogo from "../../assets/asm.png"
import BootstrapLogo from "../../assets/bootstrap.png"
import SqliteLogo from "../../assets/sqlite.png"
import TailwindLogo from "../../assets/tailwind.png"
import OpenAILogo from "../../assets/openai.png"

export default function getLogo(skill){
    if (skill === "html5") return HtmlLogo
    else if (skill === "css3") return CssLogo
    else if (skill === "js") return JsLogo
    else if (skill === "react") return ReactLogo
    else if (skill === "ts") return TsLogo
    else if (skill === "python") return PythonLogo
    else if (skill === "sql") return SqlLogo
    else if (skill === "c") return CLogo
    else if (skill === "java") return JavaLogo
    else if (skill === "office") return OfficeLogo
    else if (skill === "rust") return RustLogo
    else if (skill === "asm") return AsmLogo
    else if (skill === "bootstrap") return BootstrapLogo
    else if (skill === "sqlite") return SqliteLogo
    else if (skill === "tailwind") return TailwindLogo
    else if (skill === "openai") return OpenAILogo
}

const hardskills = [
    {
        id:0,
        quantity:90,
        skills: ["html5","css3","js","sql"],
        title: "Proficient Developer",
        description: 
        <p> Experienced in building <span className="font-bold text-purple-500">complex and professional-grade applications</span> using a modern <span className="font-bold text-purple-500">full-stack JavaScript ecosystem</span>. On the frontend, I specialize in <span className="font-bold text-sky-500">React</span> and <span className="font-bold text-sky-500">Tailwind CSS</span>, having developed <span className="font-bold text-purple-500">advanced user interfaces</span> that are both scalable and responsive. I’ve worked extensively with various <span className="font-bold text-sky-500">React-based frameworks</span> to optimize performance and structure large applications effectively.
            <br/><br/>On the backend, I rely on <span className="font-bold text-orange-500">Node.js</span> and <span className="font-bold text-orange-500">Express</span> to create robust APIs and server-side logic, integrating databases with <span className="font-bold text-orange-500">SQL</span> for efficient data management. I place strong emphasis on <span className="font-bold text-emerald-500">code quality</span> and <span className="font-bold text-emerald-500">reliability</span>, with solid experience in writing both <span className="font-bold text-emerald-500">unit tests</span> and <span className="font-bold text-emerald-500">integration tests</span> across the stack.
            <br/><br/>  This skillset has been applied across a range of <span className="font-bold text-purple-500">professional</span> and <span className="font-bold text-purple-500">high-level personal projects</span>, giving me practical, production-level experience in <span className="font-bold text-purple-500">full-cycle application development</span> and <span className="font-bold text-purple-500">agile development</span>.
            <br/><br/>I'm always looking to <span className="font-bold text-pink-500">expand my knowledge</span> and stay up-to-date with the latest technologies and best practices in the development world.
        </p>
    },
    {
        id:1,
        quantity:70,
        skills: ["ts","python"],
        title: "Advanced Developer",
        description: 
        <p> I have strong proficiency with both <span className="font-bold text-indigo-500">TypeScript</span> and <span className="font-bold text-indigo-500">Python</span>, applying them in distinct yet complementary domains.
            <br/><br/>With <span className="font-bold text-indigo-500">TypeScript</span>, I specialize in <span className="font-bold text-emerald-500">unit testing</span> and <span className="font-bold text-emerald-500">integration testing</span>, and have integrated it into projects to enhance <span className="font-bold text-emerald-500">code safety</span> and <span className="font-bold text-emerald-500">structure</span>.
            <br/><br/>My experience with <span className="font-bold text-indigo-500">Python</span> includes <span className="font-bold text-orange-500">object-oriented programming</span> for clean and reusable architecture. I’ve extensively used it in <span className="font-bold text-pink-500">machine learning</span> applications with <span className="font-bold text-pink-500">PyTorch</span>, working with <span className="font-bold text-pink-500">classifiers</span>, <span className="font-bold text-pink-500">pattern recognition</span>, and <span className="font-bold text-pink-500">fine-tuning of pre-trained models</span>.
            <br/><br/>Additionally, I’ve applied <span className="font-bold text-indigo-500">Python</span> to develop custom <span className="font-bold text-blue-500">optimization algorithms</span>, including implementations of <span className="font-bold text-blue-500">greedy resolutions</span>, <span className="font-bold text-blue-500">genetic algorithms</span> and <span className="font-bold text-blue-500">path search techniques</span> for advanced problem solving.
        </p>
    },
    {
        id:2,
        quantity:50,
        skills: ["c","java"],
        title: "Medium developer",
        description: 
        <p> I have working knowledge of both <span className="font-bold text-indigo-500">C</span> and <span className="font-bold text-indigo-500">Java</span>, with hands-on experience in applying each language in specialized domains.
            <br/><br/>With <span className="font-bold text-indigo-500">C</span>, beyond understanding the <span className="font-bold text-emerald-500">foundations of design patterns</span>, I have applied the language to implement <span className="font-bold text-orange-500">algorithms on embedded system-on-chip platforms</span>, particularly using <span className="font-bold text-orange-500">Keil</span> for low-level hardware interaction and development.
            <br/><br/>In contrast, my experience with <span className="font-bold text-indigo-500">Java</span> has been primarily in the context of <span className="font-bold text-cyan-500">Big Data</span>. I have a solid grasp of tools like <span className="font-bold text-cyan-500">Hadoop</span> and <span className="font-bold text-cyan-500">Apache Spark</span>, using them for efficient <span className="font-bold text-cyan-500">data analysis and distributed processing</span>.
        </p>
    },
    {
        id:3,
        quantity:30,
        skills: ["rust","office"],
        title: "Base Developer",
        description: 
        <p> I have introductory but practical experience with <span className="font-bold text-indigo-500">Rust</span> and the <span className="font-bold text-indigo-500">Open Office suite</span>.
            <br/><br/>With <span className="font-bold text-indigo-500">Rust</span>, I’ve developed a solid understanding of its syntax and its powerful capabilities for <span className="font-bold text-orange-500">concurrent programming using threads</span>. I collaborated on a team project to build a <span className="font-bold text-sky-500">screensharing application entirely in Rust</span>, where I focused on <span className="font-bold text-sky-500">UI design</span> and <span className="font-bold text-orange-500">thread management</span>.
            <br/><br/>Regarding the <span className="font-bold text-indigo-500">Open Office tools</span>, I have basic experience using <span className="font-bold text-emerald-500">Excel</span> for <span className="font-bold text-emerald-500">data collection</span>, <span className="font-bold text-emerald-500">Word</span> for <span className="font-bold text-emerald-500">document writing</span>, and <span className="font-bold text-emerald-500">PowerPoint</span> for building <span className="font-bold text-emerald-500">presentations</span>.
        </p>
    },
    {
        id:4,
        quantity:10,
        skills: ["asm"],
        title: "Early Developer",
        description: 
        <p> I have foundational experience with <span className="font-bold text-indigo-500">Assembly</span>, primarily focused on understanding <span className="font-bold text-emerald-500">basic syntax</span> and the principles of <span className="font-bold text-orange-500">low-level programming</span>.
            <br/><br/>While my practical usage of <span className="font-bold text-indigo-500">Assembly</span> has been limited, I’ve applied it in the context of <span className="font-bold text-orange-500">embedded systems development</span> alongside <span className="font-bold text-indigo-500">C</span>, particularly for implementing <span className="font-bold text-blue-500">sorting algorithms</span> and deepening my understanding of <span className="font-bold text-orange-500">machine-level operations</span>.
        </p>
    }
]

import MemeGame from "../../assets/project1.png"
import Quoridor from "../../assets/project2.webp"
import KirunaExplorer from "../../assets/project3.png"
import NPuzzle from "../../assets/project4.png"
import RustScreenshare from "../../assets/project5.png"
import MyPortfolio from "../../assets/my-name-logo.png"
import CatAI from "../../assets/project6.png"

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

export {projects, keywords, hardskills}