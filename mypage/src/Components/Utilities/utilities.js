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

export {projects, keywords}