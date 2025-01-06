import React from "react";
import { social_links } from "../constants/constant";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="flex flex-col items-center space-y-6">
                    <div className="flex space-x-8 text-3xl">
                        <Link
                            to={social_links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-125 transition-transform duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </Link>

                        <Link
                            to={social_links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-125 transition-transform duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </Link>

                        <Link
                            to={social_links.codeforces}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-125 transition-transform duration-300"
                            aria-label="Codeforces"
                        >
                            <SiCodeforces />
                        </Link>

                        <Link
                            to={social_links.codechef}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-125 transition-transform duration-300"
                            aria-label="CodeChef"
                        >
                            <SiCodechef />
                        </Link>
                    </div>
                </div>

                <div className="mt-10 text-center text-sm text-gray-400">
                    <p>&copy; 2025 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
