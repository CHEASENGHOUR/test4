import { NavLink } from "react-router-dom";
function Nav() {
    return (
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-white">Brand</h1>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:block ml-10">
                            <div className="flex space-x-4">
                                <NavLink to={"/"}>
                                    <p
                                        className="text-white hover:bg-blue-700 px-3 py-2 
                                        rounded-md text-sm font-medium transition duration-200"
                                        >
                                        Home
                                    </p>
                                </NavLink>
                                <NavLink to={"/contact"}>
                                    <p
                                    className="text-white hover:bg-blue-700 px-3 py-2
                                     rounded-md text-sm font-medium transition duration-200"
                                >
                                    Contact
                                </p>
                                </NavLink>

                                <NavLink to={"/users"}>
                                    <p
                                    className="text-white hover:bg-blue-700 px-3 py-2
                                     rounded-md text-sm font-medium transition duration-200"
                                >
                                    User
                                </p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
