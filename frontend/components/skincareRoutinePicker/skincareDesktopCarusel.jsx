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


const SkincareDesktopCarusel = (props) => {
    const [stepNameText, setStepNameText] = useState("Rens");


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


    const changeStep = () => {
        if (props.stepNumber === 3) {
            return
        } else {
            let newStepNumber = props.stepNumber + 1
            props.goToNextStepFunction(newStepNumber);
            if (newStepNumber == 2) {
                setStepNameText("Toner")
            } else {
                setStepNameText("Fuktihetskrem")
            }
        }

    }

    const slides = props.productsToShowArray.map((product) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={product.id}

            >

                <SkincareDesktopCard stepText={`Steg ${props.stepNumber}:${stepNameText}`} changeStep={changeStep} product={product} addToChosenProdutsArrayFunction={props.addToChosenProdutsArrayFunction}></SkincareDesktopCard>

            </CarouselItem>
        );
    });

    /*
    
                <CarouselIndicators className="myCaruselIndictaor" items={props.productsToShowArray} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {(activeIndex != 0) ? (<CarouselControl className="controltest" direction="prev" directionText="Previous" onClickHandler={previous}></CarouselControl>) : (null)}
                {(activeIndex === props.productsToShowArray.length) ? (<CarouselControl className="controltest" direction="prev" directionText="Previous" onClickHandler={previous}></CarouselControl>) : (null)}
    
    
                <CarouselControl className="controltest" direction="next" directionText="Next" onClickHandler={next} />
    
                */


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