import { Link } from "react-router"; 

const Student = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-orange-peel-300 text-white flex flex-col p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-6 text-center">Student Portal</h2>
                <nav className="space-y-3">
                    <Link to="/Sattendance">
                        <button className="w-full text-left px-4 py-3 bg-orange-peel-400 hover:bg-orange-400 transition-transform duration-500 ease-out hover:scale-105">
                            Attendance
                        </button>
                    </Link>
                    <Link to="/Sgrades">
                        <button className="w-full text-left px-4 py-3 bg-orange-peel-400 hover:bg-orange-400 transition-transform duration-500 ease-out hover:scale-105">
                             Grades
                        </button>
                    </Link>
                    <Link to="/Stimetable">
                        <button className="w-full text-left px-4 py-3 bg-orange-peel-400 hover:bg-orange-400 transition-transform duration-500 ease-out hover:scale-105">
                             Timetable
                        </button>
                    </Link>
                    <Link to="/Scourses">
                        <button className="w-full text-left px-4 py-3 bg-orange-peel-400 hover:bg-orange-400 transition-transform duration-500 ease-out hover:scale-105">
                             Courses
                        </button>
                    </Link>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-10">
                <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Dashboard</h1>
                <p className="mt-3 text-lg text-gray-600">Select an option from the sidebar.</p>
            </main>
        </div>
    );
};

export default Student;
