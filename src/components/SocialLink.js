import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = ({ name, url, icon }) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );

export default SocialLink;