import React, { useEffect } from "react";

function Students() {

    useEffect(() => {
        fetchDepartments();
    }, []);

    const handleUpdateStudent = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.put(`students/${editStudent.id}/`);
            setEditStudent(null);
        } catch (error) {
            console.error("Error updating student:", error);
        }
    };

    const handleDeleteStudent = async (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            try {
                await axiosInstance.delete(`students/${id}/`);
                fetchStudents();
            } catch (error) {
                console.error("Error deleting student:", error);
            }
        }
    };

    return (
        <div className="container">
            <h2>Students</h2>

            {/* Student Table */}
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.department.name}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleUpdateStudent(student)}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Students;
