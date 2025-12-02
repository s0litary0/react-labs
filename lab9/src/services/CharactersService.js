export class CharacterService {
  static async fetchCharacters(searchParam = "") {
    const response = searchParam
      ? await fetch(`https://swapi.dev/api/people?search=${searchParam}`)
      : await fetch("https://swapi.dev/api/people");

    if (!response.ok) {
      throw new Error(`Failed to fetch characters with filter: ${searchParam}`);
    }

    return response.json();
  }

  static async fetchCharacterById(id) {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch character with id: ${id}`);
    }

    return response.json();
  }
}
