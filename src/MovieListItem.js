import React, { useState } from "react";
import { firestore } from "./firebase";
import Edit from "./Edit";
import "./MovieListItem.css";

const MovieListItem = (props) => {
  const [editForm, setEditForm] = useState(false);

  const moviesRef = firestore.collection(`movies`);

  const deleteMovie = (id) => {
    moviesRef.doc(id).delete().then(alert("Movie deleted from collection."));
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
          {props.description} <br />{" "}
          <i>
            {props.rating} {props.rating !== "1" ? "stars" : "star"}
          </i>{" "}
          <button
            onClick={(e) => (editForm ? setEditForm(false) : setEditForm(true))}
          >
            {editForm ? "Hide Edit" : "Show Edit"}
          </button>
          <button onClick={(e) => deleteMovie(props.id)}>Delete</button>
        </div>
        {editForm && (
          <Edit
            id={props.id}
            title={props.title}
            year={props.year}
            rating={props.rating}
            description={props.description}
            imageURL={props.imageURL}
          />
        )}
      </div>
    </>
  );
};

export default MovieListItem;
