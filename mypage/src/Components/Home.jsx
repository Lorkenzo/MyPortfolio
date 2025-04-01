
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
            setIsFixed(imgTop <= 0 && isMobile?imgSize.get()===30:imgSize.get()===50); // Se l'immagine raggiunge il top, diventa fissa
        }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    // Trasform image size and position
    const imgSize = useTransform(scrollY, isMobile?[0,200]:[0, 200], isMobile?[150,30]: [250, 50]); // scroll 0 -> 350px , scroll 200 -> 50px
    //const imgY = useTransform(scrollY, isMobile?[0,250]:[0, 100], isMobile?[0,25]:[0, 0]); // 

    // Trasform image position and opacity
    const textY = useTransform(scrollY, [0, 100], [0, 50]); // scoll 0 -> 0, scroll 100 -> 50
    const textOpacity = useTransform(scrollY, isMobile?[0,300]:[0, 200], [1, 0]); // scoll 0 -> full opacity, scroll 200 -> transparent

    const textSize1 = useTransform(scrollY, isMobile?[0,200]:[0, 200], isMobile?["12px","6px"]:["20px", "10px"]); 
    const textSize2 = useTransform(scrollY, isMobile?[0,200]:[0, 200], isMobile?["8px","4px"]:["12px", "6px"]); 

    return (
            <div className="flex flex-col w-screen h-screen justify-around">
            <div className={`flex flex-col basis-3/4 place-content-center`}>
                <motion.img
                ref={imgRef}
                src={MyLogo}
                alt="leafless-logo"
                className={`mx-auto ${isFixed ? "fixed top-0 w-screen" : ""}`}
                style={{
                    zIndex:1000,
                    //y: isFixed ? 0 : imgY,
                    width: imgSize,
                    height: imgSize,
                }}
                />
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
            <div className="basis-1/4 content-center">
            <i className="flex justify-center bi bi-arrow-down-circle-fill fs-2 animate-bounce"></i>
            <p className="flex justify-center italic font-extralight text-[20px] animate-bounce"> Scroll to learn more about me</p>
            </div>
            </div>
    );
}

export {Home}