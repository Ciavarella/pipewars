import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";

function App() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://swapi.dev/api/people");
        const res = await response.json();
        setCharacters(res.results);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    loadCharacters();
  }, []);

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen py-12 px-4">
      <Header query={searchQuery} searchChange={setSearchQuery} />

      {loading ? <h2>LOADING</h2> : <List characters={characters} />}
    </div>
  );
}

export default App;
