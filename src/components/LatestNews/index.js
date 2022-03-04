import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { finalTranslations } from "../../localTranslation";
import styles from './LatestNews.module.css'
import clsx from "clsx";
const LatestNews = ({lang}) => {
    return (
        <div className={styles.latestNewsWrapper}>
            <h2 className={styles.h2Title}>{lang === 'fi' ? finalTranslations?.latestNewsTitle?.fi : finalTranslations?.latestNewsTitle?.en}</h2>
            <ul className={styles.ulTag}>
                <li className={styles.liTag}>
                    <a
                        className={styles.newsLink}
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://www.globalbankingandfinance.com/category/news/updated-outcome-and-treatment-benefit-data-from-mindact-study-reinforce-real-world-value-of-mammaprint-for-clinical-low-risk-breast-cancer-patients-at-sabcs-2020/"
                    >
                        <span className={clsx(styles.clockIcon, 'af-custom-clock-o')}></span>
                        <div>
                            <p className={styles.timeStampText}>
                                Business Wire 11.12.2020 23:04
                            </p>
                            <h4 className={styles.h4Title}>
                                NEWSUpdated Outcome and Treatment Benefit Data from MINDACT
                                Study Reinforce Real-World Value of MammaPrint® for Clinical Low
                                Risk Breast Cancer Patients at SABCS 2020
                            </h4>
                            <p className={styles.bodyText}>
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
                <li className={styles.liTag}>
                    <a
                        className={styles.newsLink}
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://www.globalbankingandfinance.com/category/news/updated-outcome-and-treatment-benefit-data-from-mindact-study-reinforce-real-world-value-of-mammaprint-for-clinical-low-risk-breast-cancer-patients-at-sabcs-2020/"
                    >
                        <span className={clsx(styles.clockIcon, 'af-custom-clock-o')}></span>
                        <div>
                            <p className={styles.timeStampText}>
                                Business Wire 11.12.2020 23:04
                            </p>
                            <h4 className={styles.h4Title}>
                                NEWSUpdated Outcome and Treatment Benefit Data from MINDACT
                                Study Reinforce Real-World Value of MammaPrint® for Clinical Low
                                Risk Breast Cancer Patients at SABCS 2020
                            </h4>
                            <p className={styles.bodyText}>
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
                <li className={styles.liTag}>
                    <a
                        className={styles.newsLink}
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://www.globalbankingandfinance.com/category/news/updated-outcome-and-treatment-benefit-data-from-mindact-study-reinforce-real-world-value-of-mammaprint-for-clinical-low-risk-breast-cancer-patients-at-sabcs-2020/"
                    >
                        <span className={clsx(styles.clockIcon, 'af-custom-clock-o')}></span>
                        <div>
                            <p className={styles.timeStampText}>
                                Business Wire 11.12.2020 23:04
                            </p>
                            <h4 className={styles.h4Title}>
                                NEWSUpdated Outcome and Treatment Benefit Data from MINDACT
                                Study Reinforce Real-World Value of MammaPrint® for Clinical Low
                                Risk Breast Cancer Patients at SABCS 2020
                            </h4>
                            <p className={styles.bodyText}>
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
                <li className={styles.liTag}>
                    <a
                        className={styles.newsLink}
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://www.globalbankingandfinance.com/category/news/updated-outcome-and-treatment-benefit-data-from-mindact-study-reinforce-real-world-value-of-mammaprint-for-clinical-low-risk-breast-cancer-patients-at-sabcs-2020/"
                    >
                        <span className={clsx(styles.clockIcon, 'af-custom-clock-o')}></span>
                        <div>
                            <p className={styles.timeStampText}>
                                Business Wire 11.12.2020 23:04
                            </p>
                            <h4 className={styles.h4Title}>
                                NEWSUpdated Outcome and Treatment Benefit Data from MINDACT
                                Study Reinforce Real-World Value of MammaPrint® for Clinical Low
                                Risk Breast Cancer Patients at SABCS 2020
                            </h4>
                            <p className={styles.bodyText}>
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
