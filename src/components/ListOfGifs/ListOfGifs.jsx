import Gif from "../Gif/Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <>
      {gifs.map(({ url, title, id }) => (
        <Gif url={url} title={title} key={title} id={id} />
      ))}
    </>
  );
};

export default ListOfGifs;
