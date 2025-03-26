import { Link } from "react-router"; 

const Profiles = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-orange-peel-50 px-4">
            <h1 className="font-main font-bold text-3xl md:text-6xl text-orange-peel-700 mt-8 md:mt-16">
                View Student Profiles 
            </h1>
            <Link to="/Admin">
                <button className="mt-6 px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md hover:bg-orange-peel-700 transition">
                    Back
                </button>
            </Link>
        </div>
    );
};

export default Profiles;