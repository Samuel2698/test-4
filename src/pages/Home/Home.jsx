import "./styles.css";
import { useState } from "react";
import { useLocation } from "wouter";
import useGifs from "../../hooks/useGifs";
import Spinner from "../../components/Spinner/index";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Category from "../../components/Category/Category";
import TrendingSearches from "../../components/TrendingSearches/TrendingSearches";

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
        <div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Buscar Gif:"
            value={keyword}
          />
          <button>Buscar:</button>
        </div>
      </form>

      <h2>Última búsqueda</h2>
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}

      <TrendingSearches />
      <Category name="Gifs de Latam" options={LATAM_GIFS} />
      <Category name="Gifs de Mascotas" options={PETS_GIFS} />
    </div>
  );
};

export default Home;
