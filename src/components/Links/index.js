import React from "react";
import { isEmpty } from "../../helpers/utils";

const Links = ({ phenomenon }) => {
  return phenomenon?.links && !isEmpty(phenomenon) ? (
    <div className="phen-card-tw-mt-6">
      <h4 className="phen-card-tw-text-links-title phen-card-tw-font-bold phen-card-tw-mb-4">Links</h4>
      {phenomenon?.links?.map((link) => (
        <>
          <a
            href="https://fortune.com/2021/11/23/south-korea-culture-success-bts-kpop-netflix-kdrama-squid-game-ramon-pacheco-pardo/"
            target="_blank"
            rel="noreferrer"
            className="phen-card-tw-text-blue phen-card-tw-text-body-text"
          >
            {/* https://fortune.com/2021/11/23/south-korea-culture-success-bts-kpop-netflix-kdrama-squid-game-ramon-pacheco-pardo/ */}
            {link?.url}
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
