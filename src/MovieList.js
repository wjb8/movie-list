import React, { useState } from "react";
import MovieListItem from "./MovieListItem";
import "./MovieList.css";

const MovieList = (props) => {
  const listMovies = props.movies.map((movie) => {
    const keyGen = movie.title.slice(0, 2) + new Date().getTime();

    if (movie) {
      return (
        <MovieListItem
          key={keyGen}
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
