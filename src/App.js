import React, { useState, useEffect } from "react";

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
  console.log(gid, rid, pid)
  return (
    <div className="bg-white text-black container p-6 ">
      <CardHeader gid={gid} rid={rid} pid={pid}/>
      <YoutubeImageEmbed embedId="rokGy0huYEA" />
      <LatestNewsCarousel />
      <Rating gid={gid} rid={rid} pid={pid}/>
      <Comments gid={gid} rid={rid} pid={pid}/>
      <BodyCard />
      <Links />
      <RelatedPhenomena />
      <LatestNews />
      <CardFooter />
    </div>
  )
}
export default App;
