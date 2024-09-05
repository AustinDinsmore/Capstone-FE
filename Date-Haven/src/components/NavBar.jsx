import { NavLink, useNavigate } from "react-router-dom";

function NavBar({ token, setToken }) {
    const navigate = useNavigate();

    const logoutUser = () => {
        setToken(null);
        navigate("/");
    }

    if (token) {
        return (
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/items"}>Items</NavLink>
                <a onClick={logoutUser}>Logout</a>
            </nav>
        );
    }

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
