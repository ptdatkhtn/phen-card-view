import React from "react";
import { isEmpty } from "../../helpers/utils";

import "./index.css";
const CardBody = ({ phenomenon }) => {
  return phenomenon && !isEmpty(phenomenon) ? (
    <>
      {phenomenon?.body && (
        <div
          id="card-body"
          dangerouslySetInnerHTML={{ __html: phenomenon?.body }}
        ></div>
      )}
    </>
  ) : null;
};

export default CardBody;
