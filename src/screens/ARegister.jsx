import { useNavigate, Link } from "react-router";
import Register from "../components/Register";

const ARegister = (props) => {
    const navigate = useNavigate();
    if (
        !localStorage.getItem("token") ||
        !localStorage.getItem("role") ||
        localStorage.getItem("role") !== "admin"
    ) {
        navigate("/");
    }
    return (
        <div className="bg-orange-peel-50 flex-col items-">
            <Register category={props.category} return="/admin"/>
        </div>
    );
};

export default ARegister;
