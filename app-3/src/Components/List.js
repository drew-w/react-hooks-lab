import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const List = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://secure-hamlet-19722.herokuapp.com/api/v1/characters")
      .then((res) => {
        setList(res.data);
      });
  }, []);

  const mappedCharacters = list.map((e, i) => {
    return (
      <Link key={i} to={`/characters/${e.name}`}>
        <h2>{e.name}</h2>
      </Link>
    );
  });

  return <div>{mappedCharacters}</div>;
};

export default List;
