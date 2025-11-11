import './CharactersList.css'
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { CharacterService } from "../../services/CharactersService"
import CharacterCard from '../CharacterCard/CharacterCard';
import Spinner from '../UI/Spinner';


export default function CharactersList() {

  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CharacterService.fetchCharacters(query);
        console.log(data);
        setCharacters(data.results);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    } 
    setLoading(true);
    fetchData();
  }, [query])


  // const filteredCharacters = characters.filter(character => 
  //   character.name.toLowerCase().includes(query.toLocaleLowerCase())
  // ) 

  if (!characters.length && !loading) {
    return (
      <div className="characters-container">
        <h1 className='characters-title'>No characters found</h1>
        <input className="characters-search" type="text" value={query} 
          onChange={(e) => {
            const value = e.target.value;
            setSearchParams(value ? { q: value } : { })
          }}
        />
      </div>
    )
  }

  return (
    <div className="characters-container">
      <h2 className="characters-title">Meet the Characters</h2>

      <input className="characters-search" type="text" value={query} 
        onChange={(e) => {
          const value = e.target.value;
          setSearchParams(value ? { q: value } : { })
        }}/>
      <div className="characters-list">
        {loading
        ? <Spinner className="spinner" />
        : characters.map((character, index) => (
          <CharacterCard key={character.url} character={character} id={index + 1}/>
        ))}
      </div>
    </div>
  )

}