import React from "react";
import { isEmpty } from "../../helpers/utils";
import Voting from '../Voting/Voting'
import { phenomenonColor } from "../../helpers/phenomenonColor";
import {translatePhenomenonAlias} from "../../helpers/utils"
import {finalTranslations} from '../../localTranslation'
import styles from "./CardHeader.module.css"
const CardHeader = ({gid, rid, pid, phenomenon, lang}) => {
  const {iconClassName, backgroundColor} = phenomenonColor(phenomenon);
  const {translationTitle} = translatePhenomenonAlias(phenomenon, lang);
  return (
    (phenomenon && !isEmpty(phenomenon)) ? (
    <>
      <h1 className={styles.h1Title}>
        {phenomenon?.short_title}
      </h1>
      <div className={styles.cardHeaderWrapper}>
        <div className={styles.headerWrapper}>
          {
             phenomenon?.['color'] === 'none' && <div className={`icon-issue ${iconClassName}`} style={{marginTop: '2.5px'}}></div>
          }
          {
            phenomenon?.['color'] !== 'none' && <div className=' w_h_16' style={{backgroundColor: `${backgroundColor}`, marginTop: '6px', borderRadius: '9999px'}}></div>
          }
          <p className={styles.phenTitle}>{phenomenon?.['color'] === 'none' ? translationTitle : phenomenon?.['content-type-title']}</p>
          <span className={styles.verticalLine}></span>
          <div>
            {phenomenon?.time_range && <p className={styles.timeRange}>{`${phenomenon?.time_range?.min}-${phenomenon?.time_range?.max}`}</p>}
            {phenomenon?.crowdsourced && <p className={styles.crowdsourced}>{lang === 'fi' ? finalTranslations?.crowdSourced?.fi : finalTranslations?.crowdSourced?.en} {phenomenon?.crowdsourced}</p>}
          </div>
        </div>

        <div className={styles.votingWrapper}>
          {
            !!rid && (
              <Voting gid={gid} rid={rid} pid={pid}/>
            )
          }
        </div>
      </div>
      <p className={styles.summaryData} dangerouslySetInnerHTML={{__html: phenomenon?.summary}}>
      </p>
    </>
    ) : null
  );
};

export default CardHeader;
