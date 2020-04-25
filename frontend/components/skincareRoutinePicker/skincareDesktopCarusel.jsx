import React, { useState } from "react"
import SkincareDesktopCard from "./skincareDesktopCard"
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";



const oleHenProduct = {
    stepText: "Steg 1:Rens",
    imageUrl: "/files/1279254-trnLargeFormat.jpg",
    productName: "Ole Henriksen green tea Toner",
    productPrice: "999 kr",
    productDescription: "Using bootstrap's jumbotron with the particle.js background to make the jumbotron semi-transparent."
}

const SkincareDesktopCarusel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    props.productsToShowArray
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.productsToShowArray.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.productsToShowArray.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = props.productsToShowArray.map((product) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={product.id}

            >

                <SkincareDesktopCard product={product}></SkincareDesktopCard>

            </CarouselItem>
        );
    });


    return (

        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            Autoplay={false}
            interval={false}
        >

            {slides}


            <CarouselControl className="controltest" direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl className="controltest" direction="next" directionText="Next" onClickHandler={next} />

            <CarouselIndicators className="myCaruselIndictaor" items={props.productsToShowArray} activeIndex={activeIndex} onClickHandler={goToIndex} />



        </Carousel>

    );
}

export default SkincareDesktopCarusel