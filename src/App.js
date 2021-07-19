import React from "react";
import "./App.css";
import firebase from "firebase";
import { firestore } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MovieList from "./MovieList";
import Form from "./Form";

const App = () => {
  const moviesRef = firestore.collection(`movies`);
  const [movies] = useCollectionData(moviesRef);

  return (
    <div className="App">
      <h1>MOVIE LIST</h1>
      <Form />
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default App;
