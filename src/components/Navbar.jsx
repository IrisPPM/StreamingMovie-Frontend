import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			
<nav className="bg-black border-gray-200 dark:bg-gray-900 p-0">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <div className="flex items-center">
            <a href="tel:5541251234" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
    </div>
</nav>
<nav className="bg-black dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <Link to="/" className="text-white dark:text-white hover:underline"> <img className="w-28" src="https://logodownload.org/wp-content/uploads/2021/03/paramount-plus-logo.png" alt="" /></Link>
                </li>
                <li>
                    <span className="text-white dark:text-white hover:underline" aria-current="page">SERIES</span>
                </li>
                <li>
                    <span className="text-white dark:text-white hover:underline">PELICULAS</span>
                </li>
                <li>
                    <span className="text-white dark:text-white hover:underline">MARCAS</span>
                </li>
                <li>
                    <span className="text-white dark:text-white hover:underline">DEPORTES</span>
                </li>
                <li>
                    <Link to="/login" className="text-white dark:text-white hover:underline">Login</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

		</>
	);
};

export default Navbar;