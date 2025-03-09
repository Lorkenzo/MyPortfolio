
import MyLogo from "../assets/leafless-tree.svg"
import { useState,useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Home(){
    const { scrollY } = useScroll();

    // Trasform image size and position
    const imgSize = useTransform(scrollY, [0, 200], [350, 50]); // scroll 0 -> 350px , scroll 200 -> 50px
    const imgY = useTransform(scrollY, [0, 100], [0, 50]); // 

    // Trasform image position and opacity
    const textY = useTransform(scrollY, [0, 100], [0, 50]); // scoll 0 -> 0, scroll 100 -> 50
    const textOpacity = useTransform(scrollY, [0, 200], [1, 0]); // scoll 0 -> full opacity, scroll 200 -> transparent

    const textSize1 = useTransform(scrollY, [0, 200], ["24px", "12px"]); 
    const textSize2 = useTransform(scrollY, [0, 200], ["16px", "8px"]); 

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (current) => {
          setIsFixed(current >= 200); // If the scroll is >= 200px then stuck the image
        });
        return () => unsubscribe();
      }, [scrollY]);

    return (
        <div className="mt-[10%]">
            <div className={`flex justify-center w-screen ${isFixed ? "fixed top-0 left-0" : ""}`}>
                <motion.img
                src={MyLogo}
                alt="leafless-logo"
                
                style={{
                    y: isFixed ? 0 : imgY,
                    width: imgSize,
                    height: imgSize,
                }}
                />
            </div>
            <div className="font-light italic">
                <motion.p
                    className="flex justify-center"
                    style={{ y: textY, opacity: textOpacity, fontSize: textSize1}}
                >
                    “Every great idea starts as a branch, whether in nature or in code.<br />
                    Choose your path, create your branch, and let innovation grow."
                </motion.p>
                <motion.p
                    className="flex justify-center"
                    style={{ y: textY, opacity: textOpacity, fontSize: textSize2 }}
                >
                    ~ ChatGPT
                </motion.p>
            </div>
        </div>
    );
}

export {Home}