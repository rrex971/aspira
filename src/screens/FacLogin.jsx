import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FacLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username.trim() === "" || password.trim() === "") {
            setError("Both fields are required!");
            return;
        }

        // Redirect to Faculty.jsx after successful login
        navigate("/faculty");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Faculty Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input 
                        type="text" 
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input 
                        type="password" 
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button 
                    className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition"
                    onClick={handleLogin}
                >
                    Log In
                </button>
            </div>
        </div>
    );
};

export default FacLogin;
