import Login from "../components/Login";
import transition from "../../transition";

const FLogin = () => {
    return <Login role="Faculty" redirectPath="/faculty" />;
};

export default transition(FLogin);
