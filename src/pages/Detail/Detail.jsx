import useGlobalGifs from "../../hooks/useGlobalGifs";
import Gif from "../../components/Gif/Gif";

const Detail = ({ params }) => {
  const gifs = useGlobalGifs({ params });

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  return <Gif {...gif} />;
};

export default Detail;
