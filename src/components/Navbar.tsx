import React from "react";
import { Link } from "react-router-dom";

const PUBLIC_URL = import.meta.env.VITE_APP_PUBLIC_URL;

type Props = {
  setToggleSearch: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar = ({ setToggleSearch }: Props) => {
  return (
    <div className="relative z-10">
      <div
        className="fixed w-full h-[60px] bg-gradient-to-r from-[#712bda] to-[#a45deb] shadow-md"
        style={{
          borderBottomLeftRadius: "80% 30%",
          borderBottomRightRadius: "80% 30%",
        }}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <img
            src={PUBLIC_URL + `assets/menu.svg`}
            alt="menu"
            className="cursor-pointer"
          />
          <img
            src={PUBLIC_URL + `assets/search.svg`}
            alt="search"
            onClick={() => setToggleSearch(true)}
            className="cursor-pointer"
          />
        </div>
        <Link to="/">
          <img
            src={PUBLIC_URL + `assets/ngmusic.svg`}
            alt="logo"
            className="absolute top-7 left-1/2 transform -translate-x-1/2 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
