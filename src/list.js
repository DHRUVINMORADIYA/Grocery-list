import React from "react";
import ListElement from "./listElement";

const List = (props) => {
  console.log(props.list);

  const removeItem = (item) => {
    props.setList(props.list.filter((i) => i !== item));
  };
  return (
    <ol>
      {props.list.map((element) => (
        <div>{ListElement({ element, removeItem })}</div>
      ))}
    </ol>
  );
};

export default List;
