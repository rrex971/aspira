import transition from "../../transition";
import { useNavigate, Link } from "react-router";
import { useState } from "react";

const FAttendance = () => {
    const navigate = useNavigate();

    if (!localStorage.getItem('token') || !localStorage.getItem('role') || localStorage.getItem('role') !== 'faculty') {
        navigate('/');
    }

    const [cid, setCid] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (cid.trim() === "" || date.trim() === "") {
            alert("Course ID and date are required!");
            return;
        }
        const confirmed = window.confirm(`Are you sure you want to log attendance for course ${cid} on ${date}?`);
        if (!confirmed) {
            return;
        }
        try {
            const response = await fetch(`http://localhost:3123/getCourseStudents?cID=${cid}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setStudents(data);
            } else {
                alert("Error fetching students!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleCheckboxChange = (event) => {
        const studentRegno = event.target.name;
        const attendanceStatus = event.target.checked;
        setAttendance(prevState => ({
            ...prevState,
            [studentRegno]: attendanceStatus
        }));
    };

    const handleLogAttendance = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3123/logAttendance', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cid,
                    date,
                    attendance
                })
            });

            if (response.ok) {
                alert("Attendance logged successfully!");
            } else {
                alert("Error logging attendance!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-orange-peel-50 px-4">
            <h1 className="font-main font-bold text-3xl md:text-6xl text-orange-peel-700 mt-8 md:mt-16">
                Log Attendance
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="my-4">
                    <label className="block text-lg font-semibold text-orange-peel-700" htmlFor="cid">Course ID</label>
                    <input type="text" name="cid" id="cid" value={cid} onChange={event => setCid(event.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-peel-500 focus:border-orange-peel-500" />
                </div>
                <div className="my-4">
                    <label className="block text-lg font-semibold text-orange-peel-700" htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" value={date} onChange={event => setDate(event.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-peel-500 focus:border-orange-peel-500" />
                </div>
                <div className="flex justify-center items-center space-x-3">
                    <button type="submit" className="px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md hover:bg-orange-peel-700 transition">
                        Confirm
                    </button>
                </div>
            </form>
            {students.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-orange-peel-500 text-white">
                                <th className="px-4 py-2">Student Name</th>
                                <th className="px-4 py-2">Registration Number</th>
                                <th className="px-4 py-2">Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => (
                                <tr key={student[0]}>
                                    <td className="border px-4 py-2">{student[1]}</td>
                                    <td className="border px-4 py-2">{student[0]}</td>
                                    <td className="border px-4 py-2">
                                        <input type="checkbox" name={student[0]} onChange={handleCheckboxChange} checked={attendance[student[0]] || false} className="h-4 w-4" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <form onSubmit={handleLogAttendance}>
                        <div className="flex justify-center items-center space-x-3">
                            <button type="submit" className="px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md hover:bg-orange-peel-700 transition">
                                Log Attendance
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <Link to="/faculty">
                <button className="mt-6 px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md hover:bg-orange-peel-700 transition">
                    Back
                </button>
            </Link>
        </div>
    );
};

export default transition(FAttendance);

