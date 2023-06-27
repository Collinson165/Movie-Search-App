import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white py-4 px-6 sm:px-10">
            <div className="flex items-center justify-between">
                <div className="text-xl font-bold">Movie App</div>
                <div className="flex space-x-4">
                    <a href="/" className="hover:text-gray-300">Home</a>
                    <Link to="/favorites" className="hover:text-gray-300">Favorites</Link>
                    <Link to="/trailers" className="hover:text-gray-300">Trailers</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;