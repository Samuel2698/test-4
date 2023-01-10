import "./styles.css";
import { useState } from "react";
import { Link, useLocation } from "wouter";
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
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Buscar Gif:"
          value={keyword}
        />
        <button>Buscar:</button>
      </form>
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
