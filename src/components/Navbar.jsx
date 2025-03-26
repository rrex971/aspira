const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
            {/* Left: ASPIRA */}
            <p className="text-xl font-bold font-main">ASPIRA</p>

            {/* Right: Login */}
            <p className="text-sm cursor-pointer hover:underline font-main">Login</p>
        </div>
    );
};

export default Navbar;