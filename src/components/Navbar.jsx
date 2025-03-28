import { Link } from "react-router";
const Navbar = () => {
    return (
    <div className="w-full font-main h-24 md:h-32 flex justify-between items-center px-8 md:px-16 py-4 font-bold bg-orange-peel-400 text-2xl md:text-4xl text-orange-100">
        <Link to="/">
            <div>Aspira</div>
        </Link>
        <div></div>
    </div>
    )
}

export default Navbar;