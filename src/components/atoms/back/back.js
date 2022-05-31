import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

import "./back.scss";

library.add(faChevronCircleLeft);

const Back = () => (
  <p onClick={() => window.history.back()} className="back">
    <FontAwesomeIcon icon={faChevronCircleLeft} /> Back
  </p>
);

export default Back;
