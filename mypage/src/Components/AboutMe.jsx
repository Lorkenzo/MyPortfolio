import myPhoto from "../assets/my-photo.jpeg";

function AboutMe({isMobile}){
    return(
        <div className={`flex w-full items-end max-lg:items-center py-20`} id="About Me">
            <div className="flex flex-col-reverse w-full justify-center md:flex-row max-md:justify-end">
                <div className="flex w-2/3 justify-center items-center max-md:w-full">

                    <div className="flex h-fit py-4 w-[75%] rounded-lg bg-my_gradient_reversed justify-center items-center backdrop-blur-md max-md:w-full max-md:mx-2">
                        <div className="w-[80%]">
                            <div className="flex flex-row text-[20px] font-mono">
                                <p>
                                    Hi! My name is <span className="font-bold text-my_bg_reversed transition-colors duration-500">Lorenzo</span>.
                                </p>
                            </div>

                            <div className={`${isMobile ? "text-[12px]" : "text-[15px]"}`}>
                                <div className="flex flex-row gap-4">
                                    <i className={`bi bi-mortarboard ${isMobile ? "fs-5" : "fs-3"}`}></i>
                                    <p className="font-mono text-justify content-center">
                                    I'm a passionate <span className="font-bold text-purple-500">Computer Engineering</span> student, and currently completing my <span className="font-bold text-purple-500">Master</span> in <span className="font-bold text-pink-500">AI</span> and <span className="font-bold text-pink-500">Data Analytics</span>.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <i className={`bi bi-code-slash ${isMobile ? "fs-5" : "fs-3"}`}></i>
                                    <p className="font-mono text-justify content-center">
                                    I have a strong foundation in <span className="font-bold text-sky-500">software development</span>, <span className="font-bold text-sky-500">algorithms</span>, and <span className="font-bold text-sky-500">system design</span>, with a keen interest in <span className="font-bold text-pink-500">AI</span> and <span className="font-bold text-pink-500">web development</span>.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <i className={`bi bi-lightbulb ${isMobile ? "fs-5" : "fs-3"}`}></i>
                                    <p className="font-mono text-justify content-center">
                                    I enjoy tackling <span className="font-bold text-orange-500">complex problems</span>, <span className="font-bold text-orange-500">optimizing performance</span>, and building <span className="font-bold text-pink-500">innovative solutions</span>.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <i className={`bi bi-graph-up-arrow ${isMobile ? "fs-5" : "fs-3"}`}></i>
                                    <p className="font-mono text-justify content-center">
                                    Always eager to <span className="font-bold text-emerald-500">learn and grow</span>, I thrive in dynamic environments where I can <span className="font-bold text-emerald-500">collaborate</span> and <span className="font-bold text-emerald-500">make an impact</span>.
                                    </p>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <i className={`bi bi-people ${isMobile ? "fs-5" : "fs-3"}`}></i>
                                    <div className="font-mono text-justify content-center">
                                    Let’s <a className="font-bold text-my_bg_reversed hover:text-my_bg  transition-colors duration-500" href="#Contacts">connect</a> and build something amazing together!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-1/3 max-md:h-[150px] items-center justify-start max-md:w-full max-md:justify-center">
                    <div className={`flex h-2/3 rounded-full bg-my_gradient_reversed overflow-hidden drop-shadow-md max-md:h-full`}>
                        <img className="h-full w-full object-cover grayscale" src={myPhoto} alt="My Photo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export {AboutMe}