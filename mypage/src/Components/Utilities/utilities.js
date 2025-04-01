import HtmlLogo from "../../assets/html5.png"
import CssLogo from "../../assets/css3.png"
import JsLogo from "../../assets/js.png"
import TsLogo from "../../assets/ts.png"
import ReactLogo from "../../assets/react.png"
import PythonLogo from "../../assets/python.png"
import SqlLogo from "../../assets/sql.png"
import CLogo from "../../assets/c.png"
import JavaLogo from "../../assets/java.png"
import OfficeLogo from "../../assets/office.png"
import RustLogo from "../../assets/rust.png"
import AsmLogo from "../../assets/asm.png"
import BootstrapLogo from "../../assets/bootstrap.png"
import SqliteLogo from "../../assets/sqlite.png"
import TailwindLogo from "../../assets/tailwind.png"

export default function getLogo(skill){
    if (skill === "html5") return HtmlLogo
    else if (skill === "css3") return CssLogo
    else if (skill === "js") return JsLogo
    else if (skill === "react") return ReactLogo
    else if (skill === "ts") return TsLogo
    else if (skill === "python") return PythonLogo
    else if (skill === "sql") return SqlLogo
    else if (skill === "c") return CLogo
    else if (skill === "java") return JavaLogo
    else if (skill === "office") return OfficeLogo
    else if (skill == "rust") return RustLogo
    else if (skill == "asm") return AsmLogo
    else if (skill == "bootstrap") return BootstrapLogo
    else if (skill == "sqlite") return SqliteLogo
    else if (skill == "tailwind") return TailwindLogo
}