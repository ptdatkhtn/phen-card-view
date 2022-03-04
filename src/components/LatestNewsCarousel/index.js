import React from "react";
import { Carousel } from "react-responsive-carousel";
import { finalTranslations } from "../../localTranslation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './LatestNewsCarousel.module.css'
const LatestNews = ({lang}) => {
    return (
        <div className={styles.carouselWrapper}>
            <h3 className={styles.h3Title}>{lang === 'fi' ? finalTranslations?.latestNewsTitle?.fi : finalTranslations?.latestNewsTitle?.en}</h3>
            <Carousel autoPlay infiniteLoop showArrows={false} showThumbs={false} className={styles.carouselBackground}>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="">
                    <p className={styles.textDesc}>Business Wire 11.12.2020 23:04</p>
                    <h4 className={styles.h4Title}>
                        Updated Outcome and Treatment Benefit Data from MINDACT Study
                        Reinforce Real-World Value
                    </h4>
                </a>


                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="">
                    <p className={styles.textDesc}>Business Wire 11.12.2020 23:04</p>
                    <h4 className={styles.h4Title}>
                        Updated Outcome and Treatment Benefit Data from MINDACT Study
                        Reinforce Real-World Value
                    </h4>
                </a>

                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="">
                    <p className={styles.textDesc}>Business Wire 11.12.2020 23:04</p>
                    <h4 className={styles.h4Title}>
                        Updated Outcome and Treatment Benefit Data from MINDACT Study
                        Reinforce Real-World Value
                    </h4>
                </a>

            </Carousel>
        </div>
    );
};

export default LatestNews;
