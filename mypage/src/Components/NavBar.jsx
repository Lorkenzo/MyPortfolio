import { useState, useEffect } from "react"

function Navbar({isMobile,scrollToSection}){
    const button_icons = ["house-fill","person-fill","rocket","folder-fill","envelope-fill"]
    const button_text = {
        "house-fill":"Home",
        "person-fill":"About Me",
        "rocket":"Skills",
        "folder-fill":"Projects",
        "envelope-fill":"Contacts"
    }
    const [isHovered, setIsHovered] = useState("")

    return(
        <div className="fixed top-[40px] left-0 h-100 w-1/12 content-center justify-items-center  z-[1000] ">
            <div className="flex flex-col w-[35%] h-2/3 rounded-full bg-my_gradient justify-content-around max-md:w-[60%] drop-shadow-sm">
                {
                    button_icons.map((button_name)=>
                        {
                        return button_name !== isHovered?
                        <div  onMouseEnter={()=>setIsHovered(button_name)} onMouseLeave={()=>setIsHovered("")} className="mx-[50%] w-[100%] h-[9.090909%] rounded-full bg-white content-center justify-items-center">
                            <div className="flex w-[90%] h-[90%] rounded-full bg-my_gradient_reversed justify-center">
                                <i className={`bi bi-${button_name} ${isMobile?"fs-5":"fs-4"}`}></i>
                            </div>
                        </div>:
                        <div onMouseEnter={()=>setIsHovered(button_name)} onMouseLeave={()=>setIsHovered("")} className="mx-[50%] w-[300%] h-[9.090909%] rounded-full bg-white content-center justify-items-center max-md:w-[200%]">
                        <button className={`flex w-[90%] h-[90%] rounded-full bg-my_gradient_reversed mx-auto justify-center content-center`} onClick={()=>scrollToSection(button_text[button_name])}>
                            <i className={`bi bi-${button_name} ${isMobile?"fs-5":"fs-4 ml-auto"}`}></i>
                            {!isMobile &&<p className="my-auto mx-auto">{button_text[button_name]}</p>}
                        </button>
                        </div>
                        }
                    )
                }
                
            </div>
        </div>
    )
}

export {Navbar}