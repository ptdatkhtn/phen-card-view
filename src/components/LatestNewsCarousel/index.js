import React from "react";
import { Carousel } from "react-responsive-carousel";
import { finalTranslations } from "../../localTranslation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const LatestNews = ({lang}) => {
    return (
        <div className="phen-card-tw-mt-5 phen-card-tw-mb-5">
            <h3 className="phen-card-tw-text-h3-title phen-card-tw-font-bold phen-card-tw-mb-3">{lang === 'fi' ? finalTranslations?.latestNewsTitle?.fi : finalTranslations?.latestNewsTitle?.en}</h3>
            <Carousel autoPlay infiniteLoop showArrows={false} showThumbs={false} className="phen-card-tw-bg-lightgray">
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="">
                    <p className="phen-card-tw-text-meta phen-card-tw-text-grayText hover:phen-card-tw-no-underline phen-card-tw-mb-0.5">Business Wire 11.12.2020 23:04</p>
                    <h4 className="phen-card-tw-font-semibold phen-card-tw-text-body-text phen-card-tw-mb-4px">
                        Updated Outcome and Treatment Benefit Data from MINDACT Study
                        Reinforce Real-World Value
                    </h4>
                </a>


                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="">
                    <p className="phen-card-tw-text-meta phen-card-tw-text-grayText hover:phen-card-tw-no-underline phen-card-tw-mb-0.5">Business Wire 11.12.2020 23:04</p>
                    <h4 className="phen-card-tw-font-semibold phen-card-tw-text-body-text phen-card-tw-mb-4px">
                        Updated Outcome and Treatment Benefit Data from MINDACT Study
                        Reinforce Real-World Value
                    </h4>
                </a>

                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="">
                    <p className="phen-card-tw-text-meta phen-card-tw-text-grayText hover:phen-card-tw-no-underline phen-card-tw-mb-0.5">Business Wire 11.12.2020 23:04</p>
                    <h4 className="phen-card-tw-font-semibold phen-card-tw-text-body-text phen-card-tw-mb-4px">
                        Updated Outcome and Treatment Benefit Data from MINDACT Study
                        Reinforce Real-World Value
                    </h4>
                </a>

            </Carousel>
        </div>
    );
};

export default LatestNews;
