import React from "react";
import "./App.css";
import MovieList from "./MovieList";

const App = () => {
  const fakeMovies = [
    {
      title: "Jaws",
      year: 1975,
      rating: 5,
      description: "good film"
    },
    {
      title: "Passion of the Christ",
      year: 2456,
      rating: 1,
      description: "bad film"
    }
  ];

  return (
    <div className="App">
      <h1>MOVIE LIST</h1>
      <MovieList movies={fakeMovies} />
    </div>
  );
};

export default App;
