import React from "react";
import { Card } from "./Card";
import type { Character } from "../types";
import { getCharacterAttributes } from "../utils/utils";

interface ListProps {
  characters: Character[];
}

export const List: React.FC<ListProps> = ({ characters }) => (
  <div className="flex flex-wrap justify-center gap-8 mt-20">
    {characters.map((character) => (
      <Card
        key={character.name}
        character={character}
        attributes={getCharacterAttributes(character)}
      />
    ))}
  </div>
);
