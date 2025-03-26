import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-orange-peel-300 text-white flex flex-col p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-6 text-center">Admin Dashboard</h2>
        <nav className="space-y-3">
          <Link to="/Admissions">
            <button className="w-full text-left px-4 py-3 bg-orange-peel-400 hover:bg-orange-400 transition-transform duration-500 ease-out hover:scale-105">
              Student Admissions
            </button>
          </Link>
          <Link to="/Profiles">
            <button className="w-full text-left px-4 py-3 bg-orange-peel-400 hover:bg-orange-400 transition-transform duration-500 ease-out hover:scale-105">
              Student Profiles
            </button>
          </Link>
          <Link to="/Academhist">
            <button className="w-full text-left px-4 py-3 bg-orange-peel-400 hover:bg-orange-400 transition-transform duration-500 ease-out hover:scale-105">
              Academic History
            </button>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to the Admin Dashboard</h1>
        <p className="mt-3 text-lg text-gray-600">Select an option from the sidebar.</p>
      </main>
    </div>
  );
};

export default Admin;
