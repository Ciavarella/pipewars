import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { loadInitialData } from "./utils/api";
import { filterCharacters } from "./utils/utils";
import { PageNumbers } from "./components/PageNumbers";
import { usePagination } from "./hooks/usePagination";
import { LightsaberLoader } from "./components/LightsaberLoader/LightsaberLoader";
import { Character, DisplayData, Movie } from "./types";

const ITEMS_PER_PAGE = 10;

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCharactersAndMovies = async () => {
      setLoading(true);
      try {
        const { characters, movies }: DisplayData = await loadInitialData();
        setCharacters(characters);
        setMovies(movies);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    loadCharactersAndMovies();
  }, []);

  const filteredCharacters = filterCharacters(characters, searchQuery);
  const { currentPage, totalPages, pageCharacters, handlePageChange } =
    usePagination(filteredCharacters, ITEMS_PER_PAGE, setLoading);

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen py-12 px-4">
      <Header query={searchQuery} onSearchChange={setSearchQuery} />

      {loading ? (
        <LightsaberLoader />
      ) : (
        <List characters={pageCharacters} movies={movies} />
      )}

      {filteredCharacters.length > ITEMS_PER_PAGE && (
        <PageNumbers
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;
