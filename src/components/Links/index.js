import React from "react";
import { isEmpty } from "../../helpers/utils";

const Links = ({ phenomenon }) => {
  return phenomenon?.links && !isEmpty(phenomenon) ? (
    <div className="mt-8">
      <h4 className="text-links-title font-bold mb-5">Links</h4>
      {phenomenon?.links?.map((link) => (
        <>
          <h4 className="text-links-title font-bold mb-5">Links</h4>
          <a
            href="https://fortune.com/2021/11/23/south-korea-culture-success-bts-kpop-netflix-kdrama-squid-game-ramon-pacheco-pardo/"
            target="_blank"
            rel="noreferrer"
            className="text-blue text-body-text"
          >
            https://fortune.com/2021/11/23/south-korea-culture-success-bts-kpop-netflix-kdrama-squid-game-ramon-pacheco-pardo/
          </a>
          <br />
        </>
      ))}
      {/* <h4 className="text-links-title font-bold mb-5">Links</h4>
      <a
        href="https://fortune.com/2021/11/23/south-korea-culture-success-bts-kpop-netflix-kdrama-squid-game-ramon-pacheco-pardo/"
        target="_blank"
        rel="noreferrer"
        className="text-blue text-body-text"
      >
        https://fortune.com/2021/11/23/south-korea-culture-success-bts-kpop-netflix-kdrama-squid-game-ramon-pacheco-pardo/
      </a><br/>
      <a
        href="https://www.sagisag.com/article/4236/Exclusives/k-ulture-the-influence-of-k-pop-in-the-philippines"
        target="_blank"
        rel="noreferrer"
        className="text-blue text-body-text"
      >
        https://www.sagisag.com/article/4236/Exclusives/k-ulture-the-influence-of-k-pop-in-the-philippines
      </a><br/> */}
    </div>
  ) : null;
};

export default Links;
