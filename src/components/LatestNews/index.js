import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { finalTranslations } from "../../localTranslation";
const LatestNews = ({lang}) => {
    return (
        <div className="mt-8">
            <h2 className="text-h2-title font-bold mb-6">{lang === 'fi' ? finalTranslations?.latestNewsTitle?.fi : finalTranslations?.latestNewsTitle?.en}</h2>
            <ul className="pl-10">
                <li className="mb-6">
                    <a
                        className="flex hover:no-underline"
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://www.globalbankingandfinance.com/category/news/updated-outcome-and-treatment-benefit-data-from-mindact-study-reinforce-real-world-value-of-mammaprint-for-clinical-low-risk-breast-cancer-patients-at-sabcs-2020/"
                    >
                        <span className="af-custom-clock-o text-clock-icon mr-3 mt-2"></span>
                        <div>
                            <p className="text-meta text-grayText">
                                Business Wire 11.12.2020 23:04
                            </p>
                            <h4 className="text-body-text font-bold text-blackText hover:underline mb-2">
                                NEWSUpdated Outcome and Treatment Benefit Data from MINDACT
                                Study Reinforce Real-World Value of MammaPrint® for Clinical Low
                                Risk Breast Cancer Patients at SABCS 2020
                            </h4>
                            <p className="text-p-desc text-blackText mb-2">
                                Agendia, Inc., a world leader in precision oncology for breast
                                cancer, today announced that additional data from its
                                groundbreaking MINDACT study will be highlighted in an oral
                                presentation by Laura van t Veer, Ph.D., Co-founder and Chief
                                Research Officer, at the 2020 San Antonio Breast Cancer
                                Symposium (SABCS 2020). These data highlight the ability of
                                MammaPrint
                            </p>
                        </div>
                    </a>
                </li>
                <li className="mb-6">
                    <a
                        className="flex hover:no-underline"
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://www.globalbankingandfinance.com/category/news/updated-outcome-and-treatment-benefit-data-from-mindact-study-reinforce-real-world-value-of-mammaprint-for-clinical-low-risk-breast-cancer-patients-at-sabcs-2020/"
                    >
                        <span className="af-custom-clock-o text-clock-icon mr-3 mt-2"></span>
                        <div>
                            <p className="text-meta text-grayText">
                                Business Wire 11.12.2020 23:04
                            </p>
                            <h4 className="text-body-text font-bold text-blackText hover:underline mb-2">
                                NEWSUpdated Outcome and Treatment Benefit Data from MINDACT
                                Study Reinforce Real-World Value of MammaPrint® for Clinical Low
                                Risk Breast Cancer Patients at SABCS 2020
                            </h4>
                            <p className="text-p-desc text-blackText  mb-2">
                                Agendia, Inc., a world leader in precision oncology for breast
                                cancer, today announced that additional data from its
                                groundbreaking MINDACT study will be highlighted in an oral
                                presentation by Laura van t Veer, Ph.D., Co-founder and Chief
                                Research Officer, at the 2020 San Antonio Breast Cancer
                                Symposium (SABCS 2020). These data highlight the ability of
                                MammaPrint
                            </p>
                        </div>
                    </a>
                </li>
                <li className="mb-6">
                    <a
                        className="flex hover:no-underline"
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://www.globalbankingandfinance.com/category/news/updated-outcome-and-treatment-benefit-data-from-mindact-study-reinforce-real-world-value-of-mammaprint-for-clinical-low-risk-breast-cancer-patients-at-sabcs-2020/"
                    >
                        <span className="af-custom-clock-o text-clock-icon mr-3 mt-2"></span>
                        <div>
                            <p className="text-meta text-grayText">
                                Business Wire 11.12.2020 23:04
                            </p>
                            <h4 className="text-body-text font-bold text-blackText hover:underline mb-2">
                                NEWSUpdated Outcome and Treatment Benefit Data from MINDACT
                                Study Reinforce Real-World Value of MammaPrint® for Clinical Low
                                Risk Breast Cancer Patients at SABCS 2020
                            </h4>
                            <p className="text-p-desc text-blackText mb-2">
                                Agendia, Inc., a world leader in precision oncology for breast
                                cancer, today announced that additional data from its
                                groundbreaking MINDACT study will be highlighted in an oral
                                presentation by Laura van t Veer, Ph.D., Co-founder and Chief
                                Research Officer, at the 2020 San Antonio Breast Cancer
                                Symposium (SABCS 2020). These data highlight the ability of
                                MammaPrint
                            </p>
                        </div>
                    </a>
                </li>
                <li className="mb-6">
                    <a
                        className="flex hover:no-underline"
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://www.globalbankingandfinance.com/category/news/updated-outcome-and-treatment-benefit-data-from-mindact-study-reinforce-real-world-value-of-mammaprint-for-clinical-low-risk-breast-cancer-patients-at-sabcs-2020/"
                    >
                        <span className="af-custom-clock-o text-clock-icon mr-3 mt-2"></span>
                        <div>
                            <p className="text-meta text-grayText">
                                Business Wire 11.12.2020 23:04
                            </p>
                            <h4 className="text-body-text font-bold text-blackText hover:underline mb-2">
                                NEWSUpdated Outcome and Treatment Benefit Data from MINDACT
                                Study Reinforce Real-World Value of MammaPrint® for Clinical Low
                                Risk Breast Cancer Patients at SABCS 2020
                            </h4>
                            <p className="text-p-desc text-blackText mb-2">
                                Agendia, Inc., a world leader in precision oncology for breast
                                cancer, today announced that additional data from its
                                groundbreaking MINDACT study will be highlighted in an oral
                                presentation by Laura van t Veer, Ph.D., Co-founder and Chief
                                Research Officer, at the 2020 San Antonio Breast Cancer
                                Symposium (SABCS 2020). These data highlight the ability of
                                MammaPrint
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default LatestNews;
