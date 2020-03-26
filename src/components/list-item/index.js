import React from "react";
import "./styles.scss";

import SocialLinksList from "../social-links-list";

function ListItem(props) {
  return (
    <li key={props.person.id}>
      <div className="head">
        <img src={props.person.avatar} alt={props.person.firstName + " " + props.person.lastName} />
        <div className="name-container">
          <div className="name">
            {props.person.firstName} {props.person.lastName}
            {props.person.isAdmin ? <span>Admin</span> : null}
          </div>
          <p className="title">{props.person.title}</p>
        </div>
      </div>
      <SocialLinksList person={props.person} />
      <div className="date">
        member since {new Date(props.person.memberSince).toLocaleDateString("de")}
      </div>
    </li>
  );
}

export default ListItem;
