import React, { useState } from "react";
import firebase from "firebase";
import { firestore } from "./firebase";

const Form = () => {
  const [movie, setMovie] = useState({
    title: "",
    year: undefined,
    rating: undefined,
    description: "",
    imageURL: ""
  });

  const moviesRef = firestore.collection(`movies`);

  const onSubmitMovie = (e) => {
    e.preventDefault();

    console.log(movie);

    moviesRef.add({
      ...movie,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert("Movie added to database: " + movie.title);

    setMovie({
      title: "",
      year: undefined,
      rating: undefined,
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
      <input
        required
        name="year"
        placeholder="year"
        value={movie.year}
        onChange={(e) => setMovie({ ...movie, year: e.target.value })}
      />
      <input
        required
        name="rating"
        placeholder="rating"
        value={movie.rating}
        onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
      />
      <input
        required
        name="description"
        placeholder="description"
        value={movie.description}
        onChange={(e) => setMovie({ ...movie, description: e.target.value })}
      />
      <input
        required
        name="imageURL"
        placeholder="imageURL"
        value={movie.imageURL}
        onChange={(e) => setMovie({ ...movie, imageURL: e.target.value })}
      />
      <button type="submit">Submit Movie</button>
    </form>
  );
};

export default Form;
