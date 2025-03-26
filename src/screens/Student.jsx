import { Link } from "react-router";

const Student = () => {
    return (
        <div className="flex flex-col items-center mt-8 font-main">
            <nav className="space-y-4">
                <Link to="/Sattendance">
                    <button className="bg-orange-peel-500 text-white px-6 py-2 rounded-md hover:bg-orange-peel-700 transition">
                        Attendance
                    </button>
                </Link>
                <Link to="/Sgrades">
                    <button className="bg-orange-peel-400 text-white px-6 py-2 rounded-md hover:bg-orange-peel-600 transition">
                        Grades
                    </button>
                </Link>
                <Link to="/Stimetable">
                    <button className="bg-orange-peel-300 text-white px-6 py-2 rounded-md hover:bg-orange-peel-500 transition">
                        Timetable
                    </button>
                </Link>
                <Link to="/Scourses">
                    <button className="bg-orange-peel-700 text-white px-6 py-2 rounded-md hover:bg-orange-peel-900 transition">
                        Courses
                    </button>
                </Link>
            </nav>
        </div>
    );
};

export default Student;
