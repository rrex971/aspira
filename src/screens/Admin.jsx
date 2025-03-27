import { Link, useNavigate } from "react-router";
import transition from "../../transition";
import Sidebar from "../components/Sidebar";
import Register from "../components/Register";

const Admin = () => {
  const navigate = useNavigate();
  if(!localStorage.getItem('token') || !localStorage.getItem('role') || localStorage.getItem('role')!=='admin'){
    navigate('/');
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar category="Admin" items={[
        {
          to: "/admin/admissions",
          label: "Manage Admissions"
        }, {
          to: "/admin/facultyrecords",
          label: "Manage Faculty Records"
        }, {
          to: "/admin/studentprofiles",
          label: "Manage Student Profiles"
        }, {
          to: "/admin/academichistory",
          label: "Manage Academic History"
        }, {
          to: "/admin/registerstudent",
          label: "Register New Student"
        }, {
          to: "/admin/registerfaculty",
          label: "Register New Faculty"
        }
      ]}/>

      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to the Admin Dashboard</h1>
        <p className="mt-3 text-lg text-gray-600">Select an option from the sidebar.</p>
      </main>
    </div>
  );
};

export default transition(Admin);

