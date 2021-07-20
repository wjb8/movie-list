import React from "react";
import firebase from "firebase";
import { firestore } from "./firebase";
import Form from "./Form";
import "./MovieListItem.css";

const MovieListItem = (props) => {
  const moviesRef = firestore.collection(`movies`);

  const editMovie = (id) => {
    alert("edit");
  };

  const deleteMovie = (id) => {
    moviesRef.doc(id).delete();
  };

  return (
    <>
      <div className="list-item">
        {props.imageURL && (
          <img
            src={props.imageURL}
            alt="film poster"
            width="100"
            height="150"
          ></img>
        )}
        <div>
          <h4>
            {props.title} ({props.year})
          </h4>
          {props.description} <br /> <i>{props.rating} stars</i>{" "}
          <button onClick={(e) => editMovie(props.id)}>Edit</button>
          <button onClick={(e) => deleteMovie(props.id)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default MovieListItem;
