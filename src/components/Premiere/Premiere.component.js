import React from "react";

import Slider from "react-slick";

import Poster from "../Poster/Poster.component";

//config
import settings from "../../config/PosterCarousal.config";

//Images
import PremiereImages from "../../config/TempPosters.config";

export const Premiere = () => {

    return (
        <>
        <div className="flex flex-col items-start py-4" >
            <h3 className="text-white text-xl font-bold">Premieres</h3>
            <p className="text-white text-sm">Brand new release every Friday</p>

        </div>

        <Slider {...settings} >
            {PremiereImages.map((image) => (
                <Poster {...image} isDark />
            ))}
        </Slider>
        </>
    );
};

export default Premiere;

