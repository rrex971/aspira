import { PiStudentFill, PiChalkboardTeacherFill } from "react-icons/pi"
import { RiAdminFill } from "react-icons/ri";

const Home = () => {
    return (
    <div className="flex font-main justify-evenly items-center h-screen">
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
    )
}

export default Home;