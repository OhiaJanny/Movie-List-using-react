import React, { useContext } from "react";
import { MovieContext } from "../store/MovieContext";

const Footer = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <footer className="container-fuild text-center text-monospace fixed-bottom bg-light">
      <p>
        <strong>
          The Latest Movie: <span>{movies[movies.length - 1].title} </span>
        </strong>
      </p>
    </footer>
  );
};

export default Footer;
