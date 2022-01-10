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
      <div className="my-8">
        <h2 className="text-h2-title font-bold mb-7">{lang === 'fi' ? finalTranslations?.relatedPhenomenaSection?.fi : finalTranslations?.relatedPhenomenaSection?.en}</h2>
        <div className="pl-10">
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
                  className="flex overflow-hidden break-words mb-2 hover:no-underline"
                  key={phe.id}
                >
                  { 
                    phenomenon?.['color'] === 'none' && <div className="w-8 h-8 text-center"><div className={`mt-0.5 icon-issue ${iconClassName}`}></div></div>
                  }
                  {
                    phenomenon?.['color'] !== 'none' && <div className="w-8 h-8 text-center" ><div className={`mt-1 w-6 h-6 rounded-full mr-1 ml-1`} style={{backgroundColor: `${backgroundColor}`}}></div></div>
                  } 
                <h4 className="ml-3 text-h4-title font-bold">{phe.content.title}</h4>
                </a>
              )
          })}
        </div>
      </div>
    ) : null
  );
};

export default RelatedPhenomena;
