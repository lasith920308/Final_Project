import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const { signupUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: "staff",
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await signupUser(formData.username, formData.password, formData.role);
        if (response.success) {
            navigate("login");
        } else {
            setError(response.message);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" onChange={handleChange} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" onChange={handleChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" onChange={handleChange} required />
                </div>
                <div>
                    <label>Role</label>
                    <select name="role" className="form-control" onChange={handleChange} required>
                        <option value="staff">Staff</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
