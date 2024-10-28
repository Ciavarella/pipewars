import { Character, DisplayAttribute } from "../types";

/**
 * List of attributes that is shown in the card.
 * @param character
 * @returns Label and value of the attributes
 */
export const getCharacterAttributes = (
  character: Character,
  movieUrlToTitle: Record<string, { title: string; release_date: string }>
): DisplayAttribute[] => {
  const movieTitles = character.films.map((url) => {
    const movie = movieUrlToTitle[url];
    return `${movie.title} (${movie.release_date})`;
  });

  return [
    { label: "Height", value: `${character.height}cm` },
    { label: "Hair Color", value: character.hair_color },
    { label: "Eye Color", value: character.eye_color },
    { label: "Movies", value: movieTitles },
  ];
};

/**
 *
 * Util function to find search result
 *
 * @param characters List of characters
 * @param query Searchquery to find characters
 * @returns Array of characters
 */
export const filterCharacters = (
  characters: Array<Character>,
  query: string
): Character[] =>
  characters.filter((character) =>
    character.name.toLowerCase().includes(query.toLowerCase())
  );
