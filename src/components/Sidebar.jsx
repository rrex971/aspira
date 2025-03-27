import { Link } from "react-router";

const Sidebar = (props) => {
    return (
        <aside className="w-64 bg-orange-peel-300 text-white flex flex-col p-6 shadow-md">
                        <h2 className="text-xl font-semibold mb-6 text-center">{props.category} Portal</h2>
                        <nav className="space-y-3">
                            {props.items.map((item) => (
                            <Link to={item.to}>
                                <button className="w-full text-left px-4 py-3 rounded-md bg-orange-peel-400 hover:bg-orange-500 transition-transform duration-500 ease-out hover:scale-105">
                                    {item.label}
                                </button>
                            </Link>
                            ))}
                            {/*
                            <Link to="/facgrades">
                                <button className="w-full text-left px-4 py-3 rounded-md bg-orange-peel-400 hover:bg-orange-500 transition-transform duration-500 ease-out hover:scale-105">
                                    Assign Grades
                                </button>
                            </Link>*/}
                        </nav>
        </aside>
    );
};

export default Sidebar;