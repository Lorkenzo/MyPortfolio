import MyLogo from "../assets/my-name-logo.png"
import { useTheme } from "../contexts/ThemeContext"

function Header(){
    const {isDarkMode, toggleTheme} = useTheme()

    return(
        <div className="flex items-center justify-between px-2 fixed h-16 w-full top-0 bg-my_gray z-[999]">
            <div className="flex w-52 h-16 max-md:w-36 bg-my_bg_reversed transition-colors duration-500" 
                style={{
                    maskImage: `url(${MyLogo})`,
                    WebkitMaskImage: `url(${MyLogo})`,
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    maskSize: 'contain',
                    transform: "scale(2)"
                }}>
            </div>
            <div onClick={() => toggleTheme()} className="flex p-1 h-10 w-20 rounded-full bg-my_bg cursor-pointer">
            <div className={`relative flex text-my_bg_reversed justify-center items-center h-8 w-8 bg-my_gradient_opp rounded-full transition-all duration-300 ${isDarkMode ? "translate-x-10" : ""}`}>
                
                <i className={`bi bi-sun-fill absolute transition-all duration-500 ${isDarkMode ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}/>
                <i className={`bi bi-moon-fill absolute transition-all duration-500 ${isDarkMode ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}/>
            </div>
            </div>
        </div>
    )
}

export {Header}