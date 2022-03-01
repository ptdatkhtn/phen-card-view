import React ,{useState, useEffect} from "react";
import { getPhenomenaTypes } from '@sangre-fp/connectors/drupal-api'
import { isEmpty } from "../../helpers/utils";
import { finalTranslations } from "../../localTranslation";
import { phenomenonColor } from "../../helpers/phenomenonColor";
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
      <div className="phen-card-tw-my-6">
        <h2 className="phen-card-tw-text-h2-title phen-card-tw-font-bold phen-card-tw-mb-5">{lang === 'fi' ? finalTranslations?.relatedPhenomenaSection?.fi : finalTranslations?.relatedPhenomenaSection?.en}</h2>
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
                  className="phen-card-tw-flex phen-card-tw-overflow-hidden phen-card-tw-break-words phen-card-tw-mb-2 hover:phen-card-tw-no-underline"
                  key={phe.id}
                >
                  { 
                    phenomenon?.['color'] === 'none' && <div className="phen-card-tw-w-8 phen-card-tw-h-8 phen-card-tw-text-center"><div className={`phen-card-tw-mt-0.5 icon-issue ${iconClassName}`}></div></div>
                  }
                  {
                    phenomenon?.['color'] !== 'none' && <div className="phen-card-tw-w-8 phen-card-tw-h-8 phen-card-tw-text-center" ><div className={`phen-card-tw-mt-1 w_h_16 phen-card-tw-rounded-full phen-card-tw-mr-1 phen-card-tw-ml-6px`} style={{backgroundColor: `${backgroundColor}`}}></div></div>
                  } 
                <h4 className="phen-card-tw-ml-2 phen-card-tw-mt-0.5 phen-card-tw-text-h4-title phen-card-tw-font-bold">{phe.content.title}</h4>
                </a>
              )
          })}
        </div>
      </div>
    ) : null
  );
};

export default RelatedPhenomena;
