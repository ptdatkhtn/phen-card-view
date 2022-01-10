import React, { useState, useEffect } from "react";
import { getPhenomenaTypes } from '@sangre-fp/connectors/drupal-api'
import {getPhenomena, getRadarData} from './helpers/phenomenonFetcher'
import YoutubeImageEmbed from "./components/YoutubeImageEmbed";
import LatestNewsCarousel from "./components/LatestNewsCarousel";
import Comments from "./components/Comments";
import CardHeader from './components/CardHeader'
import BodyCard from "./components/CardBody";
import RelatedPhenomena from "./components/RelatedPhenomena";
import LatestNews from "./components/LatestNews";
import CardFooter from "./components/CardFooter";
import Links from "./components/Links";
import Rating from './components/Rating/Rating'

const App = ({gid, rid, pid}) => {
  const [phenomenonData, setPhenomenonData] = useState(null);
  const [relatedPhenomenaIds, setRelatedPhenomenaIds] = useState(null);
  const [relatedPhenomenaData, setRelatedPhenomenaData] = useState(null);
  const [radarData, setRadarData] = useState(null);
  const [phenomenonTypeData, setPhenomenonTypeData] = useState(null);
  const [langRadar, setLangRadar] = useState('en');

  useEffect(() => {
    const fetchPhenomenon = async () => {
      const [phenomenon, radarData, phenomenonType] = await Promise.all(
        [
          getPhenomena({'phenomena': [pid], undefined, groups: [0, Number(gid)]}),
          getRadarData(rid),
          getPhenomenaTypes(gid || 0),
          
        ]
      )
      
      setPhenomenonData(phenomenon.result[0].content)
      setLangRadar(phenomenon.result[0]?.language)
      setRadarData(radarData.data.phenomena.filter(phe => phe.phenomenon_uuid === phenomenon.result[0].id))
      setPhenomenonTypeData(phenomenonType.filter(type => type.id === phenomenon.result[0].content.type))
      setRelatedPhenomenaIds(phenomenon.result[0].content.related_phenomena)

    }
    try {
      gid && rid && pid && fetchPhenomenon()
    } catch (error) {
      
    }
  }, [gid, rid, pid])
  
  useEffect(() => {
    const fetchRelatedPhenomena = async () => {
      const relatedPhenomenaData = await getPhenomena({'phenomena': relatedPhenomenaIds, undefined, groups: [0, Number(gid)], size: relatedPhenomenaIds.length})
      setRelatedPhenomenaData(relatedPhenomenaData.result)
    }
    try {
      relatedPhenomenaIds.length > 0 && fetchRelatedPhenomena()
    } catch (error) {
      
    }
  }, [relatedPhenomenaIds, gid])
console.log('phenomenonData', phenomenonData)
  const completedPhenomenon = React.useMemo(() => {
    let phenTemp = phenomenonData ?? {}
    phenTemp['crowdsourced'] = radarData && Number(String(radarData[0]?.time).split('.')[0])
    phenTemp['content-type-alias'] = phenomenonTypeData && phenomenonTypeData[0].alias
    phenTemp['content-type-title'] = phenomenonTypeData && phenomenonTypeData[0].title
    phenTemp['color'] = phenomenonData && phenomenonTypeData && phenomenonData.type.includes('fp:doc-types') ? String(phenomenonTypeData[0].style.color): 'none'
    phenTemp['related-phenomena-data'] = relatedPhenomenaData && relatedPhenomenaData
    return phenTemp
  }, [phenomenonData, radarData, phenomenonTypeData, relatedPhenomenaData])

  return (
    <div className="bg-white text-black container p-6 ">
      <CardHeader gid={gid} rid={rid} pid={pid} phenomenon={completedPhenomenon} lang={langRadar}/>
      <YoutubeImageEmbed embedId="rokGy0huYEA" phenomenon={completedPhenomenon} />
      <LatestNewsCarousel lang={langRadar}/>
      <Rating gid={gid} rid={rid} pid={pid} lang={langRadar}/>
      <Comments gid={gid} rid={rid} pid={pid} lang={langRadar} phenomenon={completedPhenomenon}/>
      <BodyCard phenomenon={completedPhenomenon} />
      <Links />
      <RelatedPhenomena phenomenon={completedPhenomenon} gid={gid} rid={rid} pid={pid} lang={langRadar}/>
      <LatestNews lang={langRadar}/>
      <CardFooter />
    </div>
  )
}
export default App;
