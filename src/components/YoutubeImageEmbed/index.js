import React from "react";
import { isEmpty } from "../../helpers/utils";


const YoutubeImageEmbed = ({ embedId, phenomenon }) => {
    return (
        (phenomenon && !isEmpty(phenomenon)) ? (
            <>
                {phenomenon?.media?.video && <div className="phen-card-tw-overflow-hidden phen-card-tw-pb-56.25% phen-card-tw-relative phen-card-tw-h-0" >
                     <iframe
                        className="phen-card-tw-left-0 phen-card-tw-top-0 phen-card-tw-h-100% phen-card-tw-w-100% phen-card-tw-absolute"
                        width="853"
                        height="480"
                        src={phenomenon?.media?.video}

                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>}
                {phenomenon?.media?.text &&<p className="phen-card-tw-mt-2 phen-card-tw-text-p-desc phen-card-tw-italic">{phenomenon?.media?.text}</p>}
                {phenomenon?.media?.image && <img className="phen-card-tw-h-100% phen-card-tw-w-100% phen-card-tw-mt-4" src={phenomenon?.media?.image} alt="nature"/>}
            </>
        ) :null
    );
}
export default YoutubeImageEmbed;