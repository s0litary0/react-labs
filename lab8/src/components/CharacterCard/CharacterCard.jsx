import './CharacterCard.css'
import { useNavigate } from 'react-router-dom';


export default function CharacterCard({ character, id }) {
  
  const navigate = useNavigate();

  const goToCharacterDetails = () => {
    navigate(`/characters/${id}`);
  };

  return (
    <div className="character-card">
      <h3 className="character-name">{character.name}</h3>
      <p className='character-birth-year'>{character.birth_year}</p>
      <p className='character-gender'>{character.gender.toUpperCase()}</p>
      <button onClick={goToCharacterDetails} className="details-btn">
        View Details
      </button>
    </div>
  )
}