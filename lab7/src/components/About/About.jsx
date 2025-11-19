import starWarsLogo from "../../assets/star_wars_logo.png";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <img src={starWarsLogo} alt="Star Wars Logo" className="about-logo" />
      <h1 className="about-title">About the Galaxy Archive</h1>
      <p className="about-text">
        Welcome to the <strong>Star Wars Character Explorer</strong> — your
        gateway to the galaxy far, far away. This project was created for fans
        who want to discover more about the heroes, villains, and mysterious
        beings that shaped the Star Wars universe.
      </p>
      <p className="about-text">
        Browse through the vast database of characters, learn about their
        stories, affiliations, and adventures. Whether you’re a Jedi, a bounty
        hunter, or just a curious traveler, you’ll find something new to explore
        here.
      </p>
      <p className="about-text">
        The data is fetched from the{" "}
        <a href="https://swapi.dev" target="_blank" rel="noreferrer">
          Star Wars API (SWAPI)
        </a>
        , making this project both fun and educational — a tribute to one of the
        greatest space sagas ever told.
      </p>
    </div>
  );
}
