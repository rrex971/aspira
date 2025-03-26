import Login from "../components/Login";
import transition from "../../transition";

const SLogin = () => {
    return <Login role="Student" redirectPath="/student" />;
};

export default transition(SLogin);
