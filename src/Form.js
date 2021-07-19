import React from "react";

const Form = () => {
  const onSubmitMovie = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitMovie}>
      <input placeholder="title" />
      <input placeholder="year" />
      <input placeholder="rating" />
      <input placeholder="description" />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default Form;
