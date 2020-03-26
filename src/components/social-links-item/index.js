import React from "react";
import "./styles.scss";

import phoneLogo from "../../assets/phone.svg";
import mailLogo from "../../assets/mail.svg";
import webLogo from "../../assets/xing-website-logo.svg";

let socialIcons = [phoneLogo, mailLogo, webLogo];
let linkType = ["tel:", "mailto:", ""];
function SocialListItem(props) {
  return Object.keys(props.contact).map((key, index) => {
    return (
      <a key={key} className="social-item" href={linkType[index] + props.contact[key]}>
        <img src={socialIcons[index]} alt={key} />
        <p className="link-type">{props.contact[key]}</p>
      </a>
    );
  });
}

export default SocialListItem;
