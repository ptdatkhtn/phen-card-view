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
        <div className="mt-16 mb-12 border-t-2 border-lightgray pl-10">
            <p className="text-p-desc italic my-6 text-black">
                {/* Edited 27.05.2021 by Futures Platform Päivitetty 06.02.2022 - Anton Kupias*/}
                {EdittedTitle}{' '}{DateEditted}{' - '}{UserEditted}
            </p>
            <div>
                <a href="#" className="border-blue text-meta border-w-0_5 rounded-full py-2 px-4 text-center text-blue hover:no-underline">
                    {/* <FontAwesomeIcon
                        icon={faPencilAlt}
                        className="text-p-desc mr-2"
                    /> */}
                    <span className="af-custom-edit  mr-2"></span>
                    {/* EDIT PHENOMENON */}
                    {lang === 'fi' ? finalTranslations?.editPhenomenon?.fi.toUpperCase() : finalTranslations?.editPhenomenon?.en.toUpperCase()}
                </a>
            </div>
        </div>
    );
};

export default CardFooter;
