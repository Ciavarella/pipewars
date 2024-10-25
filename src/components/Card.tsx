import React from "react";
import type { Character } from "../types";

interface CardProps {
  character: Character;
}

export const Card: React.FC<CardProps> = ({ character }) => {
  return (
    <div className="bg-star-wars-red w-48 h-64 rounded-lg transform transition-all duration-300 hover:scale-110">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full">
          {/* Add profile picture */}
          <img
            src=""
            alt={character.name}
            className="object-cover rounded-full w-full h-full"
          />
        </div>
        <h3 className="text-xl font-bold text-center text-black mb-4">
          {character.name}
        </h3>
      </div>
    </div>
  );
};
