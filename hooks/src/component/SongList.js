import React, { useState, useEffect } from "react";
import SongForm from "../component/SongForm";
import uuid from "react-uuid";

const SongList = () => {
  const [songs, setsongs] = useState([
    { title: "Love me like you do", id: 1 },
    { title: "ALo", id: 2 },
    { title: "Sporsher Bahire", id: 3 },
  ]);
  const addsong = (title) => {
    setsongs([...songs, { title, id: uuid() }]);
  };
  const [age, setage] = useState(20);
  useEffect(() => {
    console.log("useEffect hooks run", songs);
  }, [songs]);

  useEffect(() => {
    console.log("useEffect hooks run", age);
  }, [age]);
  return (
    <div>
      <h1>Song List</h1>
      <ul className="list-unstyled song-list">
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <SongForm value={addsong} />
      <button onClick={() => setage(age + 1)}>add 1 to age</button>
    </div>
  );
};
export default SongList;
