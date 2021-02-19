import React, { useState, useEffect } from "react";
import axios from "axios";

const Character = (props) => {
  const { name } = props.match.params;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://secure-hamlet-19722.herokuapp.com/api/v1/characters/${name}`
      )
      .then((res) => {
        setCharacter(res.data[0]);
      });
  }, [name]);

  return (
    <div>
      <h1>{character.name}</h1>
      <h3>{character.universe}</h3>
      <img src={character.head_shot} />
    </div>
  );
};

export default Character;
