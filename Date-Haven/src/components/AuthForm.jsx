import { useState } from "react";


function AuthForm() {
    const initialForm = {
        username: "",
        password: "",
    };

    const [form, updateForm] = useState(initialForm);

    const { username, password } = form;

    return (
        <div>
            <h2>Register for Date Haven</h2>
            <form>
                <label>
                    Username
                    <input name="username" value={username} />
                </label>
                <label>
                    Password
                    <input name="password" value={password} />
                </label>
            </form>
        </div>
    )
}

export default AuthForm;