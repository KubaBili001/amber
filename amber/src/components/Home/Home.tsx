import React from "react";
import "./Home.css";
import AcidImage from "../../assets/images/home/acid.jpeg";
import OilImage from "../../assets/images/home/oil.jpeg";
import PowderImage from "../../assets/images/home/powder.png";
import InfoSection from "./InfoSection";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-home-bg h-[60vh] bg-fill bg-center" />
      <div className="bg-white w-full flex flex-col items-center pt-14 gap-14 shadow-md">
        <div className="flex flex-col items-center">
          <h1 className="font-oswald-l text-[35px] tracking-wide">
            AMBER CONCERTRATES
          </h1>
          <h2 className="font-oswald-l text-[18px] tracking-wide">
            Revitalize Your Skin with the Power of Amber
          </h2>
        </div>
        <InfoSection
          image={AcidImage}
          title="Succinic acid"
          content="Succinic acid cleanses tissues from toxins, smoothes wrinkles, reduces the severity of pigmentation, maintains water-salt balance, improves capillary blood flow, improves elasticity, treats acne, eliminates bags under the eyes and additionally nourishes tissues. It promotes rapid absorption of nutrients and the release of energy needed for biochemical processes."
        />
        <InfoSection
          image={OilImage}
          title="Amber oil"
          content="Amber oil has an immunostimulating effect, actively rejuvenates, regenerates skin cells, and also has antibacterial properties."
        />
        <InfoSection
          image={PowderImage}
          title="Amber powder"
          content="Amber powder helps remove microcracks in the epidermis, smoothes out skin irregularities, and stimulates regenerative processes. Effectively removes sebum, sweat gland secretions, and makeup residue."
        />
      </div>
    </>
  );
};

export default Home;
