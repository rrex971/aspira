import { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ role, redirectPath }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username.trim() === "" || password.trim() === "") {
            setError("Both fields are required!");
            return;
        }

        navigate(redirectPath);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-96 bg-white p-8 rounded-2xl shadow-xl text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{role} Login</h2>
                
                {error && <p className="text-red-500">{error}</p>}
                
                <div className="mt-4">
                    <label className="block text-gray-700 font-semibold">Username</label>
                    <input 
                        type="text" 
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                
                <div className="mt-4">
                    <label className="block text-gray-700 font-semibold">Password</label>
                    <input 
                        type="password" 
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button 
                    className="w-full mt-6 py-3 bg-orange-400 text-white rounded-lg text-lg font-semibold hover:bg-orange-500 transition"
                    onClick={handleLogin}
                >
                    Log In
                </button>
            </div>
        </div>
    );
};

export default Login;
