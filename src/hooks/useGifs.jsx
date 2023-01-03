import { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsProvider from "../context/GifsContext";

const useGifs = ({ keyword } = { keyword: null }) => {
  const { gifs, setGifs } = useContext(GifsProvider);
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

  return { loading, gifs };
};

export default useGifs;
