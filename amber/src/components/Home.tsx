import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-home-bg xs:h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] bg-cover" />
      <div className="bg-white w-full flex flex-col items-center pt-14 gap-14 shadow-md">
        <div className="flex flex-col items-center">
          <h1 className="font-oswald-l text-[35px] tracking-wide">
            AMBER CONCERTRATES
          </h1>
          <h2 className="font-roboto text-[15px]">
            Revitalize Your Skin with the Power of Amber
          </h2>
        </div>
        <div className="w-4/5 h-[400px] bg-grey-0 rouned-lg"></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Home;
