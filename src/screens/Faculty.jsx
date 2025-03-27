import { Link, useNavigate } from "react-router";
import transition from "../../transition";
import Sidebar from "../components/Sidebar";

const Faculty = () => {
    const navigate = useNavigate();
    if(!localStorage.getItem('token') || !localStorage.getItem('role') || localStorage.getItem('role')!=='faculty'){
        navigate('/');
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar category="Faculty" items={[
                {
                    to: "/faculty/attendance",
                    label: "Manage Attendance"
                }, {
                    to: "/faculty/grades",
                    label: "Manage Grades"
                }, {
                    to: "/faculty/assignment",
                    label: "Upload Assignment"
                }
            ]}/>

            <main className="flex-1 p-10">
                <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Faculty Dashboard</h1>
                <p className="mt-3 text-lg text-gray-600">Select an option from the sidebar.</p>
            </main>
        </div>
    );
};

export default transition(Faculty);

