import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav>
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink>Items</NavLink>
            <NavLink to={"/auth"}>Register</NavLink>
            <NavLink>Login</NavLink>
        </nav>
    )
}

export default NavBar;
