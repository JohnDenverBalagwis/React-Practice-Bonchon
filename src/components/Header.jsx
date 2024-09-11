import React from "react";
import { Link } from "react-scroll";
import Img from "../assets/images/logo.png";
const Header = () => {
  const menu = [
    {
      title: "Menu",
      url: "hero",
    },
    {
      title: "Our story",
      url: "story",
    },
    {
      title: "Foods",
      url: "foods",
    },

    {
      title: "Franchise",
      url: "franchise",
    },
    {
      title: "Careers",
      url: "careers",
    },
    {
      title: "Contact Us",
      url: "contact",
    },
  ];
  return (
    <header className="header h-28 w-full flex justify-center items-center bg-white  fixed top-0 z-50 ">
      <nav className="nav w-5/6 h-full flex justify-between items-center">
        <div className="logo">
          <img src={Img} alt="Logo" className="w-16 h-16 object-contain " />
        </div>
        <ul className="menu flex justify-center items-center gap-8">
          {menu.map((item) => (
            <Link
              key={item.url}
              className="menu-item uppercase text-lg font-rubik font-medium hover:text-red-600 cursor-pointer"
              to={item.url}
              spy={true}
              smooth={true}
              offset={-60} // Adjust this offset based on your header height
              duration={500}
            >
              {item.title}
            </Link>
          ))}
        </ul>
        <div className="button-container flex justify-center items-center">
          <button className="button p-4 bg-red-600 text-white font-bold uppercase hover:bg-red-500 font-londrina text-lg w-40 text-center">
            order now!
          </button>
        </div>
      </nav>
    </header>

  );
};

export default Header;
