import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const LatestNews = () => {
    return (
        <div className="mt-8">
            <h3 className="text-h3-title font-bold mb-4">Latest News</h3>
            <Carousel autoPlay infiniteLoop showArrows={false} showThumbs={false} className="bg-lightgray">
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="">
                    <p className="text-meta text-grayText">Business Wire 11.12.2020 23:04</p>
                    <h4 className="font-semibold text-body-text">
                        Updated Outcome and Treatment Benefit Data from MINDACT Study
                        Reinforce Real-World Value
                    </h4>
                </a>


                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="">
                    <p className="text-meta text-grayText">Business Wire 11.12.2020 23:04</p>
                    <h4 className="font-semibold text-body-text">
                        Updated Outcome and Treatment Benefit Data from MINDACT Study
                        Reinforce Real-World Value
                    </h4>
                </a>

                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="">
                    <p className="text-meta text-grayText">Business Wire 11.12.2020 23:04</p>
                    <h4 className="font-semibold text-body-text">
                        Updated Outcome and Treatment Benefit Data from MINDACT Study
                        Reinforce Real-World Value
                    </h4>
                </a>

            </Carousel>
        </div>
    );
};

export default LatestNews;
