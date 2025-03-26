import { Link } from "react-router";

const Faculty = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-orange-peel-300 text-white flex flex-col p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-6 text-center">Faculty Portal</h2>
                <nav className="space-y-3">
                    <Link to="/Facstatus">
                        <button className="w-full text-left px-4 py-3 rounded-md bg-orange-peel-400 hover:bg-orange-500 transition-transform duration-500 ease-out hover:scale-105">
                            Salary Status
                        </button>
                    </Link>
                    <Link to="/facattendance">
                        <button className="w-full text-left px-4 py-3 rounded-md bg-orange-peel-400 hover:bg-orange-500 transition-transform duration-500 ease-out hover:scale-105">
                            Mark Attendance
                        </button>
                    </Link>
                    <Link to="/facgrades">
                        <button className="w-full text-left px-4 py-3 rounded-md bg-orange-peel-400 hover:bg-orange-500 transition-transform duration-500 ease-out hover:scale-105">
                            Assign Grades
                        </button>
                    </Link>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-10">
                <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Faculty Dashboard</h1>
                <p className="mt-3 text-lg text-gray-600">Select an option from the sidebar.</p>
            </main>
        </div>
    );
};

export default Faculty;
