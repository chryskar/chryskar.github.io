import {NavLink} from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <div className="d-flex justify-content-center align-items-center my-5 mx-3">
            <NavLink to={"/home"} className={"custom-nav-link clickable"}>
                <h4 className="mx-3 h4">Home</h4>
            </NavLink>
            <NavLink to={"/experience"} className={"custom-nav-link clickable"}>
                <h4 className="mx-3 h4">Experience</h4>
            </NavLink>
            <NavLink to={"/projects"} className={"custom-nav-link clickable"}>
                <h4 className="mx-3 h4">Projects</h4>
            </NavLink>
            <NavLink to={"/hobbies"} className={"custom-nav-link clickable"}>
                <h4 className="mx-3 h4">Hobbies</h4>
            </NavLink>
        </div>
    )
}

export default Navbar;