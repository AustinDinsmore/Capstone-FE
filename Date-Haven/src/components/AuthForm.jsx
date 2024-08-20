import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRegisterMutation, useLoginMutation } from "../../redux/api";

function AuthForm({ setToken }) {
    const initialForm = {
        username: "",
        password: "",
    };

    const [form, updateForm] = useState(initialForm);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [register] = useRegisterMutation();
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const location = useLocation();
    const isRegister = location.pathname === "/register";

    const handleChange = ({ target }) => {
        setError(null);
        updateForm({ ...form, [target.name]: target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (form.username === "" || form.password === "") {
            setError("Please provide a username and password");
            return;
        }

        const { data, error } = isRegister ? await register(form) : await login(form);

        if (error) {
            setError(error.data.message);
            return;
        }

        setToken(data.token);
        navigate("/");
    };

    const { username, password } = form;

    return (
        <div>
            <h2> {isRegister ? "Register for Date Haven" : "Login to Date Haven"} </h2>
            {error && <p>{error}</p>}
            <form>
                <label>
                    Username
                    <input name="username" value={username} onChange={handleChange} />
                </label>
                <label>
                    Password
                    <input type={!showPassword ? "password" : "text"} name="password" value={password} onChange={handleChange} />
                </label>
                <button onClick={handleSubmit}>
                    {isRegister ? "Register" : "Login"}
                </button>
            </form>
            <button onClick={() => setShowPassword(!showPassword)}>
                Show Password
            </button>
        </div>
    )
};

export default AuthForm;