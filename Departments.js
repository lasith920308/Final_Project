import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function Departments() {

    useEffect(() => {
        fetchDepartments();
    }, []);

    const handleAddDepartment = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post("departments/");
            setNewDepartment({ name: "", description: "" });
        } catch (error) {
            console.error("Error adding department:", error);
        }
    };

    const handleUpdateDepartment = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.put(`departments/${editDepartment.id}/`);
            setEditDepartment(null);
        } catch (error) {
            console.error("Error updating department:", error);
        }
    };

    const handleDeleteDepartment = async (id) => {
        if (window.confirm("Are you sure you want to delete this department?")) {
            try {
                await axiosInstance.delete(`departments/${id}/`);
                fetchDepartments();
            } catch (error) {
                console.error("Error deleting department:", error);
            }
        }
    };

    return (
        <div className="container">
            <h2>Departments</h2>

            {/* Department Table */}
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((department) => (
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.name}</td>
                            <td>{department.description}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleUpdateDepartment(department)}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteDepartment(department.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Departments;
