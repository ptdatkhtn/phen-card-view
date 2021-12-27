import React from "react";
import { phenomenonColor } from "../../helpers/phenomenonColor";
const RelatedPhenomena = () => {
  // const {iconClassName, backgroundColor} = phenomenonColor(phenomenon);

    return (
        /* { FP TYPE
             phenomenon?.['color'] === 'none' && <div className="w-8 h-8 text-center"><div className={`mt-0.5 icon-issue summary`}></div></div>
          }
          {CUSTOM TYPE
            phenomenon?.['color'] !== 'none' && <div className="w-8 h-8 text-center" ><div className={`mt-1 w-6 h-6 rounded-full mr-1 ml-1`} style={{backgroundColor: 'red'}}></div></div>
          } 
          
          */
        <div className="my-8">
            <h2 className="text-h2-title font-bold mb-7">Related Phenomena</h2>
            <div className="pl-10">
                <a
                    href="https://hbr.org/2020/05/unlock-the-hidden-value-of-your-data"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="flex overflow-hidden break-words mb-2"
                >
                    <div className="w-8 h-8 text-center"><div className={`mt-0.5 icon-issue summary`}></div></div>
                    <h4 className="ml-3 text-h4-title font-bold">Safe Data Havens</h4>
                </a>
                <a
                    href="https://hbr.org/2020/05/unlock-the-hidden-value-of-your-data"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="flex overflow-hidden break-words mb-2"
                >
                    <div className="w-8 h-8 text-center" ><div className={`mt-1 w-6 h-6 rounded-full mr-1 ml-1`} style={{backgroundColor: 'red'}}></div></div>
                    <h4 className="ml-3 text-h4-title font-bold">Algorithmic Biology</h4>
                </a>
                <a
                    href="https://hbr.org/2020/05/unlock-the-hidden-value-of-your-data"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="flex overflow-hidden break-words mb-2"
                >
                    <div className="w-8 h-8 text-center"><div className={`mt-0.5 icon-issue cooling`}></div></div>
                    <h4 className="ml-3 text-h4-title font-bold">
                        Internet of Things (IoT)
                    </h4>
                </a>
            </div>
        </div>
    );
};

export default RelatedPhenomena;
