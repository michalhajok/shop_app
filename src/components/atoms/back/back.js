import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronCircleLeft);

const Back = () => (
  <button onClick={() => window.history.back()}>
    <FontAwesomeIcon icon={faChevronCircleLeft} />
  </button>
);

export default Back;
