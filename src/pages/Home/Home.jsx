import React from "react";
import { Link } from "wouter";
import "./styles.css";
import useGifs from "../../hooks/useGifs";
import Spinner from "../../components/Spinner/index";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

const LATAM_GIFS = [
  "Argentina",
  "Brasil",
  "Chile",
  "Colombia",
  "Uruguay",
  "Venezuela",
];

const PETS_GIFS = ["Perros", "Gatos", "Peces", "Loros", "Hamsters", "Reptiles"];

const Home = () => {
  const { loading, gifs } = useGifs();

  return (
    <div className="home">
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      <h2>Gifs de Latam</h2>
      <ul>
        {LATAM_GIFS.map((singleGif) => (
          <li key={singleGif}>
            <Link className="link" to={`/search/${singleGif}`}>
              {singleGif}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Gifs de Mascotas</h2>
      <ul>
        {PETS_GIFS.map((singleGif) => (
          <li key={singleGif}>
            <Link className="link" to={`/search/${singleGif}`}>
              {singleGif}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
