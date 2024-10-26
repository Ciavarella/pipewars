import React from "react";
import { SearchBar } from "./SearchBar";

interface HeaderProps {
  query: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ query, onSearchChange }) => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-star-wars-yellow mb-4">Pipe Wars</h1>
    <SearchBar query={query} searchChange={onSearchChange} />
  </div>
);
