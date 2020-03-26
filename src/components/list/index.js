import React from "react";
import "./_styles.scss";

import ListItem from "../list-item";
function List(props) {
  return (
    <ul>
      {props.data.map(person => {
        return <ListItem person={person} />;
      })}
    </ul>
  );
}

export default List;
