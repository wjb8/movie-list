import React, { useState } from "react";
import MovieListItem from "./MovieListItem";
import "./MovieList.css";

const MovieList = (props) => {
  const listMovies = props.movies.map((movie) => {
    if (movie) {
      return (
        <MovieListItem
          key={movie.id}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          description={movie.description}
        ></MovieListItem>
      );
    }
  });

  return (
    <div>
      <ul className="list">{listMovies}</ul>
    </div>
  );
};

export default MovieList;
