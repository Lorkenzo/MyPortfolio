
import MyLogo from "../assets/leafless-tree.svg"
import { useState,useEffect,useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Home({isMobile}){
    const { scrollY } = useScroll();
    const [isFixed, setIsFixed] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        if (imgRef.current) {
            const imgTop = imgRef.current.getBoundingClientRect().top; // Distanza dal top
            setIsFixed(imgSize.get()===50); // Se l'immagine raggiunge il top, diventa fissa
        }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Trasform image size and position
    const imgSize = useTransform(scrollY, [0, 250], [250, 50]); // scroll 0 -> 350px , scroll 200 -> 50px
    //const imgY = useTransform(scrollY, isMobile?[0,250]:[0, 100], isMobile?[0,25]:[0, 0]); // 

    // Trasform image position and opacity
    const textY = useTransform(scrollY, [0, 100], [0, 50]); // scoll 0 -> 0, scroll 100 -> 50
    const textOpacity = useTransform(scrollY, isMobile?[0,300]:[0, 200], [1, 0]); // scoll 0 -> full opacity, scroll 200 -> transparent

    const textSize1 = useTransform(scrollY, isMobile?[0,200]:[0, 200], isMobile?["12px","6px"]:["20px", "10px"]); 
    const textSize2 = useTransform(scrollY, isMobile?[0,200]:[0, 200], isMobile?["8px","4px"]:["12px", "6px"]); 

    return (
        <div className="flex w-full h-screen items-end">
            <div className="flex flex-col w-full h-[calc(100%-64px)] items-center">
                <div className={`flex flex-col w-full h-4/5 items-center justify-center`}>
                    <div className={`flex z-[1000] ${isFixed && "fixed top-0 my-1"}`}>
                    <motion.img
                        ref={imgRef}
                        src={MyLogo}
                        alt="leafless-logo"
                        style={{
                            width:imgSize,
                            height:imgSize
                        }}
                        />
                    </div>
                    <motion.p
                        className="font-light italic mx-auto"
                        style={{ y: textY, opacity: textOpacity, fontSize: textSize1}}
                    >
                        “Every great idea starts as a branch<br />
                    </motion.p>
                    <motion.p
                        className="font-light italic mx-auto"
                        style={{ y: textY, opacity: textOpacity, fontSize: textSize1}}
                    >
                        Choose your path, create your branch, and let innovation grow"
                    </motion.p>
                    <motion.p
                        className="font-light italic mx-auto"
                        style={{ y: textY, opacity: textOpacity, fontSize: textSize2 }}
                    >
                        ~ ChatGPT
                    </motion.p>
                    
                </div>
                <div className="flex flex-row gap-3 justify-center w-full h-1/5">
                    <div className="flex items-start">
                        <p className="italic font-extralight text-[20px] animate-bounce"><i className="bi bi-arrow-down-circle-fill fs-2 align-middle"></i> Scroll to learn more about me</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Home}