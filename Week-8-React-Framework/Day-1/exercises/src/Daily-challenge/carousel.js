 //------dailychallenge---------//

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./styleCarousel.css"

export function testCarousel() {
    return (
        <Carousel className="edit">
        <div>
        <img src="./assets/hongkong.jpg" alt="" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src="./assets/macao.webp" alt=""/>
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src="./assets/japan.webp" alt=""/>
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src="./assets/las vegas.webp" alt=""/>
        <p className="legend">Legend 2</p>
    </div>
        </Carousel>

    )
}

export default testCarousel