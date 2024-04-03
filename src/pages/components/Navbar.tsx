import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom";
import Button from "../../ui/Button";
import { logo } from "../../assets";

const Navbar = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center font-medium justify-around">
        <div className="z-20 p-5 md:w-auto w-full flex justify-between">
          <div>
            <img src={logo} className="w-28 h-12 rounded" alt="" />
          </div>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/about" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/service" className="py-7 px-3 inline-block">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/service" className="py-7 px-3 inline-block">
              Service
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button btnText="Contact Us" btnStyle="bg-primary"/>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[#f1f1f1] dark:bg-[#1f2937] fixed z-10 w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-1 px-3 inline-block text-xl ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-1 px-3 inline-block">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/service" className="py-1 px-3 inline-block">
              Service
            </Link>
          </li>
          <li>
            <Link to="/stocks" className="py-1 px-3 inline-block">
               Stocks
            </Link>
          </li>
          <li>
            <Link to="/forex" className="py-1 px-3 inline-block">
               About
            </Link>
          </li>
         
          <div className="py-5">
             <Button btnText="Contact Us" btnStyle="bg-primary"/>
          </div>
        </ul>
      </div>
  )
}

export default Navbar