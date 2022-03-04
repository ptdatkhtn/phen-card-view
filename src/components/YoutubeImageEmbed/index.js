import React from "react";
import { isEmpty } from "../../helpers/utils";
import styles from './YoutubeImageEmbed.module.css'

const YoutubeImageEmbed = ({ embedId, phenomenon }) => {
    return (
        (phenomenon && !isEmpty(phenomenon)) ? (
            <>
                {phenomenon?.media?.video && <div className={styles.videoIframeWrapper} >
                     <iframe
                        className={styles.iframeForVideo}
                        width="853"
                        height="480"
                        src={phenomenon?.media?.video}

                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>}
                {phenomenon?.media?.text &&<p className={styles.mediaText}>{phenomenon?.media?.text}</p>}
                {phenomenon?.media?.image && <img className={styles.mediaImage} src={phenomenon?.media?.image} alt="nature"/>}
            </>
        ) :null
    );
}
export default YoutubeImageEmbed;