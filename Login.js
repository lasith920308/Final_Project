import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const { loginUser } = useContext("");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser(formData.username, formData.password);
        if (response.success) {
            navigate("students");
        } else {
            setError(response.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" onChange={handleChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-success">Login</button>
            </form>
        </div>
    );
}

export default Login;
