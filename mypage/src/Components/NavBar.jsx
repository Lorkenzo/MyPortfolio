import useActiveSection from "../hooks/useActiveSection";

function Navbar() {
  const buttons = {
    "house-fill": "Home",
    "person-fill": "About Me",
    "rocket": "Skills",
    "folder-fill": "Projects",
    "envelope-fill": "Contacts"
  };

  const activeSection = useActiveSection(Object.values(buttons));

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex fixed h-screen w-40 md:-translate-x-20 max-md:translate-y-20 items-center justify-center z-[1000] left-0 max-md:bottom-0 max-md:h-40 max-md:w-full">
      <div className="flex flex-col w-40 h-3/4 rounded-full bg-my_gradient justify-around max-md:flex-row max-md:w-full max-md:bg-my_gradient_opp">
        <div className="flex flex-col md:w-fit justify-around max-md:justify-between h-3/4 overflow-visible md:translate-x-32 max-md:flex-row max-md:-translate-y-4 max-md:w-3/4">
          {Object.keys(buttons).map((button_name, i) => {
            const sectionId = buttons[button_name];
            const isActive = activeSection === sectionId;

            return (
              <div
                key={i}
                className={`flex relative w-12 h-12 rounded-full bg-my_bg items-center justify-center overflow-hidden group hover:w-36 max-md:hover:w-32 transition-all duration-300 ${isActive ? "md:translate-x-1 max-md:-translate-y-1" : ""}`}
              >
                <button
                  onClick={() => handleScroll(sectionId)}
                  className={`flex text-my_bg_reversed no-underline flex-row absolute inset-1 p-2 items-center rounded-full bg-my_gradient_reversed cursor-pointer transition-colors duration-500 ${
                    isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <i className={`bi bi-${button_name} fs-4 mr-3 max-md:mr-2`} />
                  <span className={`font-semibold text-nowrap transition-opacity duration-300 hidden opacity-0 group-hover:opacity-100 group-hover:inline`}>
                    {buttons[button_name]}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Navbar };
