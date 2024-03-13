import React from "react";
import { Link, Outlet } from "react-router-dom";

type Props = {
  setToggleSearch: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar = ({ setToggleSearch }: Props) => {
  return (
    <div>
      <div
        className="fixed w-full h-[60px] bg-gradient-to-r from-[#712bda] to-[#a45deb] shadow-md"
        style={{
          borderBottomLeftRadius: "80% 30%",
          borderBottomRightRadius: "80% 30%",
        }}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <img
            src="/src/assets/menu.svg"
            alt="menu"
            className="cursor-pointer"
          />
          <img
            src="/src/assets/search.svg"
            alt="search"
            onClick={() => setToggleSearch(true)}
            className="cursor-pointer"
          />
        </div>
        <Link to="/">
          <img
            src="/src/assets/ngmusic.svg"
            alt="logo"
            className="absolute top-7 left-1/2 transform -translate-x-1/2 cursor-pointer"
          />
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
