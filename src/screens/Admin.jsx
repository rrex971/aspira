import { Link } from "react-router";
import transition from "../../transition";
import Sidebar from "../components/Sidebar";

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar items={[
        {
          to: "/admin/admissions",
          label: "Manage Admissions"
        }, {
          to: "/admin/studentprofiles",
          label: "Manage Student Profiles"
        }, {
          to: "/admin/academichistory",
          label: "Manage Academic History"
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
