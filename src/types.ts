/**
 * Response from swapi api
 */
export interface PeopleAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

export interface Character {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
}

export interface DisplayAttribute {
  label: string;
  value: string | Array<string>;
}

export interface MovieAPIResponse {
  count: number;
  next: null;
  previous: null;
  results: Movie[];
}
export interface Movie {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

export interface DisplayData {
  characters: Character[];
  movies: Movie[];
}
