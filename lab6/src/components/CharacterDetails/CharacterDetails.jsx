import './CharacterDetails.css'
import Spinner from '../UI/Spinner'
import { useEffect, useState } from 'react'
import { CharacterService } from '../../services/CharactersService'
import { useParams, Link } from 'react-router-dom'


export default function CharacterDetails() {

  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [character, setCharacter] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CharacterService.fetchCharacterById(params.id)
        console.log(data)
        setCharacter(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    setLoading(true)
    fetchData()
  }, [params.id])

  if (loading) return <Spinner />

  if (!character) return <p className="error-text">Character not found.</p>

  return (
    <div className="details-container">
      <h2 className="details-title">{character.name}</h2>

      <div className="details-grid">
        <p><strong>Height:</strong> {character.height} cm</p>
        <p><strong>Mass:</strong> {character.mass} kg</p>
        <p><strong>Hair Color:</strong> {character.hair_color}</p>
        <p><strong>Skin Color:</strong> {character.skin_color}</p>
        <p><strong>Eye Color:</strong> {character.eye_color}</p>
        <p><strong>Birth Year:</strong> {character.birth_year}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
      </div>

      <Link to="/characters" className="back-btn">← Back to Characters</Link>
    </div>
  )

}
