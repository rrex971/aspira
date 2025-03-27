import { Link, useNavigate } from "react-router"; 
import transition from "../../transition";
import { useState, useEffect } from "react";

const SGrades = () => {
    const navigate = useNavigate();
    const [regno, setRegno] = useState("");
    const [courseID, setCourseID] = useState("");
    const [grades, setGrades] = useState({});

    useEffect(() => {
        if (!localStorage.getItem('token') || !localStorage.getItem('role') || localStorage.getItem('role') !== 'student') {
            navigate('/');
        } else {
            setRegno(localStorage.getItem('username'));
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (regno.trim() === "" || courseID.trim() === "") {
            alert("Registration number and course ID are required!");
            return;
        }
        try {
            const response = await fetch(`http://localhost:3123/getGrades?regNo=${regno}&cID=${courseID}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setGrades(data);
            } else {
                alert("Student not found!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-orange-peel-50 px-4">
            <h1 className="font-main font-bold text-3xl md:text-6xl text-orange-peel-700 mt-8 md:mt-16">
                Grades View
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="my-4">
                    <label className="block text-lg font-semibold text-orange-peel-700" htmlFor="courseID">Course ID</label>
                    <input type="text" name="courseID" id="courseID" value={courseID} onChange={event => setCourseID(event.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-peel-500 focus:border-orange-peel-500" />
                </div>
                <div className="flex justify-center items-center space-x-3">
                    <button type="submit" className="px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md hover:bg-orange-peel-700 transition">
                        Search
                    </button>
                    <Link to="/student">
                        <button className="px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md hover:bg-orange-peel-700 transition">
                            Back
                        </button>
                    </Link>
                </div>
            </form>
            {Object.keys(grades).length > 0 && 
                <div className="mt-4 overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-orange-peel-500 text-white">
                                <th className="px-4 py-2">Course ID</th>
                                <th className="px-4 py-2">Course Name</th>
                                <th className="px-4 py-2">Exam ID</th>
                                <th className="px-4 py-2">Exam Name</th>
                                <th className="px-4 py-2">Score</th>
                                <th className="px-4 py-2">Total</th>
                                <th className="px-4 py-2">Weightage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {grades.map((row, index) => (
                                <tr key={index}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="border px-4 py-2">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default transition(SGrades);

