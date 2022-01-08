import React from "react";
import { isEmpty } from "../../helpers/utils";
import Voting from '../Voting/Voting'
import { phenomenonColor } from "../../helpers/phenomenonColor";

const CardHeader = ({gid, rid, pid, phenomenon}) => {
  const {iconClassName, backgroundColor} = phenomenonColor(phenomenon);

  return (
    (phenomenon && !isEmpty(phenomenon)) ? (
    <>
      <h1 className="mt-2 mb-12 text-h1-title font-bold">
        {phenomenon?.short_title}
      </h1>
      <div className="my-6 flex justify-between">
        <div className="flex">
          {
             phenomenon?.['color'] === 'none' && <div className={`mt-1 icon-issue ${iconClassName}`}></div>
          }
          {
            phenomenon?.['color'] !== 'none' && <div className='mt-2 w-6 h-6 rounded-full' style={{backgroundColor: `${backgroundColor}`}}></div>
          }
          
          {/* <div className={`mt-2 w-6 h-6 rounded-full`} style={{backgroundColor: 'red'}}></div> */}
          {/* <div className={`mt-1 icon-issue summary`}></div> */}


          <p className="ml-3 text-field-text">{phenomenon['content-type-title']}</p>
          <span className="mx-6 mt-2 border-l-2 border-black h-6"></span>
          <div>
            {phenomenon?.time_range && <p className="text-field-text">{`${phenomenon?.time_range?.min}-${phenomenon?.time_range?.max}`}</p>}
            {phenomenon?.crowdsourced && <p className="text-crowdsourced">Crowdsourced: {phenomenon?.crowdsourced}</p>}
          </div>
        </div>

        <div className="w-32 flex justify-center">
          <Voting gid={gid} rid={rid} pid={pid}/>
        </div>
      </div>
      <p className="mb-6 text-lead-text font-bold" dangerouslySetInnerHTML={{__html: phenomenon?.summary}}>
      </p>
    </>
    ) : null
  );
};

export default CardHeader;
