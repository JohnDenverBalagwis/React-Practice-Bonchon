import React from "react";
import Food1 from "../assets/images/Korean Feast.jpg";
import Food2 from "../assets/images/Chicken and Seafood Rack.jpg";
import Food3 from "../assets/images/Platters.jpg";
import Food4 from "../assets/images/Korean Fried Chicken.jpg";
import Food5 from "../assets/images/Beef.jpg";
import Food6 from "../assets/images/Seafood.jpg";
import Food7 from "../assets/images/Korean Rice Bowl.jpg";
import Food8 from "../assets/images/Sandwiches.jpg";

const foods = [
  {
    name: "Korean Feast",
    quantity: "2 Menu",
    image: Food1,
  },
  {
    name: "Chicken and Seafood Rack",
    quantity: "2 Menu",
    image: Food2,
  },
  {
    name: "Platters.jpg",
    quantity: "2 Menu",
    image: Food3,
  },

  {
    name: "Korean Fried Chicken",
    quantity: "2 Menu",
    image: Food4,
  },
  {
    name: "Beef",
    quantity: "2 Menu",
    image: Food5,
  },
  {
    name: "Seafood",
    quantity: "2 Menu",
    image: Food6,
  },
  {
    name: "Korean Rice Bowl",
    quantity: "2 Menu",
    image: Food7,
  },
  {
    name: "Sandwiches",
    quantity: "2 Menu",
    image: Food8,
  },
];

const Dishes = () => {
  return (
    <section className="foods h-full w-full flex justify-center items-center bg-white">
      <div className="dishes-content h-full w-5/6 bg-red flex items-center flex-col">
        <div className="dishes-text w-1/2  flex flex-col items-center justify-center mt-12 text-center">
          <h1 className="text-6xl font-bold text-black uppercase font-londrina tracking-wider">
            <span className="text-red-600">Dive</span>&nbsp;into your&nbsp;
            <span className="text-red-600">favorite</span>&nbsp;korean dishes
          </h1>
          <p className="text-black text-base text-bold font-rubik mt-6">
            Satisfy your cravings with BonCho&apos;s irresistibly delicious menu
          </p>
        </div>

        <div className="dishes-container w-full h-full mt-12 grid grid-cols-2 gap-4 my-6">
          {foods.map((food, index) => (
            <div
              key={index}
              className="food-card rounded-lg bg-white relative overflow-hidden h-96 w-full flex items-center justify-center shadow-lg"
            >
              <img
                src={food.image}
                alt={`food-picture-${index}`}
                className="food-image w-full h-full object-cover cursor-pointer transform hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="food-info absolute bottom-4 left-4 flex flex-col">
                <span className="font-londrina text-white font-bold text-2xl uppercase">
                  {food.name}
                </span>
                <span className="font-rubik text-white text-base">
                  {food.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
