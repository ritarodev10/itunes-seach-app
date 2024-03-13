import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar, SearchBar } from "../components";
import { useFetchMusic } from "../hooks/useFetchMusic";
import Button from "../components/Button";

type Music = {
  artistName: string;
  trackName: string;
  artworkUrl100: string;
  primaryGenreName: string;
  trackPrice: number;
};

const Result = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [musics, setMusics] = useState<Music[]>([]);
  const [limit, setLimit] = useState(4);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("term") || "";
  const { isLoading, isError, data, error, refetch } = useFetchMusic(
    searchTerm,
    limit
  );

  // Set musics when data changes
  useEffect(() => {
    if (data) {
      setMusics(data);
    }
  }, [data]);

  // Reset limit to 4 when searchTerm changes
  useEffect(() => {
    setLimit(4);
  }, [searchTerm]);

  const handleLoadMore = () => {
    setLimit((prev) => prev + 4);
    refetch();
  };

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <>
      <Navbar setToggleSearch={setToggleSearch} />
      {toggleSearch && (
        <SearchBar searchProp={searchTerm} setToggleSearch={setToggleSearch} />
      )}
      <div className="bg-[#f8fafc]">
        <div className="flex flex-col items-center h-screen px-4 pt-20">
          <p className="text-sm mb-10">
            Search result for :{"  "}
            <span className="text-lg text-[#7b34dd] font-bold">
              {searchTerm}
            </span>
          </p>
          <div
            id="card-container"
            className="h-full w-full flex flex-col items-center gap-5"
          >
            {musics.map((music, i) => (
              <div
                key={i}
                className="card-item w-full flex gap-3 p-3 rounded-xl shadow-card"
              >
                <div className="card-item__img">
                  <img
                    src={music.artworkUrl100}
                    alt="album"
                    className="w-[100px] h-[100px] rounded-[10px] sm:w-[150px] sm:h-[150px]"
                  />
                </div>
                <div className="card-item__info flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] text-gray-600">
                      {music.artistName}
                    </p>
                    <p className="text-sm text-gray-600 font-bold">
                      {music.trackName}
                    </p>
                  </div>
                  <div className="w-full flex justify-between">
                    <Button variant="genre">{music.primaryGenreName}</Button>
                    <div className="flex items-center gap-1">
                      <img src="/src/assets/dollar.svg" alt="price" />
                      <p className="text-sm text-[#f5b014] font-bold">
                        {music.trackPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
              <Button onClick={handleLoadMore} variant="loadMore">
                Load More
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
