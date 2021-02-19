import React from "react";

const List = (props) => {
  let mappedList = props.list.map((item, i) => {
    return <h2 key={i}>{item}</h2>;
  });
  return <div>{mappedList}</div>;
};
export default List;
