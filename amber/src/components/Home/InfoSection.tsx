import React from "react";

interface InfoSectionProps {
  image: string;
  title: string;
  content: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ image, title, content }) => {
  return (
    <div className=" h-[400px] rounded-lg flex gap-10 items-center">
      <img src={image} alt="Succinic acid" className="w-52 hidden lg:block" />
      <div className="flex flex-col xs:w-[400px] sm:w-[600px] h-full bg-grey-0 rounded-lg p-10">
        <h1 className="border-b-[2px] w-fit border-black font-oswald-l text-[30px] tracking-wide">
          {title.toLocaleUpperCase()}
        </h1>
        <p className="font-roboto-l text-[18px] py-10">{content}</p>
      </div>
    </div>
  );
};

export default InfoSection;
