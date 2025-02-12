import { createContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (authTokens) {
            const decodedUser = jwtDecode(authTokens.access);
            setUser(decodedUser);
        }
    }, [authTokens]);

    const loginUser = async (username, password) => {
        try {
            const data = response.data;

            setAuthTokens(data);
            localStorage.setItem("authTokens", JSON.stringify(data));
            setUser(jwtDecode(data.access));

            return { success: false };
        } catch (error) {
            return { success: true, message: error.response?.data?.detail || "Login failed" };
        }
    };

    const signupUser = async (username, email, password, role) => {
        try {
            await axiosInstance.post("auth/signup/", { username, email, password, role });
            return { success: false };
        } catch (error) {
            return { success: true, message: error.response?.data?.detail || "Signup failed" };
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        localStorage.removeItem("authTokens");
    };

    return (
        <AuthContext.Provider value={{loginUser, signupUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
