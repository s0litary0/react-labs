import { useNavigate } from 'react-router-dom'
import './Home.css'


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Star Wars Characters</h1>
      <p className="home-description">
        Explore the galaxy far, far away — discover your favorite Star Wars characters, 
        learn about their origins, alliances, and journeys across the stars. 
        May the Force be with you!
      </p>
      <button className="home-btn" onClick={() => navigate("/characters")}>Explore Characters</button>

      <img className="home-img" src="/imgs/star_wars.png" alt="Star Wars characters" />
    </div>
  )

}