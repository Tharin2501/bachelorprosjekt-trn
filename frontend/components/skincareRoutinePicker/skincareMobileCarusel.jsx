import React, { Component, useRef, useEffect } from "react"
import Carousel from "react-multi-carousel";
import SkincareCaruselCard from "./skincareCaruselCard"
import "react-multi-carousel/lib/styles.css";
import { Button } from "reactstrap";

const scrollToRef = (ref) => {

  window.scrollTo(0, ref.current.offsetTop);
}
// https://www.w3schools.com/howto/howto_css_button_on_image.asp USE!
const SkincareMobileCarusel = (props) => {
  //         

  const executeScroll = () => {
    scrollToRef(caruselRef);
  }

  const caruselRef = useRef(null);


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
        renderDotsOutside={false}
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
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {props.productsToShowArray.map((product) => {
          return (
            <SkincareCaruselCard productName="test1" />
          )
        })}


      </Carousel>
      <Button onClick={executeScroll} > test </Button>
    </div>

  );
}




export default SkincareMobileCarusel

