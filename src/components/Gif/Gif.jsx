import { Link } from "wouter";

const Gif = ({ url, title, id }) => {
  return (
    <Link to={`/gif/${id}`}>
      <img loading="lazy" src={url} alt={title} />
    </Link>
  );
};

export default Gif;
