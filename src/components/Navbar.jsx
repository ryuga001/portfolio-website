import React, { useEffect, useState } from 'react'
import { styles } from "../style"
import { Link } from 'react-router-dom'
import { logo, menu, close } from "../assets"
import { navLinks, social_links } from "../constants/constant"
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { SiCodechef, SiCodeforces } from 'react-icons/si'
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <nav
      className={`${styles.paddingX}
    w-full flex items-center py-5 fixed top-0 z-20  ${!scrolled ? 'bg-primary' : 'bg-transparent'}
    transition-all duration-300 ease-in-out`
      }
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }} >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>RAHUL SINGH</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          {/* social profiles icons */}
          <li className='list-none  flex flex-row gap-5 ' >
            <a className='hover:scale-125'><Link to={social_links.linkedin} target='_blank'><FaLinkedinIn /></Link></a>

            <a className='hover:scale-125'><Link to={social_links.github} target='_blank'><FaGithub /></Link></a>

            <a className='hover:scale-125'><Link to={social_links.codeforces} target='_blank'><SiCodeforces /></Link></a>

            <a className='hover:scale-125'><Link to={social_links.codechef} target='_blank'><SiCodechef /></Link></a>
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}



            </ul>
          </div>
        </div>
      </div >

    </nav >
  )
}

export default Navbar