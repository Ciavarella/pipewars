import React from "react";

interface HeaderProps {
  query: string;
  searchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ query, searchChange }) => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-star-wars-yellow mb-4">Pipe Wars</h1>
    <div className="flex justify-center mb-8">
      <input
        type="text"
        className="block text-black w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        value={query}
        onChange={(e) => searchChange(e.target.value)}
        placeholder="Search"
      />
    </div>
  </div>
);
