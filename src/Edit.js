import React, { useState } from "react";
import { firestore } from "./firebase";
import "./Edit.css";

const Edit = (props) => {
  const [movie, setMovie] = useState({
    title: props.title,
    year: props.year,
    rating: props.rating,
    description: props.description,
    imageURL: props.imageURL
  });

  const moviesRef = firestore.collection(`movies`);

  const updateMovie = (e) => {
    e.preventDefault();

    moviesRef
      .doc(props.id)
      .update({
        title: movie.title,
        year: movie.year,
        rating: movie.rating,
        description: movie.description,
        imageURL: movie.imageURL
      })
      .then(alert("Movie updated!"));
  };

  return (
    <form className="form" onSubmit={updateMovie}>
      Title:{" "}
      <input
        type="text"
        name="title"
        placeholder={props.title}
        value={movie.title}
        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
      />
      <br />
      Year:{" "}
      <input
        type="text"
        name="year"
        placeholder={props.year}
        value={movie.year}
        onChange={(e) => setMovie({ ...movie, year: e.target.value })}
      />
      <br />
      Rating:{"  "}
      <input
        type="text"
        name="rating"
        placeholder={props.rating}
        value={movie.rating}
        onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
      />
      <br />
      Description:{" "}
      <input
        type="text"
        name="description"
        placeholder={props.description}
        value={movie.description}
        onChange={(e) => setMovie({ ...movie, description: e.target.value })}
      />
      <br />
      Image URL:{" "}
      <input
        type="text"
        name="imageURL"
        placeholder={props.imageURL}
        value={movie.imageURL}
        onChange={(e) => setMovie({ ...movie, imageURL: e.target.value })}
      />
      <br />
      <button type="submit">Update Movie</button>
    </form>
  );
};

export default Edit;
