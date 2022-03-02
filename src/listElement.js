import React from "react";
import members from "./data/members";

const ListElement = (props) => {
  const element = props.element;
  return (
    <li key={element.id}>
      {element.text} for {members.members[element.memberID].name}
      <button onClick={() => props.removeItem(element)}>Remove</button>
    </li>
  );
};

export default ListElement;
