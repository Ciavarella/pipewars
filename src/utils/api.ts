import type { Character, APIResponse } from "../types";

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
export async function fetchAllCharacters(): Promise<Character[]> {
  let allCharacters: Array<Character> = [];
  let url: string | null = "https://swapi.dev/api/people/";

  while (url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch characters");
    const res: APIResponse = await response.json();
    allCharacters = [...allCharacters, ...res.results];
    url = res.next;
  }

  return allCharacters;
}
