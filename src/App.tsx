import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { fetchAllCharacters } from "./utils/api";
import { filterCharacters } from "./utils/utils";
import { PageNumbers } from "./components/PageNumbers";
import { Character } from "./types";

const ITEMS_PER_PAGE = 10;
const PAGE_DELAY = 800;

function App() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      try {
        const res = await fetchAllCharacters();
        setCharacters(res);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    loadCharacters();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const paginateCharacters = (
    characters: Character[],
    currentPage: number,
    itemsPerPage: number = ITEMS_PER_PAGE,
  ) => {
    const totalPages = Math.floor(characters.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const pageCharacters = characters.slice(
      startIndex,
      startIndex + itemsPerPage,
    );

    return { pageCharacters, totalPages };
  };

  const handlePageChange = async (page: number) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, PAGE_DELAY));
    setCurrentPage(page);
    setLoading(false);
  };

  const filteredCharacters = filterCharacters(characters, searchQuery);
  const { pageCharacters, totalPages } = paginateCharacters(
    filteredCharacters,
    currentPage,
    ITEMS_PER_PAGE,
  );

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen py-12 px-4">
      <Header query={searchQuery} onSearchChange={setSearchQuery} />

      {loading ? <h2>LOADING</h2> : <List characters={pageCharacters} />}

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
