import React, { useMemo } from "react";
import { Card } from "./Card";
import type { Character, Movie } from "../types";
import { getCharacterAttributes } from "../utils/utils";

interface ListProps {
  characters: Character[];
  movies: Movie[];
}

export const List: React.FC<ListProps> = ({ characters, movies }) => {
  const movieUrlToTitle = useMemo(() => {
    const urlTitleMap: Record<string, { title: string; release_date: string }> =
      {};
    movies.forEach((movie) => {
      urlTitleMap[movie.url] = {
        title: movie.title,
        release_date: movie.release_date,
      };
    });
    return urlTitleMap;
  }, [movies]);

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-18">
      {characters.map((character) => (
        <Card
          key={character.name}
          character={character}
          attributes={getCharacterAttributes(character, movieUrlToTitle)}
        />
      ))}
    </div>
  );
};
