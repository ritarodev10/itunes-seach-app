import { useQuery } from "@tanstack/react-query";

const API_URL = "https://itunes.apple.com/search?";

type Music = {
  artistName: string;
  trackName: string;
  artworkUrl100: string;
  primaryGenreName: string;
  trackPrice: number;
};

const fetchMusic = async (
  searchTerm: string,
  limit: number
): Promise<Music[]> => {
  if (!searchTerm) return [];
  const response = await fetch(
    `${API_URL}term=${encodeURIComponent(searchTerm)}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.results;
};

export const useFetchMusic = (searchTerm: string, limit: number) => {
  return useQuery({
    queryKey: ["musics", searchTerm, limit],
    queryFn: () => fetchMusic(searchTerm, limit), // Pass searchTerm and limit as separate arguments
    enabled: !!searchTerm,
  });
};
