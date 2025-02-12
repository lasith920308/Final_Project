import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function Admissions() {

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axiosInstance.get("students/");
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    const handleUpdateAdmission = async (e) => {
        e.preventDefault();
        try {
            setEditAdmission(null);
        } catch (error) {
            console.error("Error updating admission:", error);
        }
    };

    const handleDeleteAdmission = async (id) => {
        if (window.confirm("Are you sure you want to delete this admission?")) {
            try {
                await axiosInstance.delete(`admissions/${id}/`);
                fetchAdmissions();
            } catch (error) {
                console.error("Error deleting admission:", error);
            }
        }
    };

    return (
        <div className="container">
            <h2>Admissions</h2>

            {/* Admissions Table */}
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Student</th>
                        <th>Date of Admission</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {admissions.map((admission) => (
                        <tr key={admission.id}>
                            <td>{admission.id}</td>
                            <td>{admission.student.name}</td>
                            <td>{admission.date_of_admission}</td>
                            <td>{admission.status}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleUpdateAdmission(admission)}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteAdmission(admission.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admissions;
