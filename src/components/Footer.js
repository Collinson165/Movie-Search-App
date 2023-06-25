const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full sm:w-auto">
                        <p className="text-sm text-gray-300">
                            &copy; {new Date().getFullYear()} Movie Search App. All rights reserved.
                        </p>
                    </div>
                    <div className="w-full sm:w-auto mt-4 sm:mt-0">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="https://www.example.com" className="text-sm text-gray-300 hover:text-white transition duration-300">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="https://www.example.com#" className="text-sm text-gray-300 hover:text-white transition duration-300">Terms of Service</a>
                            </li>
                            <li>
                                <a href="https://www.example.com" className="text-sm text-gray-300 hover:text-white transition duration-300">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;