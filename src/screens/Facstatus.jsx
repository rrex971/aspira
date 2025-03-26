import { useNavigate } from "react-router-dom";

const Facstatus = () => {
  const navigate = useNavigate(); // ✅ Use React Router's navigate

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Salary Status</h2>
        <p className="text-gray-600 mb-6">Check your salary details below.</p>

        <div className="bg-gray-200 p-4 rounded-lg text-left">
          <p className="text-lg font-semibold text-gray-700">Basic Salary: ₹50,000</p>
          <p className="text-lg font-semibold text-gray-700">Deductions: ₹5,000</p>
          <p className="text-lg font-semibold text-gray-700">Net Salary: ₹45,000</p>
        </div>

        {/* ✅ Fixed Back Button using navigate */}
        <button 
          onClick={() => navigate(-1)} 
          className="mt-6 w-full py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Facstatus;
