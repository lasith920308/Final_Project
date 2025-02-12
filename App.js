import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Departments from "./pages/Departments";
import Marks from "./pages/Marks";
import Admissions from "./pages/Admissions";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/students" element={<ProtectedRoute><Students /></ProtectedRoute>} />
                    <Route path="/departments" element={<ProtectedRoute><Departments /></ProtectedRoute>} />
                    <Route path="/marks" element={<ProtectedRoute><Marks /></ProtectedRoute>} />
                    <Route path="/admissions" element={<ProtectedRoute><Admissions /></ProtectedRoute>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
