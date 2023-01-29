import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			

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
                    <Link to="/" className="text-white dark:text-white hover:underline">Login</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

		</>
	);
};

export default Navbar;