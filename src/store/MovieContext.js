import React, { useState, createContext } from "react";

export const MovieContext = createContext();

const movieList = [
  { id: 1, title: "Star Wars", price: 10, director: "George Lucas" },
  {
    id: 2,
    title: "The Shawshank Redemption",
    price: 20,
    director: "Frank Darabont",
  },
  {
    id: 3,
    title: "The Godfather",
    price: 15,
    director: "Francis Ford Coppola",
  },
  {
    id: 4,
    title: "The Godfather: Part II",
    price: 40,
    director: "Francis Ford Coppolat",
  },
  {
    id: 5,
    title: "The Dark Night",
    price: 35,
    director: "Christopher Nolan",
  },
  {
    id: 6,
    title: "King Kong",
    price: 10,
    director: "Sidney Lumet",
  },
];

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([...movieList]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
