import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../store/MovieContext";

const AddMovie = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({});
  const [movies, setMovies] = useContext(MovieContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies([...movies, inputValue]);
    navigate("/");
  };

  return (
    <div>
      <section className="container">
        <h2>Add Movie</h2>
        <form id="my-form" onSubmit={handleSubmit}>
          <label htmlFor="title">
            Enter Movie title
            <input
              id="title"
              type="text"
              name="title"
              onChange={handleChange}
              value={inputValue.title}
              required
            />
          </label>
          <label htmlFor="price">
            Enter Movie Price
            <input
              id="price"
              type="text"
              name="price"
              onChange={handleChange}
              value={inputValue.price}
              required
            />
          </label>
          <label htmlFor="directior">
            Enter Movie Director
            <input
              id="director"
              type="text"
              onChange={handleChange}
              value={inputValue.director}
              required
            />
          </label>
          <input className="btnn" type="submit" />
        </form>
      </section>
    </div>
  );
};

export default AddMovie;
