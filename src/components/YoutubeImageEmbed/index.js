import React from "react";


const YoutubeImageEmbed = ({ embedId }) => (
    <>
        <div className="overflow-hidden pb-56.25% relative h-0" >
            <iframe
                className="left-0 top-0 h-100% w-100% absolute"
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
        <p className="mt-2 text-p-desc italic">The Explainer: Big Data and Analytics, Harvard Business Review</p>
        <img className="h-100% w-100% mt-4" src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="nature"/>
    </>

);

export default YoutubeImageEmbed;