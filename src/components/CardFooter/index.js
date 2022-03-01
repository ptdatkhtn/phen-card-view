import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { finalTranslations } from "../../localTranslation";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
const CardFooter = ({
    lang
}) => {
    const EdittedTitle = lang === 'fi' ? finalTranslations?.editted?.fi :finalTranslations?.editted?.en;
    const DateEditted = `27.05.2021`
    const UserEditted = `Futures Platform`

    return (
        <div className="phen-card-tw-mt-16 phen-card-tw-mb-12 phen-card-tw-border-t-2 phen-card-tw-border-lightgray">
            <p className="phen-card-tw-text-p-desc phen-card-tw-italic phen-card-tw-my-4 phen-card-tw-text-black">
                {/* Edited 27.05.2021 by Futures Platform Päivitetty 06.02.2022 - Anton Kupias*/}
                {EdittedTitle}{' '}{DateEditted}{' - '}{UserEditted}
            </p>
            <div>
                <a href="google.com" className="phen-card-tw-border-blue phen-card-tw-text-meta border-w-0_5 phen-card-tw-rounded-full phen-card-tw-py-2 phen-card-tw-px-4 phen-card-tw-text-center phen-card-tw-text-blue hover:phen-card-tw-no-underline hover:phen-card-tw-cursor-pointer">
                    {/* <FontAwesomeIcon
                        icon={faPencilAlt}
                        className="text-p-desc mr-2"
                    /> */}
                    <span className="af-custom-edit phen-card-tw-mr-2"></span>
                    {/* EDIT PHENOMENON */}
                    {lang === 'fi' ? finalTranslations?.editPhenomenon?.fi.toUpperCase() : finalTranslations?.editPhenomenon?.en.toUpperCase()}
                </a>
            </div>
        </div>
    );
};

export default CardFooter;
