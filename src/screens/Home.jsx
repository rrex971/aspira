import { PiStudentFill, PiChalkboardTeacherFill } from "react-icons/pi"
import { RiAdminFill } from "react-icons/ri";
import LoginButton from "../components/LoginButton";

const Home = () => {
    return (
    <div className="flex-col items-center">
        <div className="font-bold text-6xl flex justify-center mt-16">Welcome to Aspira!</div>
        <div className="font-medium text-2xl flex justify-center mt-4">A digital platform that provides Students, Faculty and Administrators supporting efficient and easy access and management.</div>
        <div className="flex font-main justify-evenly items-center mb-64 mt-16 h-fit">
                <LoginButton icon={<PiStudentFill size="96" />} category="Student"/>
                <LoginButton icon={<PiChalkboardTeacherFill size={96}/>} category="Faculty"/>
                <LoginButton icon={<RiAdminFill size={96}/>} category="Admin"/>
        </div>
    </div>
    )
}

export default Home;