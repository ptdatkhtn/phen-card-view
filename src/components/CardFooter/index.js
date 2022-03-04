import React from "react";
import { finalTranslations } from "../../localTranslation";
import clsx from "clsx";
import styles from './CardFooter.module.css'
const CardFooter = ({
    lang
}) => {
    const EdittedTitle = lang === 'fi' ? finalTranslations?.editted?.fi :finalTranslations?.editted?.en;
    const DateEditted = `27.05.2021`
    const UserEditted = `Futures Platform`

    return (
        <div className={styles.cardFooterWrapper}>
            <p className={styles.footerText}>
                {/* Edited 27.05.2021 by Futures Platform Päivitetty 06.02.2022 - Anton Kupias*/}
                {EdittedTitle}{' '}{DateEditted}{' - '}{UserEditted}
            </p>
            <div>
                <a href="google.com" className={styles.editPhenomenonBtn}>

                    <span className={clsx(styles.pencilIcon, 'af-custom-edit')}></span>
                    {/* EDIT PHENOMENON */}
                    {lang === 'fi' ? finalTranslations?.editPhenomenon?.fi.toUpperCase() : finalTranslations?.editPhenomenon?.en.toUpperCase()}
                </a>
            </div>
        </div>
    );
};

export default CardFooter;
