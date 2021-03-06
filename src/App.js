import React, { useState } from "react";
import "./App.css";
import { firestore } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MovieList from "./MovieList";
import Form from "./Form";

const App = () => {
  document.title = `Movie List`;

  const [addMovie, setAddMovie] = useState(false);

  const moviesRef = firestore.collection(`movies`);
  const [movies] = useCollectionData(moviesRef, { idField: "id" });

  // Custom hook to update state to force a rerender of the MovieList
  const useForceUpdate = () => {
    const [value, setValue] = useState(0);
    return () => setValue((value) => value + 1);
  };

  const forceUpdate = useForceUpdate();

  const handleAddMovie = () => {
    setAddMovie(true);
  };

  const handleCancel = () => {
    setAddMovie(false);
  };

  const sortByTitle = () => {
    movies.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    );
    forceUpdate();
  };

  const sortByYear = () => {
    movies.sort((a, b) => a.year - b.year);
    forceUpdate();
  };

  const sortByRating = () => {
    movies.sort((a, b) => a.rating - b.rating);
    forceUpdate();
  };

  const sortReverse = () => {
    movies.reverse();
    forceUpdate();
  };

  return (
    <div className="App">
      <h1 className="title">MOVIE LIST</h1>
      <div className="add-movie">
        {addMovie && <Form />}
        {addMovie ? (
          <button onClick={handleCancel}>Cancel</button>
        ) : (
          <button onClick={handleAddMovie}>Add Movie</button>
        )}
      </div>
      <div className="sort">
        <br />
        Sort by: <button onClick={sortByTitle}>Title</button>
        <button onClick={sortByYear}>Year</button>
        <button onClick={sortByRating}>Rating</button>
        <button onClick={sortReverse}>↑↓</button>
      </div>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default App;
