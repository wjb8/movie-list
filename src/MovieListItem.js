import React, { useState } from "react";
import "./MovieListItem.css";

const MovieListItem = (props) => {
  return (
    <>
      <h5 className="list-item">
        {props.title} ({props.year}): {props.description} | Rating:{" "}
        {props.rating} <button>Edit</button>
        <button>Delete</button>
      </h5>
    </>
  );
};

export default MovieListItem;
