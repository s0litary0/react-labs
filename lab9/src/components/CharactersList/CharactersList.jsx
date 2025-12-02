import './CharactersList.css'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchCharacters, setSearchQuery } from '../../store/charactersSlice';
import CharacterCard from '../CharacterCard/CharacterCard';
import Spinner from '../UI/Spinner';


export default function CharactersList() {
  const dispatch = useDispatch()
  const { characters, loading, query, errorMessage } = useSelector((state) => state.characters)
  const [searchParams, setSearchParams] = useSearchParams()
  const queryParam = searchParams.get('q') || '';

  useEffect(() => {
    dispatch(fetchCharacters(queryParam))
    dispatch(setSearchQuery(queryParam))
  }, [queryParam, dispatch])

  // console.log(characters, loading, query)

  // const filteredCharacters = characters.filter(character => 
  //   character.name.toLowerCase().includes(query.toLocaleLowerCase())
  // ) 

  if (errorMessage) {
    return <p className="error-text">{ errorMessage }</p>
  }
  
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