import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink>Items</NavLink>
            <NavLink to={"/auth"}>Register</NavLink>
            <NavLink>Login</NavLink>
        </nav>
    )
}

export default NavBar;
