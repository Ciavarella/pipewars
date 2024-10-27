import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { fetchAllCharacters } from "./utils/api";
import { filterCharacters } from "./utils/utils";
import { PageNumbers } from "./components/PageNumbers";
import { usePagination } from "./hooks/usePagination";

const ITEMS_PER_PAGE = 10;

function App() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

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

  const filteredCharacters = filterCharacters(characters, searchQuery);
  const { currentPage, totalPages, pageCharacters, handlePageChange } =
    usePagination(filteredCharacters, ITEMS_PER_PAGE, setLoading);

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
