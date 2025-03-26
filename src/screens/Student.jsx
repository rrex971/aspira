import { Link } from "react-router"; 
import transition from "../../transition";
import Sidebar from "../components/Sidebar";
const Student = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar items={[
                {
                    to: "/student/attendance",
                    label: "View Attendance"
                }, {
                    to: "/student/assignments",
                    label: "View Assignments",
                }, {
                    to: "/student/grades",
                    label: "View Grades"
                }, {
                    to: "/student/timetable",
                    label: "View Timetable"
                }
            ]}/>

            <main className="flex-1 p-10">
                <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Dashboard</h1>
                <p className="mt-3 text-lg text-gray-600">Select an option from the sidebar.</p>
            </main>
        </div>
    );
};

export default transition(Student);
