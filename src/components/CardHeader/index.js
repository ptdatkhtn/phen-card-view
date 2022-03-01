import React from "react";
import { isEmpty } from "../../helpers/utils";
import Voting from '../Voting/Voting'
import { phenomenonColor } from "../../helpers/phenomenonColor";
import {translatePhenomenonAlias} from "../../helpers/utils"
import {finalTranslations} from '../../localTranslation'

const CardHeader = ({gid, rid, pid, phenomenon, lang}) => {
  const {iconClassName, backgroundColor} = phenomenonColor(phenomenon);
  const {translationTitle} = translatePhenomenonAlias(phenomenon, lang);
  return (
    (phenomenon && !isEmpty(phenomenon)) ? (
    <>
      <h1 className="phen-card-tw-mt-5px phen-card-tw-mb-8 phen-card-tw-text-h1-title phen-card-tw-font-bold">
        {phenomenon?.short_title}
      </h1>
      <div className="phen-card-tw-my-4 phen-card-tw-flex phen-card-tw-justify-between">
        <div className="phen-card-tw-flex">
          {
             phenomenon?.['color'] === 'none' && <div className={`phen-card-tw-mt-2.5px icon-issue ${iconClassName}`}></div>
          }
          {
            phenomenon?.['color'] !== 'none' && <div className='phen-card-tw-mt-2 w_h_16 phen-card-tw-rounded-full' style={{backgroundColor: `${backgroundColor}`}}></div>
          }
          <p className="phen-card-tw-mt-4px phen-card-tw-ml-5px phen-card-tw-text-field-text">{phenomenon?.['color'] === 'none' ? translationTitle : phenomenon?.['content-type-title']}</p>
          <span className="phen-card-tw-mx-3 phen-card-tw-mt-2 phen-card-tw-border-l-2 phen-card-tw-border-black phen-card-tw-h-4"></span>
          <div>
            {phenomenon?.time_range && <p className="phen-card-tw-text-field-text">{`${phenomenon?.time_range?.min}-${phenomenon?.time_range?.max}`}</p>}
            {phenomenon?.crowdsourced && <p className="phen-card-tw-text-crowdsourced">{lang === 'fi' ? finalTranslations?.crowdSourced?.fi : finalTranslations?.crowdSourced?.en} {phenomenon?.crowdsourced}</p>}
          </div>
        </div>

        <div className="phen-card-tw-w-32 phen-card-tw-flex phen-card-tw-justify-center">
          {
            !!rid && (
              <Voting gid={gid} rid={rid} pid={pid}/>
            )
          }
        </div>
      </div>
      <p className="phen-card-tw-mb-4 phen-card-tw-text-lead-text phen-card-tw-font-bold" dangerouslySetInnerHTML={{__html: phenomenon?.summary}}>
      </p>
    </>
    ) : null
  );
};

export default CardHeader;
