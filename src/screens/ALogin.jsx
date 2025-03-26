import transition from "../../transition";
import Login from "../components/Login";

const ALogin = () => {
    return <Login role="Admin" redirectPath="/admin" />;
};
export default transition(ALogin);
