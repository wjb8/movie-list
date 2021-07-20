import React, { useState } from "react";
import firebase from "firebase";
import { firestore, functions } from "./firebase";

const addMovie = functions.httpsCallable("addMovie");

const Form = () => {
  const [movie, setMovie] = useState({
    title: "",
    year: "",
    rating: "",
    description: "",
    imageURL: ""
  });

  const moviesRef = firestore.collection(`movies`);

  const onSubmitMovie = (e) => {
    e.preventDefault();

    console.log(movie);

    addMovie({
      ...movie,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert("Movie added to database: " + movie.title);

    setMovie({
      title: "",
      year: "",
      rating: "",
      description: "",
      imageURL: ""
    });
  };

  return (
    <form className="form" onSubmit={onSubmitMovie}>
      <input
        required
        name="title"
        placeholder="title"
        value={movie.title}
        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
      />
      <br />
      <input
        required
        name="year"
        placeholder="year"
        value={movie.year}
        onChange={(e) => setMovie({ ...movie, year: e.target.value })}
      />
      <br />
      <input
        required
        name="rating"
        placeholder="rating"
        value={movie.rating}
        onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
      />
      <br />
      <input
        required
        name="description"
        placeholder="description"
        value={movie.description}
        onChange={(e) => setMovie({ ...movie, description: e.target.value })}
      />
      <br />
      <input
        required
        name="imageURL"
        placeholder="imageURL"
        value={movie.imageURL}
        onChange={(e) => setMovie({ ...movie, imageURL: e.target.value })}
      />
      <br />
      <button type="submit">Submit Movie</button>
    </form>
  );
};

export default Form;
