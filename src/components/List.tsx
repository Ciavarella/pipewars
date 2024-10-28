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
    const urlTitleMap: Record<string, string> = {};
    movies.forEach((movie) => {
      urlTitleMap[movie.url] = movie.title;
    });
    return urlTitleMap;
  }, [movies]);

  movies.forEach((movie) => {
    movieUrlToTitle[movie.url] = movie.title;
  });

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
