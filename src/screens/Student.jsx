import { Link } from "react-router";

const Student = () => {
    return (
        <div className="flex flex-col items-center mt-8">
            <nav className="space-y-4">
                <Link to="/student-attendance">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                        Attendance
                    </button>
                </Link>
                <Link to="/student-grades">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                        Grades
                    </button>
                </Link>
                <Link to="/timetable">
                    <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition">
                        Timetable
                    </button>
                </Link>
                <Link to="/courses">
                    <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
                        Courses
                    </button>
                </Link>
            </nav>
        </div>
    );
};

export default Student;
