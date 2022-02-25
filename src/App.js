import React, { useState, useEffect } from "react";
import { getPhenomenaTypes } from '@sangre-fp/connectors/drupal-api'
import {getPhenomena, getPhenomenonNewsByPhenId, getPhenomenaStatistic} from './helpers/phenomenonFetcher'
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
  const [phenomenonTypeData, setPhenomenonTypeData] = useState(null);
  const [langRadar, setLangRadar] = useState('en');
  const [phenNews, setPhenNews] = useState(null)
  useEffect(() => {
    const fetchPhenomenon = async () => {
      const [phenomenon, phenomenonType, crowdsourcedData] = await Promise.all(
        [
          getPhenomena({'phenomena': [pid], undefined, groups: [0, Number(gid)]}),
          getPhenomenaTypes(gid || 0),
          getPhenomenaStatistic(pid)
          
        ]
      )

      // statis
      console.log('1234555...', phenomenon)
      console.log('crowdsourcedDatacrowdsourcedData...', crowdsourcedData)

      const filteredByValue = Object.fromEntries(
        Object.entries(crowdsourcedData?.data).filter(([key, value]) => key?.toString() === pid?.toString()) )
        console.log('filteredByValue..', filteredByValue[pid])
      phenomenon.result[0]['statictis'] = filteredByValue[pid]
      setPhenomenonData(phenomenon.result[0])
      setLangRadar(phenomenon.result[0]?.language)
      setPhenomenonTypeData(phenomenonType.filter(type => type.id === phenomenon.result[0].content.type))
      setRelatedPhenomenaIds(phenomenon.result[0].content.related_phenomena)
    }
    try {
      gid && pid && fetchPhenomenon()
    } catch (error) {
      
    }
  }, [gid, rid, pid])
  
  useEffect(() => {
    

    // const fetchRelatedPhenomena = async () => {
    //   const relatedPhenomenaData = await getPhenomena({'phenomena': relatedPhenomenaIds, undefined, groups: [0, Number(gid)], size: relatedPhenomenaIds?.length || 10})
    //   setRelatedPhenomenaData(relatedPhenomenaData.result)
    // }

    const fetchNewsAndRelatedPhen = async () => {
      console.log('phenomenonData?.content?.feed_tags', phenomenonData?.content?.feed_tags)
      const [phenomenonNews, relatedPhenomenaData] = await Promise.all(
        [
          !!phenomenonData?.content?.feed_tags?.length && getPhenomenonNewsByPhenId(phenomenonData?.content?.feed_tags, [0, Number(gid)], langRadar),
          !!relatedPhenomenaIds?.length && getPhenomena({'phenomena': relatedPhenomenaIds, undefined, groups: [0, Number(gid)], size: relatedPhenomenaIds.length})
          
        ]
      )
  
      console.log('news..', phenomenonNews)
      console.log('relatedPhenomenaData..', relatedPhenomenaData)
      setRelatedPhenomenaData(relatedPhenomenaData.result)
      setPhenNews(phenomenonNews)
    }
    try {
      fetchNewsAndRelatedPhen()
    } catch (error) {
      
    }
  }, [relatedPhenomenaIds, gid, phenomenonData?.content?.feed_tags])
console.log('phenomenonData', phenomenonData)
  const completedPhenomenon = React.useMemo(() => {
    let phenTemp = {...phenomenonData?.content} ?? {}
    phenTemp['crowdsourced'] = !!phenomenonData && Number(phenomenonData?.statictis?.['year_median']?.toString()?.split('.')[0])
    phenTemp['content-type-alias'] = phenomenonTypeData && phenomenonTypeData[0].alias
    phenTemp['content-type-title'] = phenomenonTypeData && phenomenonTypeData[0].title
    phenTemp['color'] = phenomenonData && phenomenonTypeData && phenomenonData?.content?.type.includes('fp:doc-types') ? String(phenomenonTypeData[0].style.color): 'none'
    phenTemp['related-phenomena-data'] = relatedPhenomenaData ? relatedPhenomenaData : null
    return phenTemp
  }, [phenomenonData, phenomenonTypeData, relatedPhenomenaData])
  console.log('completedPhenomenon', completedPhenomenon)
  return (
    <div className="bg-white text-black container p-6 ">
      <CardHeader gid={gid} rid={rid} pid={pid} phenomenon={completedPhenomenon} lang={langRadar}/>
      <YoutubeImageEmbed embedId="rokGy0huYEA" phenomenon={completedPhenomenon} />
      <LatestNewsCarousel lang={langRadar}/>
      {
        rid && (
          <Rating gid={gid} rid={rid} pid={pid} lang={langRadar}/>
        )
      }
      {
        rid && (
          <Comments gid={gid} rid={rid} pid={pid} lang={langRadar} phenomenon={completedPhenomenon}/>
        )
      }
      <BodyCard phenomenon={completedPhenomenon} />
      <Links />
      <RelatedPhenomena phenomenon={completedPhenomenon} gid={gid} rid={rid} pid={pid} lang={langRadar}/>
      <LatestNews phenomenon={completedPhenomenon} lang={langRadar}/>
      <CardFooter lang={langRadar}/>
    </div>
  )
}
export default App;
