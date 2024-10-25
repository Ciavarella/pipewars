import { Character, DisplayAttribute } from "../types";

/**
 * List of attributes that is shown in the card.
 * Should be easy to add or remove and be reusable.
 * @param character
 * @returns Label and value of the attributes
 */
export const getCharacterAttributes = (
  character: Character
): DisplayAttribute[] => [
  { label: "Height", value: `${character.height}cm` },
  { label: "Hair Color", value: character.hair_color },
  { label: "Eye Color", value: character.eye_color },
  { label: "Movies", value: character.films },
];
