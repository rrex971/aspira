import { PiStudentFill, PiChalkboardTeacherFill } from "react-icons/pi"
import { RiAdminFill } from "react-icons/ri";

const Home = () => {
    return (
    <div className="flex-col items-center">
        <div className="font-bold text-6xl flex justify-center mt-16">Welcome to Aspira!</div>
        <div className="font-medium text-2xl flex justify-center mt-4">A digital platform that provides Students, Faculty and Administrators supporting efficient and easy access and management.</div>
        <div className="flex font-main justify-evenly items-center mb-64 mt-16 h-fit">
                <div className="app-title flex flex-col items-center font-bold text-3xl bg-orange-peel-200 p-32 rounded-4xl">
                    <PiStudentFill size={96}/>
                    <div>Student Login</div>
                </div>
                <div className="app-title flex flex-col items-center font-bold text-3xl bg-orange-peel-200 p-32 rounded-4xl">
                    <PiChalkboardTeacherFill size={96}/>
                    <div>Faculty Login</div>
                </div>
                <div className="app-title flex flex-col items-center font-bold text-3xl bg-orange-peel-200 p-32 rounded-4xl">
                    <RiAdminFill size={96}/>
                    <div>Admin Login</div>
                </div>
        </div>
    </div>
    )
}

export default Home;