import './CharacterDetails.css'
import Spinner from '../UI/Spinner'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchCharacterById } from "../../store/charactersSlice"
import { useParams, Link } from 'react-router-dom'


export default function CharacterDetails() {

  const params = useParams()
  const dispatch = useDispatch()
  const { selectedCharacter, loading, errorMessage } = useSelector((state) => state.characters)

  useEffect(() => {
    dispatch(fetchCharacterById(params.id))
  }, [params.id, dispatch])

  if (loading) return <Spinner />

  if (!selectedCharacter) return <p className="error-text">{ errorMessage }</p>

  return (
    <div className="details-container">
      <h2 className="details-title">{selectedCharacter.name}</h2>

      <div className="details-grid">
        <p><strong>Height:</strong> {selectedCharacter.height} cm</p>
        <p><strong>Mass:</strong> {selectedCharacter.mass} kg</p>
        <p><strong>Hair Color:</strong> {selectedCharacter.hair_color}</p>
        <p><strong>Skin Color:</strong> {selectedCharacter.skin_color}</p>
        <p><strong>Eye Color:</strong> {selectedCharacter.eye_color}</p>
        <p><strong>Birth Year:</strong> {selectedCharacter.birth_year}</p>
        <p><strong>Gender:</strong> {selectedCharacter.gender}</p>
      </div>

      <Link to="/characters" className="back-btn">← Back to Characters</Link>
    </div>
  )

}
