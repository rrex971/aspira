import { Link, useNavigate } from "react-router"; 
import transition from "../../transition";
import { useState } from "react";

const AStudentProfiles = () => {
    const navigate = useNavigate();
    if(!localStorage.getItem('token') || !localStorage.getItem('role') || localStorage.getItem('role')!=='admin'){
        return navigate('/');
    }
    const [regno, setRegno] = useState("");
    const [student, setStudent] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (regno.trim() === "") {
            alert("Registration number is required!");
            return;
        }
        try {
            const response = await fetch(`http://localhost:3123/getProfile?regNo=${regno}`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
            });
      
            if (response.ok) {
              const data = await response.json();
              setStudent(data);
            } else {
              alert("Student not found!");
            }
          } catch (error) {
            console.error(error);
          }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-orange-peel-50 px-4">
            <h1 className="font-main font-bold text-3xl md:text-6xl text-orange-peel-700 mt-8 md:mt-16">
                View Student Profiles
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="my-4">
                    <label className="block text-lg font-semibold text-orange-peel-700" htmlFor="regno">Registration Number</label>
                    <input type="text" name="regno" id="regno" value={regno} onChange={event => setRegno(event.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-peel-500 focus:border-orange-peel-500" />
                </div>
                <div className="flex justify-center items-center space-x-3">
                    <button type="submit" className="px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md hover:bg-orange-peel-700 transition">
                        Search
                    </button>
                    <Link to="/admin">
                        <button className="px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md hover:bg-orange-peel-700 transition">
                            Back
                        </button>
                    </Link>
                </div>
            </form>
            {Object.keys(student).length > 0 && 
                <div className="mt-4 overflow-x-auto">
                    <table className="table-auto w-full">
                        <tbody>
                            <tr>
                                <td className="bg-orange-peel-500 text-orange-peel-50 font-bold px-4 py-2">Name</td>
                                <td className="px-4 py-2 border-1 border-orange-peel-500">{student[0]}</td>
                            </tr>
                            <tr>
                                <td className="bg-orange-peel-500 text-orange-peel-50 font-bold px-4 py-2">Registration No.</td>
                                <td className="px-4 py-2 border-1 border-orange-peel-500">{student[1]}</td>
                            </tr>
                            <tr>
                                <td className="bg-orange-peel-500 text-orange-peel-50 font-bold px-4 py-2">Email</td>
                                <td className="px-4 py-2 border-1 border-orange-peel-500">{student[2]}</td>
                            </tr>
                            <tr>
                                <td className="bg-orange-peel-500 text-orange-peel-50 font-bold px-4 py-2">Phone No.</td>
                                <td className="px-4 py-2 border-1 border-orange-peel-500">{student[3]}</td>
                            </tr>
                            <tr>
                                <td className="bg-orange-peel-500 text-orange-peel-50 font-bold px-4 py-2">Address</td>
                                <td className="px-4 py-2 border-1 border-orange-peel-500">{student[4]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
            
        </div>
    );
}
export default transition(AStudentProfiles);

