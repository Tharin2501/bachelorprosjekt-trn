import React, { useState } from "react"
import SkincareDesktopCard from "./skincareDesktopCard"
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import { setProgressBarValue } from "../utils/skincareRotuinePickerUtils"
import { checkIfSpaceOrEnterPressed } from "../../utils/accessibilityUtil"

const SkincareDesktopCarusel = (props) => {
    const [stepNameText, setStepNameText] = useState(props.steptext);
    const [goToNextStepButtonText, setGoToNextStepButtonText] = useState(" Gå til neste steg");


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

            } else {

                setGoToNextStepButtonText("Fullfør å gå til handlekurven")
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

                <SkincareDesktopCard addToChosenProdutsArrayFunction={props.addToChosenProdutsArrayFunction} addChosenProductsToCart={props.addChosenProductsToCart} stepNumber={props.stepNumber} stepText={`Steg ${props.stepNumber}:${stepNameText}`} goToNextStepButtonText={goToNextStepButtonText} changeStep={changeStep} product={product} progressBarValue={setProgressBarValue(props.stepNumber)}></SkincareDesktopCard>

            </CarouselItem>
        );
    });

    /*
    
                <CarouselIndicators className="myCaruselIndictaor" items={props.productsToShowArray} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {(activeIndex != 0) ? (<CarouselControl className="controltest" direction="prev" directionText="Previous" onClickHandler={previous}></CarouselControl>) : (null)}
                {(activeIndex === props.productsToShowArray.length) ? (<CarouselControl className="controltest" direction="prev" directionText="Previous" onClickHandler={previous}></CarouselControl>) : (null)}
    
    
                <CarouselControl className="controltest" direction="next" directionText="Next" onClickHandler={next} />
    
                */
    const test = () => {
        console.log("test")
    }

    return (
        <div className="container desktopCarusel">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                Autoplay={false}
                interval={false}
                className="desktopSkincareCaruselWrapper"
                itemClass="desktopSkincareCaruselWrapper"

            >



                <CarouselIndicators items={props.productsToShowArray} className="myCaruselIndictaor" activeIndex={activeIndex} onClickHandler={goToIndex} />

                {slides}
                <a onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? previous() : null }}><CarouselControl className="controltest" direction="prev" directionText="Previous" onClickHandler={previous} /></a>
                <a onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? next() : null }}><CarouselControl className="controltest" direction="next" directionText="Next" onClickHandler={next} /></a>





            </Carousel>
        </div>



    );
}

export default SkincareDesktopCarusel