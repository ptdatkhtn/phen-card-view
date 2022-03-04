import React ,{useState, useEffect} from "react";
import { getPhenomenaTypes } from '@sangre-fp/connectors/drupal-api'
import { isEmpty } from "../../helpers/utils";
import { finalTranslations } from "../../localTranslation";
import { phenomenonColor } from "../../helpers/phenomenonColor";
import styles from './RelatedPhenomena.module.css'
const RelatedPhenomena = ({ phenomenon, gid, rid, pid, lang }) => {
  const [phenomenaTypesData, setPhenomenaTypesData] = useState(null);
  useEffect(() => {
    const fetchPhenomenaTypes = async () => {
      const [ phenomenaTypes] = await Promise.all(
        [
          getPhenomenaTypes(gid || 0),
          
        ]
      )
      
      
      setPhenomenaTypesData(phenomenaTypes)

    }
    try {
      gid && rid && pid && fetchPhenomenaTypes()
    } catch (error) {
      
    }
  }, [gid, rid, pid])

  return (
        !!phenomenon && !isEmpty(phenomenon) && phenomenon["related-phenomena-data"] && phenomenon["related-phenomena-data"].length > 0 ? (
      <div className={styles.relatedPhenomenaWrapper}>
        <h2 className={styles.h2Title}>{lang === 'fi' ? finalTranslations?.relatedPhenomenaSection?.fi : finalTranslations?.relatedPhenomenaSection?.en}</h2>
        <div className="">
          {phenomenon['related-phenomena-data'].map(phe => {
              phenomenaTypesData && phenomenaTypesData?.map(type => {
                if(type.id === phe.content.type) {
                  phe['content-type-alias'] = type.alias;
                  phe['content-type-title'] = type.title; 
                  phe['color'] = phe.content.type.includes('fp:doc-types') ? String(type.style.color): 'none'
                }
              })
              const {iconClassName, backgroundColor} = phenomenonColor(phe);
              return (
                <a
                  href="#abc"
                  rel="noreferrer noopener"
                  target="_blank"
                  className={styles.phenLink}
                  key={phe.id}
                >
                  { 
                    phenomenon?.['color'] === 'none' && <div className={styles.phenWrapper}><div className={`icon-issue ${iconClassName}`} style={{marginTop: '1px'}}></div></div>
                  }
                  {
                    phenomenon?.['color'] !== 'none' && <div className={styles.phenWrapper} ><div className={styles.customPhen} style={{backgroundColor: `${backgroundColor}`}}></div></div>
                  } 
                <h4 className={styles.phenName}>{phe.content.title}</h4>
                </a>
              )
          })}
        </div>
      </div>
    ) : null
  );
};

export default RelatedPhenomena;
