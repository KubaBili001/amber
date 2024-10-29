import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-20 flex justify-center items-center bg-white shadow-md z-[100] relative">
      <div className="w-full flex justify-around items-center font-oswald-l">
        <button
          className="text-[44px] text-grey-5 tracking-wide"
          onClick={() => navigate("/")}
        >
          AMBER.CONCEPT
        </button>
        <nav className="flex gap-4">
          <button
            className={`px-2 py-1 text-[20px]`}
            onClick={() => navigate("/body")}
          >
            BODY
          </button>
          <button
            className={`px-2 py-1 text-[20px] `}
            onClick={() => navigate("/face")}
          >
            FACE
          </button>
          <button
            className={`px-2 py-1 text-[20px]`}
            onClick={() => navigate("/spa")}
          >
            SPA
          </button>
          {/* add sections here */}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;