import React from "react";
import Voting from '../Voting/Voting'
const CardHeader = ({gid, rid, pid}) => {
  return (
    <>
      <h1 className="mt-2 mb-12 text-h1-title font-bold">
        Rising Value of Data
      </h1>
      <div className="my-6 flex justify-between">
        <div className="flex">
          <div className="w-6 h-6 rounded-full bg-gray-500 mt-2"></div>
          <p className="ml-3 text-field-text">Strengthening</p>
          <span className="mx-6 mt-2 border-l-2 border-black h-6"></span>
          <div>
            <p className="text-field-text">2024-2028</p>
            <p className="text-crowdsourced">Crowdsourced: 2025</p>
          </div>
        </div>

        <div className="w-32 flex justify-center">
          {/* for voting result */}
          {/* <div className="w-12 h-12 rounded-full bg-black"></div>
          <div className="w-12 h-12 rounded-full bg-black"></div>
          <p>1</p> */}
          <Voting gid={gid} rid={rid} pid={pid}/>
        </div>
      </div>
      <p className="mb-6 text-lead-text font-bold">
        Data has become the new strategic raw material for the world economy,
        replacing oil. All through the previous century, the value of data was
        mostly indirect. In other words, its value was primarily determined by
        how well it helped to boost the oil-based production. This century, the
        data itself is becoming not only the most important factor of production
        but also the most valuable raw material. In other words, we are moving
        into a data economy, which will open doors to success for completely new
        kinds of players.
      </p>
    </>
  );
};

export default CardHeader;
