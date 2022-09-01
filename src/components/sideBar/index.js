import ComponentFooter from "../footer";
import { SideBarContainer, SideBarContent } from "./style"
import { Link, useLocation } from "react-router-dom"

const ComponentSideBar = ()=>{
    const location = useLocation()

    return(
        <SideBarContainer>
            <SideBarContent>
                <Link to="#" className={location.pathname === "#" ? "select" : null}> Lorem Ipsum </Link>
                <Link to="/" className={location.pathname === "/" ? "select" : null}> Utilizador </Link>
                <Link to="#" className={location.pathname === "#" ? "select" : null}> Quantum Solumn </Link>
                <Link to="#" className={location.pathname === "#" ? "select" : null}> Marcus Tremer </Link>
            </SideBarContent>

            <ComponentFooter/>
        </SideBarContainer>
    )
}

export default ComponentSideBar;