import myPhoto from "../assets/my-photo.jpeg";

function AboutMe({isMobile, refprop}){
    return(
        <div className={`flex w-full h-screen items-end`} ref={refprop}>
            <div className="flex flex-col-reverse w-full justify-center h-[calc(100%-64px)] md:flex-row">
                <div className="flex w-2/3 h-full justify-center items-center max-md:w-full max-md:h-3/5">

                    <div className="flex h-fit w-[75%] p-3 rounded-lg bg-my_gradient_reversed justify-center items-center backdrop-blur-md">
                        <div className="h-[90%] w-[80%]">
                            <div className="flex flex-row text-[20px] font-mono">
                                <p>Hi! My name is <span className="font-bold">Lorenzo</span>.</p>
                            </div>
                            <div className={`${isMobile?"text-[12px]":"text-[15px]"}`}>
                                <div className="flex flex-row gap-4">
                                    <i className={`bi bi-mortarboard ${isMobile?"fs-5":"fs-3"}`}></i>
                                    <p className="font-mono text-justify content-center">I'm a passionate Computer Engineering student, and currently completing my Master in Computer Engineering.</p>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <i className={`bi bi-code-slash ${isMobile?"fs-5":"fs-3"}`}></i>
                                    <p className="font-mono text-justify content-center">I have a strong foundation in software development, algorithms, and system design, with a keen interest in AI and web development.</p>
                                </div>
                                <div className="flex flex-row gap-4">
                                <i className={`bi bi-lightbulb ${isMobile?"fs-5":"fs-3"}`}></i>
                                <p className="font-mono text-justify content-center">I enjoy tackling complex problems, optimizing performance, and building innovative solutions.</p>
                                </div>
                                <div className="flex flex-row gap-4">
                                <i className={`bi bi-graph-up-arrow ${isMobile?"fs-5":"fs-3"}`}></i>
                                <p className="font-mono text-justify content-center">Always eager to learn and grow, I thrive in dynamic environments where I can collaborate and make an impact.</p>
                                </div>
                                <div className="flex flex-row gap-4">
                                <i className={`bi bi-people ${isMobile?"fs-5":"fs-3"}`}></i>
                                <div className="font-mono text-justify content-center">Let’s connect and build something amazing together!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-1/3 h-full items-center justify-center max-md:h-1/5 max-md:w-full">
                    <div className={`flex h-2/5 rounded-full bg-my_gradient_reversed overflow-hidden drop-shadow-md max-md:h-full`}>
                        <img className="h-full w-full object-cover grayscale" src={myPhoto} alt="My Photo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export {AboutMe}