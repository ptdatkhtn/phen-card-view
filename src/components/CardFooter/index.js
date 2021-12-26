import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
const CardFooter = () => {
    return (
        <div className="mt-16 mb-12 border-t-2 border-lightgray pl-10">
            <p className="text-p-desc italic my-6 text-black">
                Edited 27.05.2021 by Futures Platform
            </p>
            <div>
                <a href="#" className="border-2 !border-blue rounded-full py-2 px-4 text-center text-blue font-bold">
                    <FontAwesomeIcon
                        icon={faPencilAlt}
                        className="text-p-desc mr-2"
                    />
                    EDIT PHENOMENON
                </a>
            </div>
        </div>
    );
};

export default CardFooter;
