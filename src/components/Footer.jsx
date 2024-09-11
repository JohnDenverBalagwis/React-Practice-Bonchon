import React from "react";

const Footer = () => {
  return (
    <footer className="footer h-60 w-full bg-red-600 text-white flex justify-center items-center">
      <div className="row w-5/6 h-full flex items-center  gap-12">
        <div className="left-column w-1/2">
          <h1 className="text-3xl text-white font-bold font-londrina uppercase mb-8 tracking-wider">
            get fresh and hot news straight to your inbox
          </h1>
          <div className="wrapper flex p-2 bg-white w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email address"
              className="p-4 flex-grow font-rubik text-base capitalize outline-none text-black "
            />
            <button className="button uppercase font-bold font-londrina px-4  py-2 text-center bg-red-600 hover:bg-red-500 text-white hover:bg">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
