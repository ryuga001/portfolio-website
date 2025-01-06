import React, { useEffect, useState } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks, social_links } from "../constants/constant";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { SiCodechef, SiCodeforces } from "react-icons/si";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${!scrolled ? "bg-primary" : "bg-transparent"
        } transition-all duration-300 ease-in-out`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            RAHUL SINGH
          </p>
        </Link>


        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className="text-secondary hover:text-white">
              <a href={`#${link.id}`} className="transition-all duration-300">
                {link.title}
              </a>
            </li>
          ))}

          <li className="flex flex-row gap-5">
            <a
              href={social_links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={social_links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
            >
              <FaGithub />
            </a>
            <a
              href={social_links.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
            >
              <SiCodeforces />
            </a>
            <a
              href={social_links.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
            >
              <SiCodechef />
            </a>
          </li>
        </ul>


        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${toggle ? "flex" : "hidden"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="transition-all duration-300">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
