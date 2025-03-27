import transition from "../../transition";
import { useNavigate, Link } from "react-router"; 
import { useState, useEffect } from "react";

const FAssignment = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [fID, setFID] = useState("");
    useEffect(() => {
        if (!localStorage.getItem('token') || !localStorage.getItem('role') || localStorage.getItem('role') !== 'faculty') {
            navigate('/');
        } else {
            setFID(localStorage.getItem('username'));
        }
    }, []);
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file || !fID.trim()) {
            alert("File and Faculty ID are required!");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('fID', fID);

        try {
            const response = await fetch('http://localhost:8000/uploadFile', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.ok) {
                alert("File uploaded successfully!");
            } else {
                alert("Failed to upload file.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while uploading the file.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-orange-peel-50 px-4">
            <h1 className="font-main font-bold text-3xl md:text-6xl text-orange-peel-700 mt-8 md:mt-16">
                Assignment View
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input type="file" onChange={handleFileChange} className="mb-4" />
                <button type="submit" className="px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md hover:bg-orange-peel-700 transition">
                    Upload
                </button>
            </form>
            <Link to="/faculty">
                <button className="mt-6 px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md hover:bg-orange-peel-700 transition">
                    Back
                </button>
            </Link>
        </div>
    );
};

export default transition(FAssignment);

