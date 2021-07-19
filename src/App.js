import React from "react";
import "./App.css";
import firebase from "firebase";
import { firestore } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MovieList from "./MovieList";
import Form from "./Form";

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
      <Form />
      <MovieList movies={fakeMovies} />
    </div>
  );
};

export default App;
