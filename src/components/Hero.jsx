import React from "react";

const Hero = () => {
  return (
    <section className="hero h-screen w-full flex flex-col justify-center items-center bg-hero-image bg-no-repeat bg-cover bg-top ">
      <div className="backdrop-brightness-50 w-full h-screen flex justify-center items-center">
        <div className="hero-text flex flex-col text-center mt-28 w-5/6">
          <span className="text-9xl font-medium text-white uppercase font-londrina tracking-wide">
            delicious
          </span>
          <span className="text-9xl font-medium text-white uppercase font-londrina tracking-wide">
            korean fried ...
          </span>
          <span className="text-xl font-normal text-white font-rubik mt-5">
            Bite into the meat & skin and savor the flavor & crisp
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
