
import React, { useRef, useState } from "react"
import Carousel from "react-multi-carousel";

import SkincareCaruselCard from "./skincareCaruselCard"
import { setProgressBarValue } from "../utils/skincareRotuinePickerUtils";

const scrollToRef = (ref) => {

  window.scrollTo(0, ref.current.offsetTop);
}
// https://www.w3schools.com/howto/howto_css_button_on_image.asp USE!
const SkincareMobileCarusel = (props) => {


  const executeScroll = () => {
    scrollToRef(caruselRef);
  }

  const caruselRef = useRef(null);
  /* From desktop*/
  const [stepNameText, setStepNameText] = useState("Rens");
  const [goToNextStepButtonText, setGoToNextStepButtonText] = useState(" Gå til neste steg");

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
        setGoToNextStepButtonText("Fullfør å gå til handlekurven")
      }
    }

  }
  return (

    <div className="skincareMobileDiv" id="test" ref={caruselRef} >

      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        partialVisible
        className=""
        containerClass="container"
        ssr={true} // means to render carousel on server-side.
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass="skincareMobileCard"
        keyBoardControl
        minimumTouchDrag={20}


        renderButtonGroupOutside={false}
        renderDotsOutside={true}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
              mouseDrag: false,
              touchDrag: true

            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
          }
        }}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {props.productsToShowArray.map((product) => {
          return (
            <SkincareCaruselCard addToChosenProdutsArrayFunction={props.addToChosenProdutsArrayFunction} addChosenProductsToCart={props.addChosenProductsToCart} stepNumber={props.stepNumber} stepText={`Steg ${props.stepNumber}:${stepNameText}`} goToNextStepButtonText={goToNextStepButtonText} changeStep={changeStep} product={product} progressBarValue={setProgressBarValue(props.stepNumber)} />
          )
        })}


      </Carousel>
    </div>

  );
}




export default SkincareMobileCarusel;

