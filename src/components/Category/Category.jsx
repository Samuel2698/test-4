import { Link } from "wouter";
import "./styles.css";

const Category = ({ name, options = [] }) => {
  return (
    <div className="category">
      <h2>{name}</h2>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <Link className="link" to={`/search/${option}`}>
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
