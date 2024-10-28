import type {
  Character,
  DisplayData,
  Movie,
  MovieAPIResponse,
  PeopleAPIResponse,
} from "../types";

/**
 * Util function to fetch all characters.
 *
 * Note: Doing this to make the search work with pagination.
 * Fetching one page at a time will not make the search work correctly.
 * Fetching pages based on the "next" response. That sets the new url.
 * If the next is null then it is on the last page.
 *
 * @returns Array of Characters (all)
 */
export const fetchAllCharacters = async (): Promise<Character[]> => {
  let allCharacters: Character[] = [];
  let url: string | null = "https://swapi.dev/api/people/";

  while (url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch characters");
    const res: PeopleAPIResponse = await response.json();
    allCharacters = [...allCharacters, ...res.results];
    url = res.next;
  }

  return allCharacters;
};

/**
 * Function to get all movies.
 *
 * @returns Array of all movies
 */
export const fetchAllMovies = async (): Promise<Movie[]> => {
  const response = await fetch("https://swapi.dev/api/films");
  if (!response.ok) throw new Error("Failed to fetch movies");
  const res: MovieAPIResponse = await response.json();
  return res.results;
};

export const loadInitialData = async (): Promise<DisplayData> => {
  const [characters, movies] = await Promise.all([
    fetchAllCharacters(),
    fetchAllMovies(),
  ]);
  return { characters, movies };
};
