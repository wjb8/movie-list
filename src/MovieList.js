import React from "react";
import MovieListItem from "./MovieListItem";
import "./MovieList.css";

const MovieList = (props) => {
  const listMovies = props.movies.map((movie) => {
    return (
      <MovieListItem
        key={movie.id}
        id={movie.id}
        title={movie.title}
        year={movie.year}
        rating={movie.rating}
        description={movie.description}
        imageURL={movie.imageURL}
      ></MovieListItem>
    );
  });

  return (
    <div>
      <ul className="list">{listMovies}</ul>
    </div>
  );
};

export default MovieList;
