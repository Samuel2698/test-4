import { Link } from "wouter";

const Gif = ({ id, url }) => {
  return (
    <>
      <Link to={`/gif/${id}`}>
        <img loading="lazy" src={url} alt={id} />
      </Link>
    </>
  );
};

export default Gif;
