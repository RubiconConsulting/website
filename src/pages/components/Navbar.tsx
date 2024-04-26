import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom";
import Button from "../../ui/Button";
import { logo } from "../../assets";

const Navbar = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center font-medium justify-around" >
        <div className="z-20 p-5 md:w-auto w-full flex justify-between">
          <div>
            <img src={logo} className="w-28 h-12 rounded" alt="" />
          </div>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaBars /> : <FaBars />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <a href="#blogs" className="py-7 px-3 inline-block">Blogs</a>
          </li>
          <li>
            <a href="#services" className="py-7 px-3 inline-block">Service</a>
          </li>
          <li>
            <a href="#about"  className="py-7 px-3 inline-block">About</a>
          </li>
        </ul>
        <div className="md:block hidden">
        <a href="#contact"><Button btnText="Contact Us" btnStyle="bg-primary"/></a>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[#f1f1f1] fixed flex flex-col justify-center items-center z-50 w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        onClick={() => setOpen(!open)}
        >
          <div className="absolute top-10 right-10" onClick={() => setOpen(!open)}>
            <FaTimes size={23} />
          </div>
          
          <li>
            <Link to="/" className="py-1 px-3 inline-block text-xl ">
              Home
            </Link>
          </li>
          <li>
            <a href="#blogs" className="py-1 px-3 inline-block text-xl ">Blogs</a>
          </li>
          <li>
            {/* <Link to="/" className="py-1 px-3 inline-block text-xl ">
              Service 
            </Link> */}
            <a href="#services" className="py-1 px-3 inline-block text-xl ">Service</a>
          </li>
          <li>
            <a href="#about"  className="py-1 px-3 inline-block text-xl">About</a>
          </li>
         
          <div className="py-5">
            <a href="#contact"><Button btnText="Contact Us" btnStyle="bg-primary"/></a>
          </div>
        </ul>
      </div>
  )
}

export default Navbar