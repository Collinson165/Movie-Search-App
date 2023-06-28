import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // <nav className="bg-gray-900 text-white py-4 px-6 sm:px-10">
        //     <div className="flex items-center justify-between">
        //         <div className="text-xl font-bold">Movie App</div>
        //         <div className="flex space-x-4">
        //             <Link to="/" className="hover:text-gray-300">Home</Link>
        //             <Link to="/favorites" className="hover:text-gray-300">Favorites</Link>
        //             <Link to="/trailers" className="hover:text-gray-300">Trailers</Link>
        //         </div>
        //     </div>
        // </nav>bg

        <nav className="bg-gray-800">
            <div className="max-w 7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img src="assets/favicon.ico" alt="Logo" className="h-8 w-auto" />
                            {/* <span>Movie App</span> */}
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home 
                                </Link>
                                <Link to="/favorites" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Favorites 
                                </Link>
                                <Link to="/trailers" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trailers 
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="md:hidden">
                        <div className="ml-4 flex items-center md:ml-6">
                            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={toggleMenu}>
                                <span className="sr-only">Open Menu</span>
                                <svg
                                 className="h-6 w-6"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                                 aria-hidden="true"
                                 >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link to="/favorites" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Favorites
                        </Link>
                        <Link to="/trailers" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Trailers
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;