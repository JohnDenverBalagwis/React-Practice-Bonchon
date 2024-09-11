import React from "react";
import Frame from "../assets/images/img-frame-red.svg";
import ChickenImg from "../assets/images/chickenimg.png";
const Story = () => {
  return (
    <section
      className="story h-screen w-full flex justify-center items-center bg-red-600"
      id="story"
    >
      <div className="story-content h-screen w-5/6 bg-red flex items-center space-x-10">
        <div className="story-content w-1/2 h-auto flex flex-col justify-center text-left">
          <span className="text-6xl font-bold text-white font-londrina tracking-wider mb-8 uppercase">
            the story of bonchon&apos;s Gglobal expansion
          </span>
          <p className="story-text mb-8 font-rubik text-white text-base">
            Discover the delicious journey of BonChon! From its humble
            beginnings to worldwide success, founder Jinduk Seh&apos;s passion
            for Korean comfort food led him to craft the ultimate crispy,
            tender, and flavorful Korean Fried Chicken. Aside from the delicious
            Korean meals, BonChon brings people together to celebrate culture
            and tradition with every delectable bite.
          </p>

          <a
            href=""
            className="button p-4 bg-white text-red-600 font-bold uppercase hover:bg-red-500 hover:text-white font-londrina text-lg w-40 text-center shadow-lg"
          >
            Our Story
          </a>
        </div>
        <figure className="w-1/2 h-auto">
          <div className="chicken w-full h-full  bg-Chicken-image bg-no-repeat bg-cover bg-center rotate-[8deg]">
            <img
              src={Frame}
              alt="image-frame"
              className="w-full h-full object-cover"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Story;
