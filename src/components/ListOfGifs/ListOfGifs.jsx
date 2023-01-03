import Gif from "../Gif/Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <>
      {gifs.map(({ id, url }) => (
        <Gif id={id} url={url} key={id} />
      ))}
    </>
  );
};

export default ListOfGifs;
