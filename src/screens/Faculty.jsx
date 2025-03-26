const Faculty = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Faculty Dashboard</h2>
          <p className="text-gray-600">Manage courses, attendance, and salary details.</p>
  
          <div className="mt-6 space-y-4">
            <button className="w-full py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
              View Assigned Courses
            </button>
            <button className="w-full py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition">
              Manage Attendance
            </button>
            <button className="w-full py-3 bg-orange-500 text-white rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
              Salary Status
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Faculty;
  