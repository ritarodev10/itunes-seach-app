import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

type Props = {
  searchProp: string;
  setToggleSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar = ({ searchProp, setToggleSearch }: Props) => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState(searchProp || "");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {
    navigate(`/results?term=${encodeURIComponent(searchTerm)}`);
    setToggleSearch(false);
  };

  return (
    <div className="bg-gray-900 bg-opacity-80 w-screen h-screen absolute z-100 flex flex-col items-center justify-center gap-3">
      <img
        onClick={() => setToggleSearch(false)}
        src="/src/assets/x.svg"
        alt="close"
        className="absolute top-6 right-6"
      />
      <p className="text-white text-sm font-bold mb-4">Search</p>
      <input
        className="flex text-center h-10 sm:h-12 w-[280px] sm:w-full rounded-[20px] sm:rounded-full text-sm placeholder-gray-500"
        placeholder="Artist/Album/Title"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Button variant="searchTwo" onClick={handleSubmit} disabled={!searchTerm}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
