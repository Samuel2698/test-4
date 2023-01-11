import { Link } from "wouter";

const Category = ({ name, options = [] }) => {
  return (
    <>
      <h2>{name}</h2>
      <ul>
        {options.map((singleGif) => (
          <li key={singleGif}>
            <Link className="link" to={`/search/${singleGif}`}>
              {singleGif}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Category;
