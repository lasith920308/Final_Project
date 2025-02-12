import React, { useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

function Marks() {

    useEffect(() => {
        fetchMarks();
    }, []);

    const handleUpdateMark = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.put(`marks/${editMark.id}/`);
            setEditMark(null);
        } catch (error) {
            console.error("Error updating mark:", error);
        }
    };

    const handleDeleteMark = async (id) => {
        if (window.confirm("Are you sure you want to delete this mark?")) {
            try {
                await axiosInstance.delete(`marks/${id}/`);
            } catch (error) {
                console.error("Error deleting mark:", error);
            }
        }
    };

    return (
        <div className="container">
            <h2>Marks</h2>

            {/* Marks Table */}
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Student</th>
                        <th>Subject</th>
                        <th>Total Marks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {marks.map((mark) => (
                        <tr key={mark.id}>
                            <td>{mark.id}</td>
                            <td>{mark.student.name}</td>
                            <td>{mark.subject}</td>
                            <td>{mark.total_marks}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleUpdateMark(mark)}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteMark(mark.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Marks;
