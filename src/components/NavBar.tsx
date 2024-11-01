import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="w-full h-20 flex justify-center items-center bg-white z-[100] relative">
      <div className="w-full flex justify-center xs:gap-10 sm:gap-20 items-center font-oswald-l">
        <button
          className="text-[44px] text-grey-5 tracking-wide sm:block xs:hidden"
          onClick={() => navigate("/amber")}
        >
          AMBER.CONCEPT
        </button>
        <div className="flex xs:gap-10 sm:gap-20">
          <nav id="nav-sections" className="flex gap-4">
            <button
              className={`px-2 py-1 text-[20px] hover:text-primary transition xs:block sm:hidden ${pathname === "/amber" && "border-b-[2px] border-primary"}`}
              onClick={() => navigate("/amber")}
            >
              HOME
            </button>
            <button
              className={`px-2 py-1 text-[20px] hover:text-primary transition ${pathname === "/body" && "border-b-[2px] border-primary"}`}
              onClick={() => navigate("/body")}
            >
              BODY
            </button>
            <button
              className={`px-2 py-1 text-[20px] hover:text-primary transition ${pathname === "/face" && "border-b-[2px] border-primary"}`}
              onClick={() => navigate("/face")}
            >
              FACE
            </button>
            <button
              className={`px-2 py-1 text-[20px] hover:text-primary transition ${pathname === "/spa" && "border-b-[2px] border-primary"}`}
              onClick={() => navigate("/spa")}
            >
              SPA
            </button>
            {/* add sections here */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
