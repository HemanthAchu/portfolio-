import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo2.png";
import close from "../../public/close.png";
import menu from "../../public/menu2.png";
const Navbar = () => {
  const navLinks = [
  
    { id: "about", title: "About" },
    { id: "work", title: "Work" },
    { id: "contact", title: "Contact" },
  ];

  const [active, setActive] = useState(navLinks[0].title); // Assuming the first item is active initially
  const [activeIndex, setActiveIndex] = useState(0); // I
  const [toggle, setToggle] = useState(false);

  // In your JSX

  return (
    <nav className="px-6 sm:px-16 w-full flex items-center py-5 top-0 z-20 ">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="logo" className="h-11 object-contain" />
          <p className="text-white text-[20px] font-bold cursor-pointer flex flex-col">
            Hemanth{" "}
            <span className=" text-gray-400 text-[14px]  cursor-pointer">
              {" "}
              Mern stack
            </span>
          </p>
        </Link>
        {/* <p className="text-purple-600">sdcsv</p> */}
        <ul className="list-none hidden sm:flex flex-row gap-10  w-[320px] h-[50px] bg-gradient-to-l rounded-sm from-gray-600 to-black relative flex justify-center items-center  ">
          <span
            className="absolute top-0 left-0 w-[95px] h-full bg-gradient-to-l rounded-sm from-[#6670F1] rounded-sm transition-all duration-300"
            style={{ left: activeIndex * 113 + "px" }} // Calculate left based on activeIndex
          ></span>

          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-gradient-to-l  from-[#6670F1]"
              } relative block hover:text-white text-[18px] font-medium cursor-pointer py-3 `}
              onClick={() => {
                setActive(nav.title);
                setActiveIndex(index); // Update activeIndex
              }}
            >
              <a className="" href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-b from-gray-500 to-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-2">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-black" : "text-purple-500"
                  }font-poppins font-medium cursor-pointer text-[16px]`}
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
      </div>
    </nav>
  );
};

export default Navbar;
