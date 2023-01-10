import React from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import useGifs from "../../hooks/useGifs";
import Spinner from "../../components/Spinner/index";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { gifs, loading } = useGifs({ keyword });

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
};

export default SearchResults;
