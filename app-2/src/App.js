import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./Components/List";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://secure-hamlet-19722.herokuapp.com/api/v1/characters")
      .then((res) => {
        setList(res.data);
      });
  }, []);

  const mappedList = list.map((e, i) => {
    return <h2 key={i}>{e.name}</h2>;
  });

  return <div className="App">{mappedList}</div>;
}

export default App;
