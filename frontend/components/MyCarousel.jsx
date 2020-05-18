import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: "../images/carousel/nyhet1.jpg",
        altText: 'Tre sminket kvinner med en lakserosa bakgrunnsfarge.Med tekst som sier "Get the look, Få tips av våre eksperter"',
        caption: '',
        key: '1',

    },
    {
        src: "../images/carousel/nyhet2.jpg",
        altText: 'Salg opp til -40% på utvalgte produkter.',
        caption: '',
        key: '2',

    },
    {
        src: "../images/carousel/nyhet3.jpg",
        altText: 'Typisks huser man finner i San Fransisco med en hippy van foran. Lokalisert i en ørken med en rosa bakgrunn. To av husene til venstra har en bilboard på taket som sier "Benefit San Fransisco kommer snart"',
        caption: '',
        key: '3'
    }
];

const MyCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (

            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >

                <img src={item.src} alt={item.altText} className={"d-block w-120 caruselSizeController"} />

                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>

        );
    });


    return (
        <div className="container ">
            <div className="row justify-content-center ">
                <div>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </div>
            </div>
        </div>
    );



};


export default MyCarousel;
/*
       <div className="container-fluid ">
            <div className="row justify-content-center">
                <div className={"caruselSizeController"}>
                    <UncontrolledCarousel items={items} />
                </div>
            </div>
        </div>
        */