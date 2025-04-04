import React from "react";
import "../styles/Nav.css"

const Nav = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:text-gray-200">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/shoes" className="hover:text-gray-200">
                            Shoes
                        </a>
                    </li>
                    <li>
                        <a href="/Abour" className="hover:text-gray-200">
                            About us
                        </a>
                    </li>
                    <li>
                        <a href="/Contact" className="hover:text-gray-200">
                            Contact us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;