import { useNavigate, Link } from "react-router";
import transition from "../../transition";
import { useEffect, useState } from "react";

const AAdmissions = () => {
    const navigate = useNavigate();
    if(!localStorage.getItem('token') || !localStorage.getItem('role') || localStorage.getItem('role')!=='admin'){
        navigate('/');
    }
    const [admissions, setAdmissions] = useState([]);

    useEffect(() => {
        const fetchAdmissions = async () => {
            const response = await fetch("https://api.aspira.rrex.cc/getAdmissions");
            const data = await response.json();
            setAdmissions(data);
        };
        fetchAdmissions();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-orange-peel-50 px-4">
            <h1 className="font-main font-bold text-3xl md:text-6xl text-orange-peel-700">
                Student Admissions 
            </h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-orange-peel-500 text-white">
                            <th className="px-4 py-2">Student Name</th>
                            <th className="px-4 py-2">Registration Number</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Phone Number</th>
                            <th className="px-4 py-2">Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admissions.map(admission => (
                            <tr key={admission[0]}>
                                <td className="border px-4 py-2">{admission[0]}</td>
                                <td className="border px-4 py-2">{admission[1]}</td>
                                <td className="border px-4 py-2">{admission[2]}</td>
                                <td className="border px-4 py-2">{admission[3]}</td>
                                <td className="border px-4 py-2">{admission[4]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Link to="/admin">
                <button className="mt-6 px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md hover:bg-orange-peel-700 transition">
                    Back
                </button>
            </Link>
        </div>
    );
};

export default transition(AAdmissions);
