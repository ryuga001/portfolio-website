import React from 'react';
import { social_links } from '../constants/constant';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { SiCodechef, SiCodeforces } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="flex flex-col items-center justify-center space-y-6">


                    <div className="flex space-x-8 text-3xl">
                        <a className='hover:scale-125 transition-transform duration-300'>
                            <Link to={social_links.linkedin} target='_blank'>
                                <FaLinkedinIn />
                            </Link>
                        </a>

                        <a className='hover:scale-125 transition-transform duration-300'>
                            <Link to={social_links.github} target='_blank'>
                                <FaGithub />
                            </Link>
                        </a>

                        <a className='hover:scale-125 transition-transform duration-300'>
                            <Link to={social_links.codeforces} target='_blank'>
                                <SiCodeforces />
                            </Link>
                        </a>

                        <a className='hover:scale-125 transition-transform duration-300'>
                            <Link to={social_links.codechef} target='_blank'>
                                <SiCodechef />
                            </Link>
                        </a>
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
