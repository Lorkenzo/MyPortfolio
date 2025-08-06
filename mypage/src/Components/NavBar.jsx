function Navbar(){

    const buttons = {
        "house-fill":"Home",
        "person-fill":"About Me",
        "rocket":"Skills",
        "folder-fill":"Projects",
        "envelope-fill":"Contacts"
    }

    return(
        <div className="flex fixed h-screen w-40 md:-translate-x-20 max-md:translate-y-20 items-center justify-center z-[1000] left-0 max-md:bottom-0 max-md:h-40 max-md:w-full">
            <div className="flex flex-col w-40 h-3/4 rounded-full bg-my_gradient justify-around max-md:flex-row max-md:w-full max-md:bg-my_gradient_opp">
                <div className="flex flex-col justify-around max-md:justify-between h-3/4 overflow-hidden md:translate-x-32 max-md:flex-row max-md:-translate-y-4 max-md:w-3/4">
                {
                    Object.keys(buttons).map((button_name,i)=>
                        <div key={i} className="flex relative w-12 h-12 rounded-full bg-my_bg items-center justify-center overflow-hidden group hover:w-36 max-md:hover:w-32 transition-all duration-300">
                            <a href={`#${buttons[button_name]}`}
                            
                            className="flex text-my_bg_reversed no-underline flex-row absolute inset-1 p-2 items-center rounded-full bg-my_gradient_reversed cursor-pointer group transition-colors duration-500">
                                <i className={`bi bi-${button_name} fs-4 mr-3 max-md:mr-2`}></i>
                                <span className="font-semibold hidden text-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:inline">{buttons[button_name]}</span>
                            </a>
                        </div>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export {Navbar}