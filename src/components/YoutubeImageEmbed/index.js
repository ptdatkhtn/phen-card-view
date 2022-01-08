import React from "react";
import { isEmpty } from "../../helpers/utils";


const YoutubeImageEmbed = ({ embedId, phenomenon }) => {
    console.log('embedId', embedId)
    return (
        (phenomenon && !isEmpty(phenomenon)) ? (
            <>
                <div className="overflow-hidden pb-56.25% relative h-0" >
                    {phenomenon?.media?.video && <iframe
                        className="left-0 top-0 h-100% w-100% absolute"
                        width="853"
                        height="480"
                        // src={`https://www.youtube.com/embed/${embedId}`}
                        // src={`https://www.youtube.com/embed/${phenomenon?.media.video.split('/')[2]}`}
                        // src={`${phenomenon?.media.video}`}
                        src={phenomenon?.media?.video}

                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />}
                </div>
                {phenomenon?.media?.text &&<p className="mt-2 text-p-desc italic">{phenomenon?.media?.text}</p>}
                {phenomenon?.media?.image && <img className="h-100% w-100% mt-4" src={phenomenon?.media?.image} alt="nature"/>}
            </>
        ) :null
    );
}
export default YoutubeImageEmbed;