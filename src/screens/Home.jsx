import { PiStudentFill, PiChalkboardTeacherFill } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router";
import LoginButton from "../components/LoginButton";
import transition from "../../transition";

const Home = () => {
    return (
    <div className="flex-col items-center">
        <div className="font-bold text-3xl md:text-6xl flex justify-center mt-8 md:mt-16">Welcome to Aspira!</div>
        <div className="font-medium text-2xl mx-8 flex justify-center mt-4">A digital platform that provides Students, Faculty and Administrators supporting efficient and easy access and management.</div>
        <div className="flex-col mx-4 flex md:flex-row space-y-8 md:space-y-0 font-main justify-center md:justify-evenly items-center mb-64 mt-16 h-fit">
            <Link to="/student/login">
                <LoginButton icon={<PiStudentFill size={96} />} category="Student"/>
            </Link>
            <Link to="/faculty/login">
                <LoginButton icon={<PiChalkboardTeacherFill size={96}/>} category="Faculty"/>
            </Link>
            <Link to="/admin/login">
                <LoginButton icon={<RiAdminFill size={96}/>} category="Admin"/>
            </Link>
        </div>
    </div>
    );
}

export default transition(Home);
