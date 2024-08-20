import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/items"}>Items</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
        </nav>
    )
};

export default NavBar;
