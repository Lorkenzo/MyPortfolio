import myLogo from "../assets/my-name-logo.png"

function Header(){
    return(
        <div className="flex items-center fixed h-16 w-full top-0 bg-my_gray z-[999]">
            <div className="flex w-44 p-3 max-md:w-36">
                <img src={myLogo} className="object-contain"></img>
            </div>
        </div>
    )
}

export {Header}