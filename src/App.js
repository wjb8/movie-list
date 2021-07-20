import React, { useState } from "react";
import "./App.css";
import firebase from "firebase";
import { firestore } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MovieList from "./MovieList";
import Form from "./Form";

const App = () => {
  const [addMovie, setAddMovie] = useState(false);

  const moviesRef = firestore.collection(`movies`);
  const [movies] = useCollectionData(moviesRef, { idField: "id" });

  const handleAddMovie = () => {
    setAddMovie(true);
  };

  const handleCancel = () => {
    setAddMovie(false);
  };

  return (
    <div className="App">
      <h1>MOVIE LIST</h1>
      {addMovie && <Form />}
      {addMovie ? (
        <button className="add-button" onClick={handleCancel}>
          Cancel
        </button>
      ) : (
        <button className="add-button" onClick={handleAddMovie}>
          Add Movie
        </button>
      )}
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default App;
