import { useState } from "react";
import { Link, useLocation } from "wouter";
import useGifs from "../../hooks/useGifs";
import Spinner from "../../components/Spinner/index";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import "./styles.css";

const POPULAR_GIFS = [
  "Argentina",
  "Chile",
  "Colombia",
  "Peru",
  "Uruguay",
  "Venezuela",
];

const MASCOTAS = ["Perros", "Reptiles", "Gatos", "Peces", "Loros", "Hamsters"];

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
    <div className="gifs">
      <form onSubmit={handleSubmit} className="form">
        <button>Buscar</button>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Buscar Gifs:"
          value={keyword}
        />
      </form>
      <h2>Últimos Gifs</h2>
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      <h2>Gifs Populares</h2>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li className="popular" key={popularGif}>
            <Link className="link" to={`/search/${popularGif}`}>
              {popularGif}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Mascotas</h2>
      <ul>
        {MASCOTAS.map((mascota) => (
          <li key={mascota}>
            <Link className="link" to={`/search/${mascota}`}>
              {mascota}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
