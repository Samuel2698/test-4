import { useContext, useState, useEffect } from "react";
import GifsContext from "../context/GifsContext";
import getGifs from "../services/getGifs";

const useGifs = ({ keyword } = { keyword: null }) => {
  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "random";
    setLoading(true);
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword]);

  return { gifs, loading };
};

export default useGifs;
