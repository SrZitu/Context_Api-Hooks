import React, { useState } from "react";

const SongForm = ({ value }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    value(title);
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">song name:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SongForm;
